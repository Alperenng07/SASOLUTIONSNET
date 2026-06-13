/* ==========================================================================
   SASOLUTIONSNET - Core Javascript Engine
   ========================================================================== */

// Translation Database (Bilingual Dictionary)
const translations = {
    tr: {
        // Navigation
        nav_home: "Ana Sayfa",
        nav_services: "Hizmetler",
        nav_portfolio: "Portföy",
        nav_partners: "Partnerler",
        nav_contact: "İletişim",
        
        // Hero
        hero_badge: "Yeni Nesil Teknoloji İş Ortağınız",
        hero_title_1: "Geleceğin Dijital",
        hero_title_2: "Altyapısını İnşa Ediyoruz",
        hero_desc: "SASOLUTIONSNET olarak, kurumsal işletmeler için ölçeklenebilir, modern ve yapay zeka destekli yazılım çözümleri üretiyoruz. İşinizi dijital çağın ilerisine taşıyoruz.",
        hero_btn_primary: "Hizmetlerimizi İnceleyin",
        hero_btn_secondary: "İletişime Geçin",
        stat_uptime: "Uptime Garantisi",
        stat_countries: "Ülkeye İhracat",

        // Services Section
        services_title: "Hizmet Alanlarımız",
        services_subtitle: "Vizyoner fikirlerinizi hayata geçirmek için en son teknoloji yığınlarını kullanıyor ve üst düzey çözümler geliştiriyoruz.",
        service_web_title: "Web Teknolojileri",
        service_web_desc: "Ölçeklenebilir, yüksek performanslı ve modern web uygulamaları, SaaS platformları ve kurumsal portallar.",
        service_mobile_title: "Mobil Uygulamalar",
        service_mobile_desc: "iOS ve Android platformlarında yerel (native) ve hibrit teknolojilerle geliştirilmiş, akıcı kullanıcı deneyimli uygulamalar.",
        service_cloud_title: "Bulut & DevOps",
        service_cloud_desc: "Yüksek erişilebilirlik sunan AWS/GCP mimarileri, CI/CD süreç optimizasyonları ve Kubernetes entegrasyonları.",
        service_ai_title: "Yapay Zeka & Büyük Veri",
        service_ai_desc: "Özel makine öğrenimi modelleri, doğal dil işleme çözümleri ve verilerinizden anlamlı içgörüler üreten analitik sistemler.",
        service_learn_more: "Detayları İncele",

        // Portfolio Section
        portfolio_title: "Proje Vitrini",
        portfolio_subtitle: "Geliştirdiğimiz yenilikçi projeleri, aktif süreçlerimizi ve yakın gelecekte hayat bulacak planlarımızı inceleyin.",
        portfolio_tab_completed: "Tamamlanan Projeler",
        portfolio_tab_ongoing: "Devam Edenler",
        portfolio_tab_upcoming: "Yakında",
        portfolio_visit_link: "Projeyi İncele",
        portfolio_progress: "Tamamlanma Oranı",
        portfolio_coming_soon: "Konsept Yayında",

        // Partners & Ads
        partners_title: "Partnerler & Reklam Alanları",
        ad_sponsored: "SPONSORLU",
        ad_announcement: "DUYURU",
        ad_1_title: "Kurumsal Bulut Dönüşümü",
        ad_1_desc: "Altyapınızı AWS sertifikalı uzmanlarımızla modernize edin. Maliyetleri %40'a varan oranda düşürün.",
        ad_1_cta: "Hemen Görüşelim",
        ad_2_title: "Teknoloji İş Ortağımız Olun",
        ad_2_desc: "SASOLUTIONSNET ekosistemine dahil olarak küresel projelerde birlikte değer yaratalım.",
        ad_2_cta: "Başvuru Yap",

        // Contact Section
        contact_title: "Bizimle İletişime Geçin",
        contact_subtitle: "Projeniz hakkında konuşmak veya bilgi almak için aşağıdaki formu doldurabilirsiniz.",
        contact_name: "Adınız Soyadınız",
        contact_email: "E-posta Adresiniz",
        contact_message: "Mesajınız",
        contact_send: "Gönder",
        form_success: "Mesajınız başarıyla gönderildi! Sizinle en kısa sürede iletişime geçeceğiz.",
        err_name: "Geçerli bir ad giriniz (en az 3 karakter)",
        err_email: "Geçerli bir e-posta adresi giriniz",
        err_message: "Mesaj alanı boş bırakılamaz",
        info_phone: "Telefon",
        info_address: "Adres",
        map_label: "Küresel Hizmet Ağı",

        // Footer
        footer_desc: "Geleceğin teknolojisini tasarlayan, kurumsal ve vizyoner teknoloji şirketi.",
        footer_grp_links: "Hızlı Linkler",
        footer_grp_services: "Hizmetlerimiz",
        footer_copy: "Tüm Hakları Saklıdır.",
        footer_privacy: "Gizlilik Politikası",
        footer_terms: "Kullanım Şartları",
        footer_admin: "Yönetici Paneli"
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_partners: "Partners",
        nav_contact: "Contact",

        // Hero
        hero_badge: "Your Next-Gen Tech Partner",
        hero_title_1: "Building The Digital",
        hero_title_2: "Infrastructure of Tomorrow",
        hero_desc: "At SASOLUTIONSNET, we engineer scalable, modern, and AI-driven software solutions for enterprises. We move your business ahead of the digital age.",
        hero_btn_primary: "Explore Services",
        hero_btn_secondary: "Get In Touch",
        stat_uptime: "Uptime Guarantee",
        stat_countries: "Export Countries",

        // Services Section
        services_title: "Our Services",
        services_subtitle: "We leverage cutting-edge technology stacks to build high-end solutions that turn your visionary ideas into reality.",
        service_web_title: "Web Technologies",
        service_web_desc: "Scalable, high-performance web applications, cloud SaaS platforms, and enterprise portals.",
        service_mobile_title: "Mobile Apps",
        service_mobile_desc: "Fluid user experiences designed for iOS and Android platforms using native and hybrid tech.",
        service_cloud_title: "Cloud & DevOps",
        service_cloud_desc: "High-availability AWS/GCP architectures, CI/CD process optimizations, and Kubernetes scaling.",
        service_ai_title: "AI & Big Data",
        service_ai_desc: "Custom ML models, natural language processing tools, and analytics engines that derive insights.",
        service_learn_more: "Learn More",

        // Portfolio Section
        portfolio_title: "Project Showcase",
        portfolio_subtitle: "Browse our successfully launched projects, active developments, and exciting roadmap previews.",
        portfolio_tab_completed: "Completed Projects",
        portfolio_tab_ongoing: "Ongoing Works",
        portfolio_tab_upcoming: "Coming Soon",
        portfolio_visit_link: "View Project",
        portfolio_progress: "Completion Progress",
        portfolio_coming_soon: "Concept Launched",

        // Partners & Ads
        partners_title: "Partners & Sponsorships",
        ad_sponsored: "SPONSOR",
        ad_announcement: "ANNOUNCEMENT",
        ad_1_title: "Enterprise Cloud Migration",
        ad_1_desc: "Modernize your infrastructure with AWS-certified specialists. Lower operations costs up to 40%.",
        ad_1_cta: "Consult Now",
        ad_2_title: "Become a Tech Partner",
        ad_2_desc: "Join the SASOLUTIONSNET ecosystem and co-create value in global scale projects.",
        ad_2_cta: "Apply Now",

        // Contact Section
        contact_title: "Get in Touch",
        contact_subtitle: "Fill out the form below to discuss your project or ask any questions you might have.",
        contact_name: "Your Name & Surname",
        contact_email: "Your Email Address",
        contact_message: "Your Message",
        contact_send: "Send Message",
        form_success: "Your message has been sent successfully! We will contact you as soon as possible.",
        err_name: "Please enter a valid name (at least 3 characters)",
        err_email: "Please enter a valid email address",
        err_message: "Message cannot be empty",
        info_phone: "Phone",
        info_address: "Address",
        map_label: "Global Operations Network",

        // Footer
        footer_desc: "Engineering the technologies of the future. A visionary corporate tech firm.",
        footer_grp_links: "Quick Links",
        footer_grp_services: "Services",
        footer_copy: "All Rights Reserved.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",
        footer_admin: "Admin Control"
    }
};

