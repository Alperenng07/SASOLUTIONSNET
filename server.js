/* ==========================================================================
   SASOLUTIONSNET - Express Full-Stack Server
   ========================================================================== */

const express = require('express');
const path = require('path');
const db = require('./db');
const { authenticateToken, loginController } = require('./auth');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files (showcase and admin panel)
app.use(express.static(path.join(__dirname)));

// ==========================================================================
// AUTH ROUTE
// ==========================================================================
app.post('/api/auth/login', loginController);

// ==========================================================================
// PUBLIC SHOWCASE ENDPOINTS
// ==========================================================================

// Get Projects List
app.get('/api/projects', async (req, res) => {
    try {
        const data = await db.getTable('projects');
        res.json(data);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Projeler yüklenirken hata oluştu.' });
    }
});

// Get Services List
app.get('/api/services', async (req, res) => {
    try {
        const data = await db.getTable('services');
        res.json(data);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Hizmetler yüklenirken hata oluştu.' });
    }
});

// Get Ads / Partners List
app.get('/api/ads', async (req, res) => {
    try {
        const data = await db.getTable('ads');
        res.json(data);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Reklamlar yüklenirken hata oluştu.' });
    }
});

// Get Settings details
app.get('/api/settings', async (req, res) => {
    try {
        const dbState = await db.load();
        res.json(dbState.settings);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Ayarlar yüklenirken hata oluştu.' });
    }
});

// Submit Contact Message (Public)
app.post('/api/inbox', async (req, res) => {
    const { sender, email, message } = req.body;

    if (!sender || !email || !message) {
        return res.status(400).json({ success: false, message: 'Ad, e-posta ve mesaj alanları zorunludur.' });
    }

    try {
        const dateStr = new Date().toISOString().replace('T', ' ').substring(0, 16);
        const newMessage = {
            id: 'msg' + Date.now(),
            sender: sender.trim(),
            email: email.trim(),
            message: message.trim(),
            date: dateStr,
            is_read: false,
            is_archived: false
        };

        await db.insert('inbox', newMessage);
        res.json({ success: true, message: 'Mesaj başarıyla veritabanına kaydedildi.' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Mesaj gönderilirken sunucu hatası oluştu.' });
    }
});

// ==========================================================================
// PROTECTED ADMIN CRUD ENDPOINTS (Requires valid JWT token)
// ==========================================================================

// --- PROJECTS ---
// Create Project
app.post('/api/projects', authenticateToken, async (req, res) => {
    try {
        const item = req.body;
        const inserted = await db.insert('projects', item);
        res.status(201).json({ success: true, data: inserted });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Proje oluşturulamadı.' });
    }
});

// Update Project
app.put('/api/projects/:id', authenticateToken, async (req, res) => {
    try {
        const id = req.params.id;
        const updated = await db.update('projects', id, req.body);
        if (updated) {
            res.json({ success: true, data: updated });
        } else {
            res.status(404).json({ success: false, message: 'Proje bulunamadı.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Proje güncellenemedi.' });
    }
});

// Delete Project
app.delete('/api/projects/:id', authenticateToken, async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await db.delete('projects', id);
        if (deleted) {
            res.json({ success: true, message: 'Proje başarıyla silindi.' });
        } else {
            res.status(404).json({ success: false, message: 'Proje bulunamadı.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Proje silinemedi.' });
    }
});

// --- SERVICES ---
// Create Service
app.post('/api/services', authenticateToken, async (req, res) => {
    try {
        const item = req.body;
        const inserted = await db.insert('services', item);
        res.status(201).json({ success: true, data: inserted });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Hizmet oluşturulamadı.' });
    }
});

// Update Service
app.put('/api/services/:id', authenticateToken, async (req, res) => {
    try {
        const id = req.params.id;
        const updated = await db.update('services', id, req.body);
        if (updated) {
            res.json({ success: true, data: updated });
        } else {
            res.status(404).json({ success: false, message: 'Hizmet bulunamadı.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Hizmet güncellenemedi.' });
    }
});

// Delete Service
app.delete('/api/services/:id', authenticateToken, async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await db.delete('services', id);
        if (deleted) {
            res.json({ success: true, message: 'Hizmet başarıyla silindi.' });
        } else {
            res.status(404).json({ success: false, message: 'Hizmet bulunamadı.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Hizmet silinemedi.' });
    }
});

// --- ADS ---
// Create Ad
app.post('/api/ads', authenticateToken, async (req, res) => {
    try {
        const item = req.body;
        const inserted = await db.insert('ads', item);
        res.status(201).json({ success: true, data: inserted });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Reklam oluşturulamadı.' });
    }
});

// Update Ad
app.put('/api/ads/:id', authenticateToken, async (req, res) => {
    try {
        const id = req.params.id;
        const updated = await db.update('ads', id, req.body);
        if (updated) {
            res.json({ success: true, data: updated });
        } else {
            res.status(404).json({ success: false, message: 'Reklam bulunamadı.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Reklam güncellenemedi.' });
    }
});

// Delete Ad
app.delete('/api/ads/:id', authenticateToken, async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await db.delete('ads', id);
        if (deleted) {
            res.json({ success: true, message: 'Reklam başarıyla silindi.' });
        } else {
            res.status(404).json({ success: false, message: 'Reklam bulunamadı.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Reklam silinemedi.' });
    }
});

// --- SETTINGS ---
// Update Settings
app.put('/api/settings', authenticateToken, async (req, res) => {
    try {
        const updated = await db.update('settings', null, req.body);
        res.json({ success: true, data: updated });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Ayarlar güncellenemedi.' });
    }
});

// --- INBOX (MESSAGES) ---
// Get Inbox Messages (All - including read/archived for management)
app.get('/api/inbox', authenticateToken, async (req, res) => {
    try {
        const data = await db.getTable('inbox');
        res.json(data);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Mesaj kutusu yüklenemedi.' });
    }
});

// Update Message read / archive status
app.put('/api/inbox/:id', authenticateToken, async (req, res) => {
    try {
        const id = req.params.id;
        const updated = await db.update('inbox', id, req.body);
        if (updated) {
            res.json({ success: true, data: updated });
        } else {
            res.status(404).json({ success: false, message: 'Mesaj bulunamadı.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Mesaj güncellenemedi.' });
    }
});

// Wildcard route to handle index.html fallback
app.get('*', (req, res) => {
    // Prevent serving index.html for missing static files with extensions (.css, .js, etc.)
    if (path.extname(req.path)) {
        return res.status(404).send('Not Found');
    }
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Boot listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
