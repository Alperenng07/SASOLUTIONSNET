/* ==========================================================================
   SASOLUTIONSNET - JSON Database Wrapper (Zero-Dependency ORM)
   ========================================================================== */

const fs = require('fs').promises;
const path = require('path');
const bcrypt = require('bcryptjs');

let MongoClient;
try {
    MongoClient = require('mongodb').MongoClient;
} catch (e) {
    // Optional local dependency
}

const DB_FILE = path.join(__dirname, 'database.json');

// Seeding Default Credentials & Mock Data
const getDefaultData = async () => {
    // Hash default admin password: admin123
    const salt = await bcrypt.genSalt(10);
    const adminPasswordHash = await bcrypt.hash('admin123', salt);

    return {
        users: [
            {
                username: 'admin',
                password: adminPasswordHash,
                name: 'Süleyman Arslan',
                role: 'Sistem Yöneticisi'
            }
        ],
        projects: [
            {
                id: "p1",
                category: "completed",
                tr: {
                    title: "OmniChannel E-Ticaret Platformu",
                    desc: "Küresel bir perakende markası için geliştirilen, mikroservis yapısında, saniyede 15.000 işlem kapasiteli e-ticaret altyapısı.",
                },
                en: {
                    title: "OmniChannel E-Commerce Suite",
                    desc: "A highly-available microservices platform engineered for a global retailer, serving over 15k active transactions per second.",
                },
                tags: ["Next.js", "Go-lang", "Kubernetes", "Redis"],
                icon: `<svg class="portfolio-img-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                         <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                         <line x1="3" y1="6" x2="21" y2="6"></line>
                         <path d="M16 10a4 4 0 0 1-8 0"></path>
                       </svg>`,
                link: "#"
            },
            {
                id: "p2",
                category: "completed",
                tr: {
                    title: "FinTech Mobil Yatırım Cüzdanı",
                    desc: "Biyometrik güvenlik entegrasyonlu, anlık kripto/borsa veri takibi ve bakiye transferi yapan mobil cüzdan uygulaması.",
                },
                en: {
                    title: "FinTech Digital Wealth Wallet",
                    desc: "A secure investment mobile app equipped with biometric verification, instant asset transfers, and live ticker feeds.",
                },
                tags: ["Flutter", "Node.js", "PostgreSQL", "Socket.io"],
                icon: `<svg class="portfolio-img-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                         <line x1="12" y1="1" x2="12" y2="23"></line>
                         <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                       </svg>`,
                link: "#"
            },
            {
                id: "p3",
                category: "ongoing",
                tr: {
                    title: "Otonom Depo Yönetim Sistemi",
                    desc: "Büyük ölçekli lojistik merkezlerinde, robotik ünitelerin koordinasyonunu yapay zeka ile yöneten otomasyon paneli.",
                },
                en: {
                    title: "Autonomous Warehouse ERP",
                    desc: "An advanced automation console optimizing robotic unit pathways and fleet logistics via predictive AI models.",
                },
                tags: ["React", "Python AI", "WebSockets", "Docker"],
                icon: `<svg class="portfolio-img-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                         <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                         <line x1="9" y1="3" x2="9" y2="21"></line>
                         <line x1="15" y1="3" x2="15" y2="21"></line>
                         <line x1="3" y1="9" x2="21" y2="9"></line>
                         <line x1="3" y1="15" x2="21" y2="15"></line>
                       </svg>`,
                progress: 78
            },
            {
                id: "p4",
                category: "ongoing",
                tr: {
                    title: "Tele-Sağlık & Uzaktan Teşhis Portalı",
                    desc: "WebRTC tabanlı, doktor-hasta görüşmelerini uçtan uca şifreleyen, yapay zeka destekli ön teşhis mekanizması.",
                },
                en: {
                    title: "Bilingual Tele-Health Portal",
                    desc: "WebRTC powered secure patient consulting panel utilizing AI-assisted pre-diagnosis pipelines.",
                },
                tags: ["Next.js", "WebRTC", "FastAPI", "MongoDB"],
                icon: `<svg class="portfolio-img-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                         <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                       </svg>`,
                progress: 45
            },
            {
                id: "p5",
                category: "upcoming",
                tr: {
                    title: "B2B SaaS Akıllı Kontrat Entegrasyonu",
                    desc: "Klasik tedarik zinciri anlaşmalarını Ethereum/Solana altyapısına taşıyacak, yasal uyumluluk modüllü akıllı kontrat aracı.",
                },
                en: {
                    title: "Decentralized Supply Smart Contracts",
                    desc: "A protocol translating supply chain milestones into secure Ethereum/Solana smart contracts automatically.",
                },
                tags: ["Solidity", "Rust", "Web3.js", "SaaS Core"],
                icon: `<svg class="portfolio-img-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                         <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                       </svg>`,
                comingSoonText: "Q4 2026"
            }
        ],
        services: [
            {
                id: "web",
                icon: "web",
                tr: {
                    name: "Web Teknolojileri",
                    desc: "Ölçeklenebilir, yüksek performanslı ve modern web uygulamaları, SaaS platformları ve kurumsal portallar."
                },
                en: {
                    name: "Web Technologies",
                    desc: "Scalable, high-performance web applications, cloud SaaS platforms, and enterprise portals."
                }
            },
            {
                id: "mobile",
                icon: "mobile",
                tr: {
                    name: "Mobil Uygulamalar",
                    desc: "iOS ve Android platformlarında yerel (native) ve hibrit teknolojilerle geliştirilmiş, akıcı kullanıcı deneyimli uygulamalar."
                },
                en: {
                    name: "Mobile Apps",
                    desc: "Fluid user experiences designed for iOS and Android platforms using native and hybrid tech."
                }
            },
            {
                id: "cloud",
                icon: "cloud",
                tr: {
                    name: "Bulut & DevOps",
                    desc: "Yüksek erişilebilirlik sunan AWS/GCP mimarileri, CI/CD süreç optimizasyonları ve Kubernetes entegrasyonları."
                },
                en: {
                    name: "Cloud & DevOps",
                    desc: "High-availability AWS/GCP architectures, CI/CD process optimizations, and Kubernetes scaling."
                }
            },
            {
                id: "ai",
                icon: "ai",
                tr: {
                    name: "Yapay Zeka & Büyük Veri",
                    desc: "Özel makine öğrenimi modelleri, doğal dil işleme çözümleri ve verilerinizden anlamlı içgörüler üreten analitik sistemler."
                },
                en: {
                    name: "AI & Big Data",
                    desc: "Custom ML models, natural language processing tools, and analytics engines that derive insights."
                }
            }
        ],
        ads: [
            {
                id: "ad1",
                partner: "GlobalTech Cloud Solutions",
                position: "Anasayfa Banner",
                expiry: "2026-12-31",
                active: true
            },
            {
                id: "ad2",
                partner: "Vertex AI Labs",
                position: "Yan Panel",
                expiry: "2026-08-15",
                active: true
            }
        ],
        inbox: [
            {
                id: "msg1",
                sender: "Ahmet Yılmaz",
                email: "ahmet@yilmazholding.com",
                message: "Merhabalar, perakende sektöründe faaliyet gösteren holdingimiz için kapsamlı bir B2B e-ticaret platformu kurmak istiyoruz. Next.js ve mikroservis mimarileri konusundaki tecrübeleriniz ilgimizi çekti. Bir ön görüşme ayarlayabilir miyiz?",
                date: "2026-06-06 14:32",
                is_read: false,
                is_archived: false
            },
            {
                id: "msg2",
                sender: "Sarah Jenkins",
                email: "sarah.j@nexustech.io",
                message: "Hello SASOLUTIONSNET team, I wanted to inquire about your mobile development rates for a React Native investment app project. We have the Figma mockups ready. Let me know if you are open to contract work this quarter.",
                date: "2026-06-05 09:15",
                is_read: true,
                is_archived: false
            }
        ],
        settings: {
            email: "info@sasolutionsnet.com",
            phone: "+90 (212) 000 00 00",
            tr: { address: "Maslak Teknokent, Kat: 4, Sarıyer / İstanbul" },
            en: { address: "Maslak Teknokent, Floor: 4, Sariyer / London" }
        }
    };
};