// Services Deep Details Database (for Modals)
const servicesDetails = {
    web: {
        icon: `<svg class="modal-service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                 <line x1="8" y1="21" x2="16" y2="21"></line>
                 <line x1="12" y1="17" x2="12" y2="21"></line>
               </svg>`,
        tr: {
            title: "Web Teknolojileri ve SaaS",
            text: "SASOLUTIONSNET, yüksek kullanıcı yüklerine dayanıklı, optimize ve güvenlik standartlarına tam uyumlu web mimarileri tasarlar. Sıfırdan SaaS ürün geliştirme, ERP/CRM entegrasyonları ve mikroservis tabanlı API tasarımlarıyla işletmenizi geleceğe taşırız.",
            features: [
                "Single Page (SPA) ve SSR Uygulamaları (React, Next.js, Vue)",
                "Güvenli ve Hızlı RESTful / GraphQL API Geliştirme",
                "Mikroservis Mimarileri ve Dockerize Edilmiş Dağıtımlar",
                "Arama Motoru Optimizasyonu (SEO) ve Core Web Vitals Uyumlu Kodlama"
            ]
        },
        en: {
            title: "Web Technologies & SaaS",
            text: "SASOLUTIONSNET designs optimized, high-security, and high-performance web systems capable of handling extreme loads. From scratch SaaS developments to ERP/CRM integrations and microservices APIs, we cover your complete web ecosystem.",
            features: [
                "Single Page (SPA) & SSR Applications (React, Next.js, Vue)",
                "Secure and High-Throughput RESTful / GraphQL APIs",
                "Microservices Architectures and Dockerized Deployments",
                "Advanced SEO and Core Web Vitals Optimization"
            ]
        }
    },
    mobile: {
        icon: `<svg class="modal-service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                 <line x1="12" y1="18" x2="12.01" y2="18"></line>
               </svg>`,
        tr: {
            title: "Mobil Uygulama Geliştirme",
            text: "Kullanıcı dostu arayüzleri ve kusursuz performansı bir araya getiren mobil uygulamalar sunuyoruz. React Native ve Flutter gibi hibrit teknolojilerin yanı sıra iOS (Swift) ve Android (Kotlin) platformları için yerel uygulamalar kodluyoruz.",
            features: [
                "Yerel (Native) iOS ve Android Uygulama Mühendisliği",
                "Tek Kod Tabanlı Çoklu Platform Teknolojileri (Flutter, React Native)",
                "Uygulama Mağazaları (App Store & Play Store) Dağıtım ve Yönetim Süreçleri",
                "Biyometrik Kimlik Doğrulama ve Yerleşik Donanım Entegrasyonları"
            ]
        },
        en: {
            title: "Mobile App Development",
            text: "We create mobile experiences combining beautiful UI designs with solid app performance. We build natively using Swift and Kotlin, and cross-platform using modern systems like React Native and Flutter.",
            features: [
                "Native iOS and Android Software Engineering",
                "Cross-Platform Implementations (Flutter, React Native)",
                "App Store & Play Store Deployments and Release Lifecycle",
                "Biometric Authentications and On-Device Hardware Integrations"
            ]
        }
    },
    cloud: {
        icon: `<svg class="modal-service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
               </svg>`,
        tr: {
            title: "Bulut Bilişim & DevOps Danışmanlığı",
            text: "Uygulamalarınızın bulutta kesintisiz, yedekli ve maliyet-etkin şekilde çalışması için altyapı tasarlıyoruz. AWS, GCP ve Azure ortamlarında 'Kod Olarak Altyapı' (IaC) yöntemlerini uyguluyor, DevOps dönüşümünüzü hızlandırıyoruz.",
            features: [
                "Kubernetes (EKS/GKE) Küme Tasarımı ve Ölçeklendirme",
                "Terraform ile Kod Olarak Altyapı (Infrastructure as Code - IaC)",
                "Gelişmiş CI/CD Boru Hatları (GitHub Actions, GitLab CI, Jenkins)",
                "7/24 İzleme, Hata Yönetimi ve Log Analiz Sistemleri (Prometheus, ELK)"
            ]
        },
        en: {
            title: "Cloud Infrastructure & DevOps",
            text: "We design robust, auto-scaling, and cost-efficient cloud setups. We apply Infrastructure as Code (IaC) principles to manage your resources on AWS, Google Cloud, and Azure, accelerating your continuous deployment cycles.",
            features: [
                "Kubernetes (EKS/GKE) Orchestration and Scaling",
                "Infrastructure as Code (IaC) using Terraform",
                "High-performance CI/CD Pipelines (GitHub Actions, GitLab, Jenkins)",
                "24/7 Monitoring and Log Analytics (Prometheus, Grafana, ELK)"
            ]
        }
    },
    ai: {
        icon: `<svg class="modal-service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                 <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                 <line x1="12" y1="22.08" x2="12" y2="12"></line>
               </svg>`,
        tr: {
            title: "Yapay Zeka ve Büyük Veri",
            text: "İşletmenizin verilerini en değerli varlığına dönüştürüyoruz. Özel eğitilmiş yapay zeka modelleri, doğal dil işleme entegrasyonları ve büyük veri işleme boru hatları tasarlayarak karar destek mekanizmalarınızı otomatikleştiriyoruz.",
            features: [
                "Büyük Dil Modelleri (LLM) ve RAG Sistemleri Entegrasyonu",
                "Tahminleyici Analiz ve Veri Madenciliği Çözümleri",
                "Büyük Veri İşleme Boru Hatları (Apache Spark, Kafka)",
                "Derin Öğrenme Tabanlı Görüntü ve Ses İşleme Modelleri"
            ]
        },
        en: {
            title: "AI & Big Data Pipelines",
            text: "We transform raw business data into your most valuable asset. By deploying proprietary machine learning models, custom RAG integrations, and big data architectures, we automate your decision-making workflows.",
            features: [
                "Large Language Models (LLM) & RAG Systems Implementations",
                "Predictive Analytics & Advanced Data Mining Engines",
                "Big Data Stream Processing Pipelines (Apache Spark, Kafka)",
                "Deep Learning Computer Vision & Audio Processing Models"
            ]
        }
    }
};

