/* ==========================================================================
   SASOLUTIONSNET - Admin Panel Script (Full-Stack Integrated)
   ========================================================================== */

// 1. Database Default Values (For reference / fallbacks)
const defaultProjects = [
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
];

const defaultServices = [
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
];

const defaultAds = [
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
];

const defaultInbox = [
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
];

const defaultSettings = {
    email: "info@sasolutionsnet.com",
    phone: "+90 (212) 000 00 00",
    tr: { address: "Maslak Teknokent, Kat: 4, Sarıyer / İstanbul" },
    en: { address: "Maslak Teknokent, Floor: 4, Sariyer / London" }
};

// 2. Active Application State (loaded from Express backend APIs)
let projects = [];
let services = [];
let ads = [];
let inbox = [];
let settings = {};

let editingProjectIndex = null;
let editingServiceIndex = null;
let editingAdIndex = null;
let selectedMessageId = null;

// DOM Elements
const moduleTitle = document.getElementById("moduleTitle");
const navButtons = document.querySelectorAll(".nav-btn");
const moduleSections = document.querySelectorAll(".module-section");

// Form Modals
const projectModal = document.getElementById("projectModal");
const serviceModal = document.getElementById("serviceModal");
const adModal = document.getElementById("adModal");

// Forms
const projectForm = document.getElementById("projectForm");
const serviceForm = document.getElementById("serviceForm");
const adForm = document.getElementById("adForm");
const inboxReplyForm = document.getElementById("inboxReplyForm");

// Reader Panels
const readerContentWrap = document.getElementById("readerContentWrap");
const readerEmptyState = document.querySelector(".reader-empty-state");

// Inbox buttons
const btnMarkUnread = document.getElementById("btnMarkUnread");
const btnArchive = document.getElementById("btnArchive");

// API Request Wrapper with JWT Authorization
async function apiFetch(url, options = {}) {
    const token = localStorage.getItem("sasolutions_token");
    if (!token) {
        showLoginOverlay();
        throw new Error("Giriş yapılması gerekiyor.");
    }

    if (!options.headers) {
        options.headers = {};
    }
    options.headers["Authorization"] = `Bearer ${token}`;
    if (!options.headers["Content-Type"]) {
        options.headers["Content-Type"] = "application/json";
    }

    const res = await fetch(url, options);
    if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("sasolutions_token");
        showLoginOverlay();
        throw new Error("Oturum süresi doldu. Lütfen tekrar giriş yapın.");
    }
    return res;
}

function showLoginOverlay() {
    const overlay = document.getElementById("loginOverlay");
    if (overlay) {
        overlay.classList.add("active");
        overlay.style.display = "flex";
    }
}

function hideLoginOverlay() {
    const overlay = document.getElementById("loginOverlay");
    if (overlay) {
        overlay.classList.remove("active");
        overlay.style.display = "none";
    }
}

function updateTopbarUser(token) {
    if (!token) return;
    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        const username = payload.username || payload.sub || "admin";

        const nameEl   = document.getElementById("topbarUsername");
        const avatarEl = document.getElementById("topbarAvatar");
        if (nameEl)   nameEl.textContent   = username;
        if (avatarEl) avatarEl.textContent  = username.substring(0, 2).toUpperCase();
    } catch (e) {
        // ignore
    }
}

async function loadAllBackendData() {
    try {
        const [projectsRes, servicesRes, adsRes, inboxRes, settingsRes] = await Promise.all([
            apiFetch('/api/projects'),
            apiFetch('/api/services'),
            apiFetch('/api/ads'),
            apiFetch('/api/inbox'),
            apiFetch('/api/settings')
        ]);

        projects = await projectsRes.json();
        services = await servicesRes.json();
        ads = await adsRes.json();
        inbox = await inboxRes.json();
        settings = await settingsRes.json();

        // Render dashboard & lists
        updateKPINumbers();
        renderMiniMessages();
        renderProjectsTable();
        renderServicesTable();
        renderAdsTable();
        renderInbox();
        renderSettingsForm();
    } catch (err) {
        console.error("Veriler yüklenirken hata oluştu:", err);
    }
}