class JSONDatabase {
    constructor() {
        this.cache = null;
    }

    // Load entire database into memory cache
    async load() {
        if (this.cache) return this.cache;

        try {
            const dataStr = await fs.readFile(DB_FILE, 'utf8');
            this.cache = JSON.parse(dataStr);
        } catch (error) {
            // File doesn't exist, create and seed it
            const defaultData = await getDefaultData();
            await fs.writeFile(DB_FILE, JSON.stringify(defaultData, null, 2), 'utf8');
            this.cache = defaultData;
        }
        return this.cache;
    }

    // Save current memory cache state to database.json file
    async save() {
        if (!this.cache) return;
        await fs.writeFile(DB_FILE, JSON.stringify(this.cache, null, 2), 'utf8');
    }

    // Fetch complete table array
    async getTable(table) {
        const db = await this.load();
        return db[table] || [];
    }

    // Overwrite complete table data
    async setTable(table, data) {
        const db = await this.load();
        db[table] = data;
        await this.save();
    }

    // CRUD: INSERT
    async insert(table, item) {
        const db = await this.load();
        if (!db[table]) db[table] = [];
        db[table].push(item);
        await this.save();
        return item;
    }

    // CRUD: UPDATE BY KEY/ID
    async update(table, id, updatedFields) {
        const db = await this.load();
        if (!db[table]) return null;

        if (Array.isArray(db[table])) {
            const index = db[table].findIndex(item => item.id === id);
            if (index !== -1) {
                db[table][index] = { ...db[table][index], ...updatedFields };
                await this.save();
                return db[table][index];
            }
        } else {
            // Single object override (like settings)
            db[table] = { ...db[table], ...updatedFields };
            await this.save();
            return db[table];
        }
        return null;
    }