// Portfolio Database
let portfolioData = JSON.parse(localStorage.getItem("sasolutions_projects")) || [
    // Completed
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
    // Ongoing
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
    // Upcoming
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

// App State
let currentLang = localStorage.getItem("sasolutions_lang") || "tr";
let servicesData = [];
let adsData = [];
let settingsData = null;

// Fetch Showcase Data from Express Backend APIs
async function fetchBackendData() {
    try {
        const [projectsRes, servicesRes, adsRes, settingsRes] = await Promise.all([
            fetch('/api/projects'),
            fetch('/api/services'),
            fetch('/api/ads'),
            fetch('/api/settings')
        ]);

        if (projectsRes.ok) portfolioData = await projectsRes.json();
        if (servicesRes.ok) servicesData = await servicesRes.json();
        if (adsRes.ok) adsData = await adsRes.json();
        if (settingsRes.ok) settingsData = await settingsRes.json();
    } catch (error) {
        console.error('Error fetching showcase data from API:', error);
    }
}

// DOM Elements
const langToggle = document.getElementById("langToggle");
const langTR = document.getElementById("langTR");
const langEN = document.getElementById("langEN");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const header = document.querySelector(".header");
const portfolioGrid = document.getElementById("portfolioGrid");
const tabButtons = document.querySelectorAll(".tab-btn");
const marqueeTrack = document.getElementById("marqueeTrack");
const contactForm = document.getElementById("contactForm");
const serviceModal = document.getElementById("serviceModal");
const modalClose = document.getElementById("modalClose");
const modalBody = document.getElementById("modalBody");

// Initialize Application
document.addEventListener("DOMContentLoaded", async () => {
    // 1. Fetch Backend Data
    await fetchBackendData();

    // 2. Language Setup (this applies translations & overrides settings/services)
    setLanguage(currentLang);
    
    // 3. Build Partners Loop
    initPartnersCarousel();
    
    // 4. Render Portfolio Items
    renderPortfolio("completed");
    
    // 5. Set Event Listeners
    initEvents();
});

// Event Listeners Initialization
function initEvents() {
    // Language Toggle Event
    langToggle.addEventListener("click", () => {
        currentLang = currentLang === "tr" ? "en" : "tr";
        setLanguage(currentLang);
        
        // Re-render components with translated dynamic content
        const activeTab = document.querySelector(".tab-btn.active").dataset.tab;
        renderPortfolio(activeTab);
    });

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener("click", () => {
        mobileMenuBtn.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close Mobile Menu on link clicks
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenuBtn.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });

    // Sticky Nav & Scroll Spy
    window.addEventListener("scroll", () => {
        // Sticky class
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
        
        // Scroll spy
        let fromTop = window.scrollY + 100;
        navLinks.forEach(link => {
            let section = document.querySelector(link.hash);
            if (section) {
                if (
                    section.offsetTop <= fromTop &&
                    section.offsetTop + section.offsetHeight > fromTop
                ) {
                    navLinks.forEach(nl => nl.classList.remove("active"));
                    link.classList.add("active");
                }
            }
        });
    });

    // Services Cards Click Events
    document.querySelectorAll(".service-card").forEach(card => {
        card.addEventListener("click", () => {
            const serviceKey = card.dataset.service;
            openServiceModal(serviceKey);
        });
    });

    // Modal Close
    modalClose.addEventListener("click", closeServiceModal);
    serviceModal.addEventListener("click", (e) => {
        if (e.target === serviceModal) closeServiceModal();
    });

    // Portfolio Filter Tab Buttons
    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            
            const category = button.dataset.tab;
            portfolioGrid.classList.add("fade-out");
            
            setTimeout(() => {
                renderPortfolio(category);
                portfolioGrid.classList.remove("fade-out");
            }, 300);
        });
    });

    // Contact Form Actions
    contactForm.addEventListener("submit", handleContactSubmit);
}

