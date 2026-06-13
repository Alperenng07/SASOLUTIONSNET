/* ==========================================================================
   SASOLUTIONSNET - Authentication Service (JWT & Crypt)
   ========================================================================== */

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('./db');

const JWT_SECRET = 'sasolutions_super_secret_jwt_key_2026';

// 1. Generate JWT Token
function generateToken(user) {
    return jwt.sign(
        { username: user.username, role: user.role, name: user.name },
        JWT_SECRET,
        { expiresIn: '24h' }
    );
}

// 2. JWT Validation Middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <Token>

    if (!token) {
        return res.status(401).json({ success: false, message: 'Yetkisiz erişim. Token bulunamadı.' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ success: false, message: 'Geçersiz veya süresi dolmuş token.' });
        }
        req.user = decoded;
        next();
    });
}

// 3. Login Controller Uç Noktası
async function loginController(req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Kullanıcı adı ve şifre gereklidir.' });
    }

    try {
        const users = await db.getTable('users');
        const user = users.find(u => u.username === username.toLowerCase().trim());

        if (!user) {
            return res.status(400).json({ success: false, message: 'Kullanıcı adı veya şifre hatalı!' });
        }

        // Compare encrypted password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Kullanıcı adı veya şifre hatalı!' });
        }

        // Generate Token
        const token = generateToken(user);

        return res.json({
            success: true,
            token: token,
            user: {
                name: user.name,
                role: user.role,
                username: user.username
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ success: false, message: 'Giriş işlemi sırasında sunucu hatası oluştu.' });
    }
}

module.exports = {
    authenticateToken,
    loginController
};