    // CRUD: DELETE BY ID
    async delete(table, id) {
        const db = await this.load();
        if (!db[table] || !Array.isArray(db[table])) return false;

        const originalLength = db[table].length;
        db[table] = db[table].filter(item => item.id !== id);
        
        if (db[table].length < originalLength) {
            await this.save();
            return true;
        }
        return false;
    }
}

class MongoDatabase {
    constructor(uri) {
        this.uri = uri;
        this.client = null;
        this.db = null;
        this.initialized = false;
    }

    async connect() {
        if (this.initialized) return;
        if (!MongoClient) {
            throw new Error("mongodb driver is not loaded. Run 'npm install' to resolve dependencies.");
        }
        this.client = new MongoClient(this.uri);
        await this.client.connect();
        this.db = this.client.db();
        this.initialized = true;
        await this.seedIfNeeded();
    }

    async seedIfNeeded() {
        try {
            // Check if users collection exists and has documents
            const collections = await this.db.listCollections({ name: 'users' }).toArray();
            let needsSeed = collections.length === 0;
            if (!needsSeed) {
                const count = await this.db.collection('users').countDocuments();
                needsSeed = count === 0;
            }

            if (needsSeed) {
                console.log('MongoDB is empty. Seeding default data...');
                const defaultData = await getDefaultData();
                for (const [table, data] of Object.entries(defaultData)) {
                    if (table === 'settings') {
                        await this.db.collection('settings').insertOne(data);
                    } else if (Array.isArray(data) && data.length > 0) {
                        await this.db.collection(table).insertMany(data);
                    }
                }
                console.log('MongoDB seeded successfully.');
            }
        } catch (err) {
            console.error('Error seeding MongoDB:', err);
        }
    }

    async getTable(table) {
        await this.connect();
        if (table === 'settings') {
            const settings = await this.db.collection('settings').findOne({});
            if (settings) {
                const { _id, ...rest } = settings;
                return rest;
            }
            const defaultData = await getDefaultData();
            return defaultData.settings;
        }
        const docs = await this.db.collection(table).find({}).toArray();
        return docs.map(({ _id, ...rest }) => rest);
    }

    async setTable(table, data) {
        await this.connect();
        await this.db.collection(table).deleteMany({});
        if (table === 'settings') {
            if (data) {
                await this.db.collection('settings').insertOne(data);
            }
        } else if (Array.isArray(data) && data.length > 0) {
            await this.db.collection(table).insertMany(data);
        }
    }

    async insert(table, item) {
        await this.connect();
        await this.db.collection(table).insertOne(item);
        const { _id, ...rest } = item;
        return rest;
    }

    async update(table, id, updatedFields) {
        await this.connect();
        if (table === 'settings') {
            await this.db.collection('settings').updateOne({}, { $set: updatedFields }, { upsert: true });
            return this.getTable('settings');
        }
        await this.db.collection(table).updateOne({ id: id }, { $set: updatedFields });
        const updated = await this.db.collection(table).findOne({ id: id });
        if (updated) {
            const { _id, ...rest } = updated;
            return rest;
        }
        return null;
    }

    async delete(table, id) {
        await this.connect();
        const result = await this.db.collection(table).deleteOne({ id: id });
        return result.deletedCount > 0;
    }
}

class DatabaseManager {
    constructor() {
        const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URL || process.env.MONGO_PRIVATE_URL;
        if (mongoUri) {
            console.log('Using MongoDB Database Adapter.');
            this.adapter = new MongoDatabase(mongoUri);
        } else {
            console.log('Using Local JSON File Database Adapter.');
            this.adapter = new JSONDatabase();
        }
    }

    async getTable(table) {
        return this.adapter.getTable(table);
    }

    async setTable(table, data) {
        return this.adapter.setTable(table, data);
    }

    async insert(table, item) {
        return this.adapter.insert(table, item);
    }

    async update(table, id, updatedFields) {
        return this.adapter.update(table, id, updatedFields);
    }

    async delete(table, id) {
        return this.adapter.delete(table, id);
    }
}

module.exports = new DatabaseManager();