// 3. Application Lifecycle
document.addEventListener("DOMContentLoaded", async () => {
    // Setup login overlay listener
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const username = document.getElementById("login_user").value.trim();
            const password = document.getElementById("login_pass").value;
            const submitBtn = document.getElementById("loginSubmitBtn");
            const errorEl = document.getElementById("loginError");

            submitBtn.classList.add("loading");
            submitBtn.disabled = true;
            errorEl.style.display = "none";

            try {
                const res = await fetch("/api/auth/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password })
                });
                const data = await res.json();
                submitBtn.classList.remove("loading");
                submitBtn.disabled = false;

                if (res.ok && data.token) {
                    localStorage.setItem("sasolutions_token", data.token);
                    hideLoginOverlay();
                    updateTopbarUser(data.token);
                    await loadAllBackendData();
                } else {
                    errorEl.textContent = data.message || "Kullanıcı adı veya şifre hatalı!";
                    errorEl.style.display = "block";
                }
            } catch (err) {
                submitBtn.classList.remove("loading");
                submitBtn.disabled = false;
                errorEl.textContent = "Sunucuya bağlanılamadı.";
                errorEl.style.display = "block";
            }
        });
    }

    const token = localStorage.getItem("sasolutions_token");
    if (!token) {
        showLoginOverlay();
    } else {
        hideLoginOverlay();
        updateTopbarUser(token);
        await loadAllBackendData();
    }
    
    // Setup Sidebar Module Navigation
    initNavigation();
    
    // Form submission overrides
    projectForm.addEventListener("submit", handleProjectSubmit);
    serviceForm.addEventListener("submit", handleServiceSubmit);
    adForm.addEventListener("submit", handleAdSubmit);
    inboxReplyForm.addEventListener("submit", handleReplySubmit);
    document.getElementById("settingsForm").addEventListener("submit", handleSettingsSubmit);
});

// Navigation Engine
function initNavigation() {
    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetModule = btn.dataset.target;
            switchModule(targetModule);
        });
    });
}