// i18n Translation Runner
function setLanguage(lang) {
    localStorage.setItem("sasolutions_lang", lang);
    document.documentElement.lang = lang;
    
    // Toggle Active Class in Selector
    if (lang === "tr") {
        langTR.classList.add("active");
        langEN.classList.remove("active");
    } else {
        langEN.classList.add("active");
        langTR.classList.remove("active");
    }
    
    // Search elements and translate
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Translate Inputs Placeholders
    const inputName = document.getElementById("formName");
    const inputEmail = document.getElementById("formEmail");
    const inputMsg = document.getElementById("formMessage");
    
    if (inputName) {
        // We use floating labels so placeholder is a space to trigger CSS :not(:placeholder-shown) selector
        inputName.placeholder = " ";
    }
    if (inputEmail) {
        inputEmail.placeholder = " ";
    }
    if (inputMsg) {
        inputMsg.placeholder = " ";
    }

    // Override service cards with custom data from admin backend if present
    if (servicesData && servicesData.length > 0) {
        servicesData.forEach(serv => {
            const card = document.querySelector(`.service-card[data-service="${serv.id}"]`);
            if (card) {
                const titleNode = card.querySelector(".service-title");
                const descNode = card.querySelector(".service-desc");
                if (titleNode) titleNode.textContent = serv[lang].name;
                if (descNode) descNode.textContent = serv[lang].desc;
            }
        });
    }

    // Override contact settings from admin settings backend if present
    if (settingsData) {
        const emailNode = document.getElementById("showcase_email");
        const phoneNode = document.getElementById("showcase_phone");
        const addressNode = document.getElementById("showcase_address");
        
        if (emailNode) {
            emailNode.textContent = settingsData.email;
            emailNode.href = "mailto:" + settingsData.email;
        }
        if (phoneNode) {
            phoneNode.textContent = settingsData.phone;
            phoneNode.href = "tel:" + settingsData.phone.replace(/[^0-9+]/g, '');
        }
        if (addressNode) {
            addressNode.textContent = settingsData[lang] ? settingsData[lang].address : settingsData.tr.address;
        }
    }
}