function switchModule(moduleName) {
    // Toggle active sidebar buttons
    navButtons.forEach(btn => {
        if (btn.dataset.target === moduleName) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Toggle visible module sections
    moduleSections.forEach(section => {
        if (section.id === `${moduleName}-module`) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });

    // Set Topbar Header title
    let headerText = "Genel Bakış";
    switch (moduleName) {
        case "services": headerText = "Hizmet Yönetimi"; break;
        case "projects": headerText = "Projeler & Yol Haritası"; break;
        case "ads": headerText = "Partnerler & Sponsorlu Reklamlar"; break;
        case "inbox": headerText = "İletişim Havuzu (Gelen Kutusu)"; break;
        case "settings": headerText = "Sistem Ayarları"; break;
    }
    moduleTitle.textContent = headerText;
}

// KPI numbers calculator
function updateKPINumbers() {
    document.getElementById("kpi-projects").textContent = projects.length;
    document.getElementById("kpi-services").textContent = services.length;
    document.getElementById("kpi-ads").textContent = ads.length;
    
    const unreadCount = inbox.filter(msg => !msg.is_read && !msg.is_archived).length;
    document.getElementById("kpi-messages").textContent = unreadCount;
    
    // Navigation inbox indicator badge
    const badge = document.getElementById("unreadCountBadge");
    if (unreadCount > 0) {
        badge.textContent = unreadCount;
        badge.classList.add("show");
    } else {
        badge.classList.remove("show");
    }
}

// Bilingual Switcher logic inside Forms
function toggleFormLanguage(formId, lang) {
    const form = document.getElementById(formId);
    
    // Toggle Active tab button styling
    const tabButtons = form.querySelectorAll(".lang-tab");
    tabButtons.forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Display inputs matching language state, hide others
    const labels = form.querySelectorAll(".form-group label");
    labels.forEach(lbl => {
        const badge = lbl.querySelector(".lang-badge");
        if (badge) {
            badge.textContent = lang.toUpperCase();
        }
    });

    const langFields = form.querySelectorAll(".lang-field");
    langFields.forEach(field => {
        if (field.classList.contains(`${lang}-field`)) {
            field.style.display = "block";
        } else {
            field.style.display = "none";
        }
    });
}

// 5. PROJECT MODULE (CRUD)
function renderProjectsTable() {
    const tbody = document.querySelector("#projectsTable tbody");
    tbody.innerHTML = "";
    
    projects.forEach((item, index) => {
        let statusBadge = `<span class="badge badge-completed">Tamamlandı</span>`;
        if (item.category === "ongoing") {
            statusBadge = `<span class="badge badge-ongoing">Devam Ediyor</span>`;
        } else if (item.category === "upcoming") {
            statusBadge = `<span class="badge badge-upcoming">Yakında</span>`;
        }

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td style="font-weight:600; color: var(--admin-text-main);">${item.tr.title}</td>
            <td>${item.en.title}</td>
            <td>${statusBadge}</td>
            <td>${item.category === 'ongoing' ? item.progress + '%' : '100%'}</td>
            <td class="td-actions">
                <button class="btn btn-secondary btn-sm" onclick="openProjectEditor(${index})">Düzenle</button>
                <button class="btn btn-danger btn-sm" onclick="deleteProject(${index})">Sil</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openProjectEditor(index) {
    editingProjectIndex = index !== undefined ? index : null;
    
    // Reset Form active fields & visual language to TR
    projectForm.reset();
    toggleFormLanguage("projectForm", "tr");
    
    if (editingProjectIndex !== null) {
        document.getElementById("projectModalTitle").textContent = "Proje Düzenle";
        const proj = projects[editingProjectIndex];
        
        document.getElementById("proj_title_tr").value = proj.tr.title;
        document.getElementById("proj_title_en").value = proj.en.title;
        document.getElementById("proj_desc_tr").value = proj.tr.desc;
        document.getElementById("proj_desc_en").value = proj.en.desc;
        document.getElementById("proj_status").value = proj.category;
        document.getElementById("proj_progress").value = proj.progress || 100;
        document.getElementById("progress_val_display").textContent = proj.progress || 100;
        document.getElementById("proj_tags").value = proj.tags.join(", ");
        document.getElementById("proj_url").value = proj.project_url || "";
    } else {
        document.getElementById("projectModalTitle").textContent = "Yeni Proje Ekle";
        document.getElementById("proj_progress").value = 100;
        document.getElementById("progress_val_display").textContent = 100;
    }
    
    handleProjectStatusChange();
    projectModal.classList.add("active");
}

function closeProjectEditor() {
    projectModal.classList.remove("active");
}

function handleProjectStatusChange() {
    const status = document.getElementById("proj_status").value;
    const progressWrap = document.getElementById("proj_progress_wrap");
    
    if (status === "ongoing") {
        progressWrap.style.display = "block";
    } else {
        progressWrap.style.display = "none";
        document.getElementById("proj_progress").value = status === "completed" ? 100 : 0;
    }
}

async function handleProjectSubmit(e) {
    e.preventDefault();
    
    const titleTR = document.getElementById("proj_title_tr").value.trim();
    const titleEN = document.getElementById("proj_title_en").value.trim();
    const descTR = document.getElementById("proj_desc_tr").value.trim();
    const descEN = document.getElementById("proj_desc_en").value.trim();
    const status = document.getElementById("proj_status").value;
    const progressVal = parseInt(document.getElementById("proj_progress").value) || 0;
    const tagsVal = document.getElementById("proj_tags").value.split(",").map(t => t.trim()).filter(Boolean);
    const linkVal = document.getElementById("proj_url").value.trim();

    if (!titleTR || !titleEN || !descTR || !descEN) {
        alert("Lütfen tüm zorunlu Türkçe ve İngilizce alanları doldurun!");
        return;
    }

    const isEditing = editingProjectIndex !== null;
    const projectId = isEditing ? projects[editingProjectIndex].id : "p" + Date.now();

    const payload = {
        id: projectId,
        category: status,
        tr: { title: titleTR, desc: descTR },
        en: { title: titleEN, desc: descEN },
        tags: tagsVal,
        project_url: linkVal || "#",
        progress: progressVal,
        icon: `<svg class="portfolio-img-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                 <line x1="9" y1="3" x2="9" y2="21"></line>
                 <line x1="3" y1="9" x2="21" y2="9"></line>
               </svg>`
    };

    try {
        const url = isEditing ? `/api/projects/${projectId}` : '/api/projects';
        const method = isEditing ? 'PUT' : 'POST';

        const res = await apiFetch(url, {
            method: method,
            body: JSON.stringify(payload)
        });

        if (res.ok) {
            const resData = await res.json();
            if (isEditing) {
                projects[editingProjectIndex] = resData.data;
            } else {
                projects.push(resData.data);
            }
            renderProjectsTable();
            updateKPINumbers();
            closeProjectEditor();
        } else {
            alert('Hata: Proje kaydedilemedi.');
        }
    } catch (err) {
        console.error(err);
        alert('Sunucu bağlantı hatası.');
    }
}

async function deleteProject(index) {
    const proj = projects[index];
    if (!proj) return;

    if (confirm("Bu projeyi silmek istediğinize emin misiniz?")) {
        try {
            const res = await apiFetch(`/api/projects/${proj.id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                projects.splice(index, 1);
                renderProjectsTable();
                updateKPINumbers();
            } else {
                alert('Hata: Proje silinemedi.');
            }
        } catch (err) {
            console.error(err);
            alert('Sunucu bağlantı hatası.');
        }
    }
}

// 6. SERVICES MODULE (CRUD)
function renderServicesTable() {
    const tbody = document.querySelector("#servicesTable tbody");
    tbody.innerHTML = "";
    
    services.forEach((item, index) => {
        let iconSVG = "🖥️";
        if (item.icon === "mobile") iconSVG = "📱";
        else if (item.icon === "cloud") iconSVG = "☁️";
        else if (item.icon === "ai") iconSVG = "🤖";

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td style="font-size:1.3rem;">${iconSVG}</td>
            <td style="font-weight:600; color: var(--admin-text-main);">${item.tr.name}</td>
            <td>${item.en.name}</td>
            <td>${item.tr.desc}</td>
            <td class="td-actions">
                <button class="btn btn-secondary btn-sm" onclick="openServiceEditor(${index})">Düzenle</button>
                <button class="btn btn-danger btn-sm" onclick="deleteService(${index})">Sil</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openServiceEditor(index) {
    editingServiceIndex = index !== undefined ? index : null;
    serviceForm.reset();
    toggleFormLanguage("serviceForm", "tr");

    if (editingServiceIndex !== null) {
        document.getElementById("serviceModalTitle").textContent = "Hizmet Düzenle";
        const serv = services[editingServiceIndex];
        
        document.getElementById("service_name_tr").value = serv.tr.name;
        document.getElementById("service_name_en").value = serv.en.name;
        document.getElementById("service_desc_tr").value = serv.tr.desc;
        document.getElementById("service_desc_en").value = serv.en.desc;
        document.getElementById("service_icon").value = serv.icon;
    } else {
        document.getElementById("serviceModalTitle").textContent = "Yeni Hizmet Ekle";
    }
    
    serviceModal.classList.add("active");
}

function closeServiceEditor() {
    serviceModal.classList.remove("active");
}

async function handleServiceSubmit(e) {
    e.preventDefault();
    
    const nameTR = document.getElementById("service_name_tr").value.trim();
    const nameEN = document.getElementById("service_name_en").value.trim();
    const descTR = document.getElementById("service_desc_tr").value.trim();
    const descEN = document.getElementById("service_desc_en").value.trim();
    const icon = document.getElementById("service_icon").value;

    if (!nameTR || !nameEN || !descTR || !descEN) {
        alert("Lütfen tüm alanları doldurun!");
        return;
    }

    const isEditing = editingServiceIndex !== null;
    const serviceId = isEditing ? services[editingServiceIndex].id : "s" + Date.now();

    const payload = {
        id: serviceId,
        icon: icon,
        tr: { name: nameTR, desc: descTR },
        en: { name: nameEN, desc: descEN }
    };

    try {
        const url = isEditing ? `/api/services/${serviceId}` : '/api/services';
        const method = isEditing ? 'PUT' : 'POST';

        const res = await apiFetch(url, {
            method: method,
            body: JSON.stringify(payload)
        });

        if (res.ok) {
            const resData = await res.json();
            if (isEditing) {
                services[editingServiceIndex] = resData.data;
            } else {
                services.push(resData.data);
            }
            renderServicesTable();
            updateKPINumbers();
            closeServiceEditor();
        } else {
            alert('Hata: Hizmet kaydedilemedi.');
        }
    } catch (err) {
        console.error(err);
        alert('Sunucu bağlantı hatası.');
    }
}

async function deleteService(index) {
    const serv = services[index];
    if (!serv) return;

    if (confirm("Bu hizmeti silmek istediğinize emin misiniz?")) {
        try {
            const res = await apiFetch(`/api/services/${serv.id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                services.splice(index, 1);
                renderServicesTable();
                updateKPINumbers();
            } else {
                alert('Hata: Hizmet silinemedi.');
            }
        } catch (err) {
            console.error(err);
            alert('Sunucu bağlantı hatası.');
        }
    }
}

// 7. ADS MODULE (CRUD)
function renderAdsTable() {
    const tbody = document.querySelector("#adsTable tbody");
    tbody.innerHTML = "";
    
    ads.forEach((item, index) => {
        const isExpired = new Date(item.expiry) < new Date();
        const stateBadge = isExpired 
            ? `<span class="badge" style="background:rgba(239,68,68,0.1); color:var(--accent-red);">Süre Doldu</span>` 
            : `<span class="badge" style="background:rgba(34,197,94,0.1); color:var(--accent-green);">Yayında</span>`;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td style="font-weight:600; color: var(--admin-text-main);">${item.partner}</td>
            <td>${item.position}</td>
            <td>${stateBadge}</td>
            <td>${item.expiry}</td>
            <td class="td-actions">
                <button class="btn btn-secondary btn-sm" onclick="openAdEditor(${index})">Düzenle</button>
                <button class="btn btn-danger btn-sm" onclick="deleteAd(${index})">Sil</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openAdEditor(index) {
    editingAdIndex = index !== undefined ? index : null;
    adForm.reset();

    if (editingAdIndex !== null) {
        document.getElementById("adModalTitle").textContent = "Reklam Düzenle";
        const ad = ads[editingAdIndex];
        
        document.getElementById("ad_partner").value = ad.partner;
        document.getElementById("ad_target").value = ad.target_url || "#";
        document.getElementById("ad_position").value = ad.position;
        document.getElementById("ad_expiry").value = ad.expiry;
    } else {
        document.getElementById("adModalTitle").textContent = "Yeni Reklam Ekle";
    }
    
    adModal.classList.add("active");
}

function closeAdEditor() {
    adModal.classList.remove("active");
}

async function handleAdSubmit(e) {
    e.preventDefault();
    
    const partner = document.getElementById("ad_partner").value.trim();
    const target = document.getElementById("ad_target").value.trim();
    const position = document.getElementById("ad_position").value;
    const expiry = document.getElementById("ad_expiry").value;

    if (!partner || !target || !expiry) {
        alert("Lütfen alanları eksiksiz doldurun!");
        return;
    }

    const isEditing = editingAdIndex !== null;
    const adId = isEditing ? ads[editingAdIndex].id : "ad" + Date.now();

    const payload = {
        id: adId,
        partner: partner,
        target_url: target,
        position: position,
        expiry: expiry,
        active: new Date(expiry) >= new Date()
    };

    try {
        const url = isEditing ? `/api/ads/${adId}` : '/api/ads';
        const method = isEditing ? 'PUT' : 'POST';

        const res = await apiFetch(url, {
            method: method,
            body: JSON.stringify(payload)
        });

        if (res.ok) {
            const resData = await res.json();
            if (isEditing) {
                ads[editingAdIndex] = resData.data;
            } else {
                ads.push(resData.data);
            }
            renderAdsTable();
            updateKPINumbers();
            closeAdEditor();
        } else {
            alert('Hata: Reklam/Partner kaydedilemedi.');
        }
    } catch (err) {
        console.error(err);
        alert('Sunucu bağlantı hatası.');
    }
}

async function deleteAd(index) {
    const ad = ads[index];
    if (!ad) return;

    if (confirm("Bu reklamı/partneri silmek istediğinize emin misiniz?")) {
        try {
            const res = await apiFetch(`/api/ads/${ad.id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                ads.splice(index, 1);
                renderAdsTable();
                updateKPINumbers();
            } else {
                alert('Hata: Reklam/Partner silinemedi.');
            }
        } catch (err) {
            console.error(err);
            alert('Sunucu bağlantı hatası.');
        }
    }
}

// 8. INBOX / MESSAGES MODULE (Inbox split pane)
function renderInbox() {
    const threadList = document.getElementById("inboxThreadList");
    threadList.innerHTML = "";
    
    const activeMessages = inbox.filter(msg => !msg.is_archived);
    
    if (activeMessages.length === 0) {
        threadList.innerHTML = `<div style="padding:40px; text-align:center; color:var(--admin-text-muted);">Gelen kutusu boş.</div>`;
        return;
    }
    
    activeMessages.forEach(msg => {
        const thread = document.createElement("div");
        thread.className = `inbox-thread-item ${!msg.is_read ? 'unread' : ''} ${selectedMessageId === msg.id ? 'active' : ''}`;
        thread.innerHTML = `
            <div class="thread-sender">${msg.sender}</div>
            <div class="thread-snippet">${msg.message}</div>
            <div class="thread-date">${msg.date}</div>
        `;
        thread.addEventListener("click", () => openMessage(msg.id));
        threadList.appendChild(thread);
    });

    // Reset details panel if active message was archived
    if (selectedMessageId && !inbox.find(m => m.id === selectedMessageId && !m.is_archived)) {
        selectedMessageId = null;
        readerContentWrap.style.display = "none";
        readerEmptyState.style.display = "flex";
    }
}

// Dashboard mini messages listing
function renderMiniMessages() {
    const list = document.getElementById("miniMessagesList");
    list.innerHTML = "";
    
    // Sort and slice top 3 unarchived messages
    const displayMsgs = inbox.filter(msg => !msg.is_archived).slice(0, 3);
    
    if (displayMsgs.length === 0) {
        list.innerHTML = `<div style="color:var(--admin-text-muted); font-size:0.88rem;">Herhangi bir mesaj bulunmuyor.</div>`;
        return;
    }
    
    displayMsgs.forEach(msg => {
        const item = document.createElement("div");
        item.className = `mini-msg-item ${msg.is_read ? 'read' : ''}`;
        item.innerHTML = `
            <div class="mini-msg-header">
                <span class="mini-msg-sender">${msg.sender}</span>
                <span class="mini-msg-date">${msg.date}</span>
            </div>
            <div class="mini-msg-snippet">${msg.message}</div>
        `;
        item.addEventListener("click", () => {
            switchModule("inbox");
            openMessage(msg.id);
        });
        list.appendChild(item);
    });
}

async function openMessage(id) {
    selectedMessageId = id;
    const msg = inbox.find(m => m.id === id);
    if (!msg) return;

    // Mark as read in local memory
    msg.is_read = true;

    try {
        await apiFetch(`/api/inbox/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ is_read: true })
        });
    } catch (err) {
        console.error(err);
    }
    
    // Re-render interfaces to clear unread statuses
    renderInbox();
    renderMiniMessages();
    updateKPINumbers();

    // Populate Reader details
    document.getElementById("readerSender").textContent = msg.sender;
    const emailLink = document.getElementById("readerEmail");
    emailLink.textContent = msg.email;
    emailLink.href = `mailto:${msg.email}`;
    document.getElementById("readerDate").textContent = msg.date;
    document.getElementById("readerMessageText").textContent = msg.message;

    // Set buttons states
    btnMarkUnread.onclick = () => markMessageUnread(id);
    btnArchive.onclick = () => archiveMessage(id);

    // Swap displays
    readerEmptyState.style.display = "none";
    readerContentWrap.style.display = "flex";
}

async function markMessageUnread(id) {
    const msg = inbox.find(m => m.id === id);
    if (!msg) return;

    msg.is_read = false;

    try {
        await apiFetch(`/api/inbox/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ is_read: false })
        });
    } catch (err) {
        console.error(err);
    }
    
    // Reset panel view
    selectedMessageId = null;
    readerContentWrap.style.display = "none";
    readerEmptyState.style.display = "flex";
    
    renderInbox();
    renderMiniMessages();
    updateKPINumbers();
}

async function archiveMessage(id) {
    const msg = inbox.find(m => m.id === id);
    if (!msg) return;

    msg.is_archived = true;

    try {
        await apiFetch(`/api/inbox/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ is_archived: true })
        });
    } catch (err) {
        console.error(err);
    }

    // Reset panel view
    selectedMessageId = null;
    readerContentWrap.style.display = "none";
    readerEmptyState.style.display = "flex";

    renderInbox();
    renderMiniMessages();
    updateKPINumbers();
}

function handleReplySubmit(e) {
    e.preventDefault();
    const textVal = inboxReplyForm.querySelector("textarea").value.trim();
    if (!textVal) return;

    const feedback = document.getElementById("replySuccess");
    feedback.style.display = "block";
    inboxReplyForm.querySelector("textarea").value = "";

    setTimeout(() => {
        feedback.style.display = "none";
    }, 3000);
}

// 9. SYSTEM SETTINGS MODULE
function renderSettingsForm() {
    if (!settings || !settings.tr) return;
    document.getElementById("settings_email").value = settings.email || "";
    document.getElementById("settings_phone").value = settings.phone || "";
    document.getElementById("settings_address_tr").value = settings.tr.address || "";
    document.getElementById("settings_address_en").value = settings.en ? settings.en.address || "" : "";
}

async function handleSettingsSubmit(e) {
    e.preventDefault();
    const email = document.getElementById("settings_email").value.trim();
    const phone = document.getElementById("settings_phone").value.trim();
    const addressTR = document.getElementById("settings_address_tr").value.trim();
    const addressEN = document.getElementById("settings_address_en").value.trim();

    if (!email || !phone || !addressTR || !addressEN) {
        alert("Lütfen tüm alanları doldurun!");
        return;
    }

    const payload = {
        email: email,
        phone: phone,
        tr: { address: addressTR },
        en: { address: addressEN }
    };

    try {
        const res = await apiFetch('/api/settings', {
            method: 'PUT',
            body: JSON.stringify(payload)
        });

        if (res.ok) {
            settings = payload;
            const feedback = document.getElementById("settingsSuccess");
            feedback.style.display = "block";
            setTimeout(() => {
                feedback.style.display = "none";
            }, 3000);
        } else {
            alert('Hata: Ayarlar kaydedilemedi.');
        }
    } catch (err) {
        console.error(err);
        alert('Sunucu bağlantı hatası.');
    }
}