// Open / Close Modal Logic
function openServiceModal(serviceKey) {
    // Override service details dynamically if updated in backend
    if (servicesData && servicesData.length > 0) {
        const found = servicesData.find(s => s.id === serviceKey);
        if (found) {
            if (!servicesDetails[serviceKey]) {
                // Stub for custom services
                servicesDetails[serviceKey] = {
                    icon: `<svg class="modal-service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                             <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                             <line x1="12" y1="17" x2="12" y2="21"></line>
                           </svg>`,
                    tr: { features: [] },
                    en: { features: [] }
                };
            }
            servicesDetails[serviceKey].tr.title = found.tr.name;
            servicesDetails[serviceKey].tr.text = found.tr.desc;
            servicesDetails[serviceKey].en.title = found.en.name;
            servicesDetails[serviceKey].en.text = found.en.desc;
        }
    }

    const data = servicesDetails[serviceKey];
    if (!data) return;
    
    const details = data[currentLang];
    
    let featuresHTML = "";
    if (details.features) {
        details.features.forEach(feat => {
            featuresHTML += `
                <div class="modal-feature-item">
                    <span class="modal-feature-bullet"></span>
                    <span>${feat}</span>
                </div>
            `;
        });
    }

    modalBody.innerHTML = `
        <div class="modal-header-visual">
            ${data.icon}
        </div>
        <h4 class="modal-title">${details.title}</h4>
        <p class="modal-text">${details.text}</p>
        <div class="modal-features-list">
            ${featuresHTML}
        </div>
        <button class="btn btn-primary btn-block" onclick="closeServiceModal()">Okay</button>
    `;

    serviceModal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling in page background
}

function closeServiceModal() {
    serviceModal.classList.remove("active");
    document.body.style.overflow = "";
}

// Portfolio Dynamic Rendering
function renderPortfolio(category) {
    portfolioGrid.innerHTML = "";
    const filtered = portfolioData.filter(item => item.category === category);
    
    filtered.forEach(item => {
        const itemDetails = item[currentLang];
        let actionHTML = "";
        
        if (item.category === "completed") {
            actionHTML = `
                <a href="${item.link}" class="portfolio-card-action">
                    <span>${translations[currentLang].portfolio_visit_link}</span>
                    <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            `;
        } else if (item.category === "ongoing") {
            actionHTML = `
                <div class="proj-progress-wrapper">
                    <div class="proj-progress-labels">
                        <span class="proj-progress-lbl">${translations[currentLang].portfolio_progress}</span>
                        <span class="proj-progress-percent">${item.progress}%</span>
                    </div>
                    <div class="proj-progress-bar-bg">
                        <div class="proj-progress-bar-fill" id="bar-${item.id}"></div>
                    </div>
                </div>
            `;
        } else if (item.category === "upcoming") {
            actionHTML = `
                <div class="portfolio-card-action">
                    <span style="color: var(--accent-purple);">${translations[currentLang].portfolio_coming_soon} (${item.comingSoonText})</span>
                </div>
            `;
        }

        let tagHTML = "";
        item.tags.forEach(tag => {
            tagHTML += `<span class="tech-tag">${tag}</span>`;
        });

        // Determine Badge classes
        let badgeClass = "badge-completed";
        let badgeTxt = translations[currentLang].portfolio_tab_completed;
        if (item.category === "ongoing") {
            badgeClass = "badge-ongoing";
            badgeTxt = translations[currentLang].portfolio_tab_ongoing;
        } else if (item.category === "upcoming") {
            badgeClass = "badge-upcoming";
            badgeTxt = translations[currentLang].portfolio_tab_upcoming;
        }

        const card = document.createElement("div");
        card.className = "portfolio-card";
        card.innerHTML = `
            <div class="portfolio-img-container">
                <div class="portfolio-img-artwork"></div>
                ${item.icon}
                <span class="portfolio-badge ${badgeClass}">${badgeTxt}</span>
            </div>
            <div class="portfolio-info-body">
                <h4 class="portfolio-proj-title">${itemDetails.title}</h4>
                <p class="portfolio-proj-desc">${itemDetails.desc}</p>
                <div class="portfolio-tech-list">
                    ${tagHTML}
                </div>
                ${actionHTML}
            </div>
        `;

        portfolioGrid.appendChild(card);

        // Animate progress bar if ongoing
        if (item.category === "ongoing") {
            setTimeout(() => {
                const fillBar = document.getElementById(`bar-${item.id}`);
                if (fillBar) fillBar.style.width = `${item.progress}%`;
            }, 100);
        }
    });
}

// Duplicate Partner Items for infinite scrolling marquee
function initPartnersCarousel() {
    if (adsData && adsData.length > 0) {
        marqueeTrack.innerHTML = "";
        adsData.forEach(ad => {
            if (ad.active) {
                const item = document.createElement("div");
                item.className = "partner-item";
                item.innerHTML = `<span class="partner-logo-mock">${ad.partner.toUpperCase().replace(/\s/g, '_')}</span>`;
                marqueeTrack.appendChild(item);
            }
        });
    }
    const items = marqueeTrack.innerHTML;
    marqueeTrack.innerHTML = items + items; // Duplicate elements
}

// Contact Form Handler & Validator
function handleContactSubmit(e) {
    e.preventDefault();

    const nameInput = document.getElementById("formName");
    const emailInput = document.getElementById("formEmail");
    const msgInput = document.getElementById("formMessage");
    const submitBtn = document.getElementById("formSubmitBtn");
    const successMsg = document.getElementById("formSuccess");

    let isFormValid = true;

    // Reset error state
    nameInput.parentElement.classList.remove("invalid");
    emailInput.parentElement.classList.remove("invalid");
    msgInput.parentElement.classList.remove("invalid");
    successMsg.style.display = "none";

    // 1. Name validation
    if (nameInput.value.trim().length < 3) {
        nameInput.parentElement.classList.add("invalid");
        isFormValid = false;
    }

    // 2. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.parentElement.classList.add("invalid");
        isFormValid = false;
    }

    // 3. Message validation
    if (msgInput.value.trim().length === 0) {
        msgInput.parentElement.classList.add("invalid");
        isFormValid = false;
    }

    if (!isFormValid) return;

    // Trigger loading spinner
    submitBtn.classList.add("loading");
    submitBtn.disabled = true;

    // Send message to Express backend API
    fetch('/api/inbox', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            sender: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: msgInput.value.trim()
        })
    })
    .then(res => res.json())
    .then(data => {
        submitBtn.classList.remove("loading");
        submitBtn.disabled = false;
        
        if (data.success) {
            // Show success alert
            successMsg.style.display = "block";
            // Clear input values
            nameInput.value = "";
            emailInput.value = "";
            msgInput.value = "";
        } else {
            alert('Mesaj gönderilemedi: ' + (data.message || 'Hata oluştu.'));
        }
    })
    .catch(err => {
        submitBtn.classList.remove("loading");
        submitBtn.disabled = false;
        alert('Sunucu hatası. Lütfen daha sonra tekrar deneyin.');
    });
}

/* ==========================================================================
   ADMIN GATE MODAL — Footer "Yönetici Paneli" link handler
   ========================================================================== */

function openAdminLoginModal(event) {
    event.preventDefault();
    const overlay = document.getElementById('adminGateOverlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Reset form state
    document.getElementById('adminGateForm').reset();
    const errEl = document.getElementById('adminGateError');
    errEl.style.display = 'none';
    const btn = document.getElementById('adminGateBtn');
    btn.classList.remove('loading');
    btn.disabled = false;
    btn.style.background = '';
    btn.innerHTML = '<span class="gate-btn-text">Giriş Yap</span><div class="gate-spinner"></div>';

    // Auto-focus username field
    setTimeout(() => document.getElementById('gate_user').focus(), 100);
}

function closeAdminLoginModal() {
    const overlay = document.getElementById('adminGateOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Attach modal event listeners after DOM ready
(function initAdminGate() {
    const overlay = document.getElementById('adminGateOverlay');
    if (!overlay) return;

    // Close on backdrop click
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeAdminLoginModal();
    });

    // Close on ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeAdminLoginModal();
        }
    });

    // Form submit — authenticate via backend API
    document.getElementById('adminGateForm').addEventListener('submit', async function (e) {
        e.preventDefault();

        const username = document.getElementById('gate_user').value.trim();
        const password = document.getElementById('gate_pass').value;
        const btn      = document.getElementById('adminGateBtn');
        const errEl    = document.getElementById('adminGateError');

        // Show loading spinner
        btn.classList.add('loading');
        btn.disabled = true;
        errEl.style.display = 'none';

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();

            if (res.ok && data.token) {
                // Save token and redirect
                localStorage.setItem('sasolutions_token', data.token);
                btn.classList.remove('loading');
                btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
                btn.innerHTML = '<span class="gate-btn-text">✓ Giriş Başarılı — Yönlendiriliyor...</span>';

                setTimeout(() => {
                    window.location.href = '/admin/index.html';
                }, 700);
            } else {
                // Wrong credentials
                btn.classList.remove('loading');
                btn.disabled = false;
                errEl.textContent = 'Kullanıcı adı veya şifre hatalı!';
                errEl.style.display = 'block';
                errEl.style.animation = 'none';
                errEl.offsetHeight; // force reflow for re-animation
                errEl.style.animation = 'shakeX 0.4s ease';
                document.getElementById('gate_pass').value = '';
                document.getElementById('gate_pass').focus();
            }
        } catch (err) {
            btn.classList.remove('loading');
            btn.disabled = false;
            errEl.textContent = 'Sunucuya bağlanılamadı. Lütfen tekrar deneyin.';
            errEl.style.display = 'block';
        }
    });
})();
