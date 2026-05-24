/* ==========================================================================
   LÓGICA JAVASCRIPT GLOBAL - Nexus Marketing & AGENCIA MARKETING
   ========================================================================== */

// Base de datos de productos y servicios (Enfoque Híbrido)
const catalogItems = [
    {
        id: "prod-ninja-extractor",
        name: "Extractor Ninja MJ151 Premium",
        category: "Electrodomésticos",
        price: 252,
        oldPrice: 320,
        rating: 5,
        badge: "Ninja",
        badgeClass: "badge-green",
        image: "images/ninja_extractor.png",
        installments: "12 cuotas de $21 USD",
        description: "Llegaron los productos NINJA a Nexus Marketing. Descubre tecnología, potencia y calidad para tu cocina. El extractor de jugos Ninja MJ151 te permite extraer jugos naturales sin esfuerzo, conservando nutrientes y con un motor ultra potente de alto rendimiento."
    },
    {
        id: "serv-seo-premium",
        name: "Plan SEO Web Corporativo Premium",
        category: "Servicios de Marketing",
        price: 350,
        oldPrice: 450,
        rating: 5,
        badge: "Más Vendido",
        badgeClass: "badge-cyan",
        image: "images/seo_marketing.svg", // SVG generado inline
        installments: "Mensualidad / Sin contratos",
        description: "Optimización en motores de búsqueda (SEO) profesional. Posicionamos tu negocio en el primer lugar de Google para atraer miles de clientes locales y nacionales. Incluye auditoría, optimización técnica y construcción de enlaces."
    },
    {
        id: "serv-rrss-gestion",
        name: "Gestión Profesional de Redes Sociales",
        category: "Servicios de Marketing",
        price: 450,
        oldPrice: 550,
        rating: 5,
        badge: "Oferta",
        badgeClass: "badge-red",
        image: "images/social_media.svg",
        installments: "Mensualidad / Incluye diseño",
        description: "Administración integral de tus redes sociales (Facebook, Instagram, TikTok). Creación de contenido gráfico de alta calidad, reels animados, redacción de textos y administración de campañas publicitarias para aumentar tu comunidad y ventas."
    },
    {
        id: "serv-diseno-web",
        name: "Diseño Web Ecommerce Profesional",
        category: "Servicios de Marketing",
        price: 899,
        oldPrice: 1200,
        rating: 5,
        badge: "Novedad",
        badgeClass: "badge-yellow",
        image: "images/web_design.svg",
        installments: "Pago único / 50% inicio",
        description: "Diseño y desarrollo de tu tienda online personalizada. Rápida, optimizada para SEO y adaptada a móviles. Con pasarela de pagos integrada, catálogo autoadministrable, chat flotante y panel de control para gestionar tus ventas."
    },
    {
        id: "prod-smarttv-55",
        name: "Smart TV Samsung 55\" Crystal UHD 4K",
        category: "Electrónica",
        price: 480,
        oldPrice: 599,
        rating: 4,
        badge: "Descuento",
        badgeClass: "badge-red",
        image: "images/samsung_tv.svg",
        installments: "12 cuotas de $40 USD",
        description: "Vive imágenes ultra reales con colores vivos y contraste mejorado. El Smart TV Samsung Crystal UHD 4K cuenta con procesador inteligente, sistema Tizen, asistentes de voz integrados y un diseño ultra delgado sin bordes."
    },
    {
        id: "prod-audifonos-pro",
        name: "Audífonos Inalámbricos Bluetooth Pro Max",
        category: "Electrónica",
        price: 89,
        oldPrice: 129,
        rating: 5,
        badge: "Lo Nuevo",
        badgeClass: "badge-cyan",
        image: "images/headphones_pro.svg",
        installments: "3 cuotas de $29.66 USD",
        description: "Cancelación activa de ruido inteligente, audio espacial de alta fidelidad y hasta 30 horas de reproducción continua. Conexión multipunto y micrófono con supresión de viento para llamadas cristalinas."
    },
    {
        id: "serv-google-ads",
        name: "Gestión de Campañas Google & Meta Ads",
        category: "Servicios de Marketing",
        price: 300,
        oldPrice: 400,
        rating: 4,
        badge: "Popular",
        badgeClass: "badge-yellow",
        image: "images/google_ads.svg",
        installments: "Mensualidad / Reportes quincenales",
        description: "Diseño y optimización de anuncios de pago por clic (PPC). Hacemos que tu marca aparezca frente a clientes potenciales listos para comprar. Optimización diaria del presupuesto de publicidad para maximizar el retorno de inversión (ROI)."
    },
    {
        id: "prod-aspiradora-smart",
        name: "Robot Aspiradora Inteligente SmartClean V2",
        category: "Electrodomésticos",
        price: 199,
        oldPrice: 280,
        rating: 4,
        badge: "Sale",
        badgeClass: "badge-red",
        image: "images/robot_vacuum.svg",
        installments: "6 cuotas de $33.16 USD",
        description: "Robot aspiradora y mopa con navegación láser inteligente LiDAR. Mapea tu hogar en 3D, esquiva obstáculos con precisión milimétrica y regresa solo a su base de carga. Control total por aplicación celular y comando de voz."
    },
    {
        id: "serv-email-marketing",
        name: "Automatización Email Marketing Pro",
        category: "Servicios de Marketing",
        price: 250,
        oldPrice: 350,
        rating: 5,
        badge: "Nuevo",
        badgeClass: "badge-yellow",
        image: "images/email_marketing.svg",
        installments: "Mensualidad / Sin contratos",
        description: "Sistema de automatización de correos masivos con segmentación inteligente de audiencias. Incluye plantillas profesionales, análisis de métricas de apertura y conversión, y secuencias automatizadas de bienvenida y recuperación de carritos abandonados."
    },
    {
        id: "prod-tablet-edu",
        name: "Tablet Educativa SmartLearn 10\" HD",
        category: "Electrónica",
        price: 179,
        oldPrice: 249,
        rating: 4,
        badge: "Educación",
        badgeClass: "badge-cyan",
        image: "images/tablet_edu.svg",
        installments: "6 cuotas de $29.83 USD",
        description: "Tablet educativa con pantalla HD de 10 pulgadas, ideal para estudiantes. Incluye apps educativas preinstaladas, protección ocular anti-luz azul, batería de larga duración y funda antigolpes resistente a caídas."
    },
    {
        id: "prod-camara-seguridad",
        name: "Cámara de Seguridad WiFi 360° Smart",
        category: "Electrónica",
        price: 65,
        oldPrice: 99,
        rating: 4,
        badge: "Sale",
        badgeClass: "badge-red",
        image: "images/security_cam.svg",
        installments: "3 cuotas de $21.66 USD",
        description: "Vigilancia inteligente 24/7 con rotación 360°, visión nocturna infrarroja, detección de movimiento con alertas al celular, audio bidireccional y almacenamiento en la nube. Compatible con Alexa y Google Home."
    },
    {
        id: "serv-branding",
        name: "Diseño de Identidad Corporativa & Branding",
        category: "Servicios de Marketing",
        price: 599,
        oldPrice: 800,
        rating: 5,
        badge: "Premium",
        badgeClass: "badge-green",
        image: "images/branding.svg",
        installments: "Pago único / 50% inicio",
        description: "Creación completa de identidad visual para tu marca: logotipo profesional, manual de marca, paleta de colores, tipografía corporativa, papelería comercial, tarjetas de presentación y plantillas para redes sociales."
    },
    {
        id: "prod-smartwatch",
        name: "Reloj Inteligente FitPro Ultra",
        category: "Electrónica",
        price: 120,
        oldPrice: 189,
        rating: 4,
        badge: "Popular",
        badgeClass: "badge-yellow",
        image: "images/smartwatch.svg",
        installments: "3 cuotas de $40 USD",
        description: "Smartwatch premium con monitor de ritmo cardíaco, oxígeno en sangre (SpO2), GPS integrado, resistencia al agua IP68, más de 100 modos deportivos y pantalla AMOLED ultra brillante. Batería de 14 días."
    }
];

// Base de datos de tiendas afiliadas (Directorio)
const directoryStores = [
    { id: "store-ninja", name: "Ninja Oficial Ecuador", category: "Electrodomésticos", rating: 5, logoText: "N", productsCount: 15, meta: "Vendedor Autorizado" },
    { id: "store-Nexus Marketing-marketing", name: "Nexus Marketing Digital", category: "Servicios Digitales", rating: 5, logoText: "ND", productsCount: 12, meta: "Agencia Principal" },
    { id: "store-samsung", name: "Samsung Store", category: "Electrónica", rating: 4.8, logoText: "S", productsCount: 42, meta: "Distribuidor Platino" },
    { id: "store-electromundo", name: "ElectroMundo", category: "Hogar", rating: 4.5, logoText: "EM", productsCount: 30, meta: "Tienda Verificada" },
    { id: "store-fashionecu", name: "Fashion Ecuador", category: "Moda y Ropa", rating: 4.2, logoText: "FE", productsCount: 22, meta: "Tienda de Ropa" },
    { id: "store-deportesec", name: "Deportes & Aventura", category: "Deportes", rating: 4.6, logoText: "DA", productsCount: 18, meta: "Artículos de Deporte" }
];

// Base de datos del Blog
const blogArticles = [
    {
        id: "blog-1",
        title: "5 Estrategias de Marketing Digital para duplicar las ventas de tu E-commerce en 2026",
        date: "22 Mayo, 2026",
        excerpt: "Descubre cómo el SEO técnico, las campañas de retargeting en redes sociales y la optimización de pasarelas de pago están revolucionando el comercio electrónico ecuatoriano.",
        image: "images/blog_ecommerce.svg"
    },
    {
        id: "blog-2",
        title: "Guía completa: ¿Cómo elegir la mejor pasarela de pagos para tu sitio web?",
        date: "15 Mayo, 2026",
        excerpt: "Analizamos las ventajas de integrar procesadores directos como tarjeta de crédito, PayPal y transferencias bancarias ágiles para evitar el abandono de carrito.",
        image: "images/blog_checkout.svg"
    },
    {
        id: "blog-3",
        title: "Por qué tu empresa necesita posicionamiento SEO antes de invertir en publicidad de pago",
        date: "05 Mayo, 2026",
        excerpt: "El tráfico orgánico genera leads calificados con un costo de adquisición cero a largo plazo. Te enseñamos los conceptos clave que aplican las mejores agencias.",
        image: "images/blog_seo.svg"
    }
];

// Inicialización de Variables de Carrito
let cart = JSON.parse(localStorage.getItem('Nexus Marketing_cart')) || [];
let currentSlide = 0;

// ==========================================================================
// SVGs INCORPORADOS DENTRO DE VARIABLES PARA EVITAR ARCHIVOS FALTANTES
// ==========================================================================
const inlineSVGs = {
    "images/seo_marketing.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="120" height="120"><rect width="100%" height="100%" fill="#f1f5f9"/><circle cx="100" cy="100" r="60" fill="none" stroke="#6d28d9" stroke-width="4" stroke-dasharray="10 5"/><path d="M70 130 l20-30 20 20 40-50" fill="none" stroke="#0a2540" stroke-width="5" stroke-linecap="round"/><circle cx="70" cy="130" r="6" fill="#0a2540"/><circle cx="90" cy="100" r="6" fill="#0a2540"/><circle cx="110" cy="120" r="6" fill="#0a2540"/><circle cx="150" cy="70" r="6" fill="#6d28d9"/><text x="100" y="170" font-family="'Outfit', sans-serif" font-weight="700" font-size="12" fill="#0a2540" text-anchor="middle">SEO &amp; POSICIONAMIENTO</text></svg>`,
    "images/social_media.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="120" height="120"><rect width="100%" height="100%" fill="#f1f5f9"/><rect x="50" y="40" width="100" height="120" rx="10" fill="#0a2540"/><rect x="60" y="50" width="80" height="90" rx="5" fill="#ffffff"/><circle cx="100" cy="150" r="6" fill="#ffffff"/><path d="M80 75 a20 20 0 0 1 40 0 v20 a20 20 0 0 1-40 0 z" fill="#6d28d9"/><circle cx="90" cy="75" r="4" fill="#ffffff"/><circle cx="110" cy="75" r="4" fill="#ffffff"/><path d="M92 88 q8 5 16 0" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><text x="100" y="185" font-family="'Outfit', sans-serif" font-weight="700" font-size="12" fill="#0a2540" text-anchor="middle">REDES SOCIALES</text></svg>`,
    "images/web_design.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="120" height="120"><rect width="100%" height="100%" fill="#f1f5f9"/><rect x="40" y="50" width="120" height="85" rx="6" fill="none" stroke="#0a2540" stroke-width="5"/><rect x="42" y="52" width="116" height="15" fill="#6d28d9"/><circle cx="52" cy="60" r="3" fill="#ef4444"/><circle cx="62" cy="60" r="3" fill="#eab308"/><circle cx="72" cy="60" r="3" fill="#10b981"/><line x1="85" y1="135" x2="85" y2="160" stroke="#0a2540" stroke-width="6"/><line x1="115" y1="135" x2="115" y2="160" stroke="#0a2540" stroke-width="6"/><line x1="60" y1="160" x2="140" y2="160" stroke="#0a2540" stroke-width="6" stroke-linecap="round"/><text x="100" y="110" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#6d28d9" text-anchor="middle">&lt; CODE &gt;</text></svg>`,
    "images/samsung_tv.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="140" height="100"><rect x="10" y="30" width="180" height="110" rx="4" fill="#0a2540"/><rect x="15" y="35" width="170" height="100" fill="#020617"/><ellipse cx="100" cy="85" r="40" fill="none" stroke="#06b6d4" stroke-width="1" stroke-opacity="0.3"/><ellipse cx="100" cy="85" r="25" fill="none" stroke="#06b6d4" stroke-width="2" stroke-opacity="0.6"/><path d="M95 140 l-10 25 h30 l-10-25 z" fill="#0a2540"/><line x1="60" y1="165" x2="140" y2="165" stroke="#0a2540" stroke-width="4"/><text x="100" y="90" font-family="'Outfit', sans-serif" font-weight="700" font-size="10" fill="#06b6d4" text-anchor="middle">CRYSTAL 4K</text></svg>`,
    "images/headphones_pro.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="110" height="110"><rect width="100%" height="100%" fill="#f1f5f9"/><path d="M50 110 A 50 50 0 0 1 150 110" fill="none" stroke="#0a2540" stroke-width="10" stroke-linecap="round"/><rect x="40" y="100" width="22" height="36" rx="6" fill="#6d28d9"/><rect x="138" y="100" width="22" height="36" rx="6" fill="#6d28d9"/><path d="M51 110 v15" stroke="#0a2540" stroke-width="4"/><path d="M149 110 v15" stroke="#0a2540" stroke-width="4"/></svg>`,
    "images/google_ads.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="120" height="120"><rect width="100%" height="100%" fill="#f1f5f9"/><path d="M110 50 L 50 140 h 100 L110 50 Z" fill="#eab308"/><circle cx="110" cy="50" r="12" fill="#ef4444"/><circle cx="50" cy="140" r="12" fill="#2563eb"/><circle cx="150" cy="140" r="12" fill="#10b981"/><path d="M100 80 v40 m-20-20 h40" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><text x="100" y="175" font-family="'Outfit', sans-serif" font-weight="700" font-size="12" fill="#0a2540" text-anchor="middle">GOOGLE &amp; FB ADS</text></svg>`,
    "images/robot_vacuum.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="110" height="110"><rect width="100%" height="100%" fill="#f1f5f9"/><circle cx="100" cy="100" r="55" fill="#334155" stroke="#0f172a" stroke-width="4"/><circle cx="100" cy="100" r="48" fill="#1e293b"/><circle cx="100" cy="70" r="15" fill="#6d28d9" stroke="#4c1d95" stroke-width="2"/><circle cx="100" cy="70" r="5" fill="#a78bfa"/><line x1="80" y1="125" x2="120" y2="125" stroke="#475569" stroke-width="4" stroke-linecap="round"/></svg>`,
    "images/blog_ecommerce.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" width="100%" height="100%"><rect width="100%" height="100%" fill="#f1f5f9"/><path d="M 0 180 q 100-30 200-10 q 100 20 200-20 v 100 h-400 z" fill="#e2e8f0"/><circle cx="280" cy="100" r="35" fill="#6d28d9" opacity="0.15"/><path d="M130 80 h 140 v 90 h -140 z" fill="#0a2540"/><circle cx="160" cy="120" r="18" fill="#ef4444"/><circle cx="240" cy="120" r="18" fill="#ec4899"/><path d="M190 120 h20" stroke="#ffffff" stroke-width="3"/></svg>`,
    "images/blog_checkout.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" width="100%" height="100%"><rect width="100%" height="100%" fill="#f1f5f9"/><rect x="80" y="50" width="240" height="150" rx="8" fill="#1e293b"/><rect x="100" y="80" width="50" height="35" rx="3" fill="#eab308"/><rect x="100" y="140" width="200" height="25" rx="3" fill="#ffffff" opacity="0.2"/></svg>`,
    "images/blog_seo.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" width="100%" height="100%"><rect width="100%" height="100%" fill="#f1f5f9"/><path d="M80 180 h 240" stroke="#6d28d9" stroke-width="4"/><path d="M120 180 v-40 m40 40 v-70 m40 70 v-90 m40 70 v-50" stroke="#0a2540" stroke-width="12" stroke-linecap="round"/></svg>`,
    "images/email_marketing.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="120" height="120"><rect width="100%" height="100%" fill="#f1f5f9"/><rect x="35" y="60" width="130" height="90" rx="8" fill="#0a2540"/><path d="M35 68 l65 45 65-45" fill="none" stroke="#06b6d4" stroke-width="4"/><circle cx="150" cy="55" r="18" fill="#ef4444"/><text x="150" y="60" font-family="Outfit" font-weight="700" font-size="14" fill="#fff" text-anchor="middle">3</text><text x="100" y="175" font-family="Outfit" font-weight="700" font-size="11" fill="#0a2540" text-anchor="middle">EMAIL MARKETING</text></svg>`,
    "images/tablet_edu.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="120" height="120"><rect width="100%" height="100%" fill="#f1f5f9"/><rect x="50" y="35" width="100" height="135" rx="8" fill="#0a2540"/><rect x="57" y="45" width="86" height="105" rx="3" fill="#1e293b"/><circle cx="100" cy="162" r="6" fill="#475569"/><path d="M75 85 l10-15 12 10 18-25 10 30" fill="none" stroke="#06b6d4" stroke-width="3" stroke-linecap="round"/><text x="100" y="190" font-family="Outfit" font-weight="700" font-size="11" fill="#0a2540" text-anchor="middle">TABLET EDUCATIVA</text></svg>`,
    "images/security_cam.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="120" height="120"><rect width="100%" height="100%" fill="#f1f5f9"/><circle cx="100" cy="90" r="35" fill="#334155" stroke="#0f172a" stroke-width="3"/><circle cx="100" cy="90" r="18" fill="#0a2540"/><circle cx="100" cy="90" r="8" fill="#06b6d4"/><rect x="90" y="125" width="20" height="30" fill="#334155"/><rect x="70" y="155" width="60" height="8" rx="4" fill="#0f172a"/><circle cx="130" cy="70" r="5" fill="#ef4444"/><text x="100" y="185" font-family="Outfit" font-weight="700" font-size="11" fill="#0a2540" text-anchor="middle">CÁMARA 360°</text></svg>`,
    "images/branding.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="120" height="120"><rect width="100%" height="100%" fill="#f1f5f9"/><rect x="55" y="40" width="90" height="120" rx="6" fill="#ffffff" stroke="#0a2540" stroke-width="3"/><circle cx="100" cy="75" r="20" fill="#6d28d9"/><text x="100" y="81" font-family="Outfit" font-weight="800" font-size="16" fill="#fff" text-anchor="middle">N</text><rect x="70" y="105" width="60" height="6" rx="3" fill="#cbd5e1"/><rect x="75" y="118" width="50" height="4" rx="2" fill="#e2e8f0"/><rect x="80" y="128" width="40" height="4" rx="2" fill="#e2e8f0"/><text x="100" y="185" font-family="Outfit" font-weight="700" font-size="11" fill="#0a2540" text-anchor="middle">BRANDING</text></svg>`,
    "images/smartwatch.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="120" height="120"><rect width="100%" height="100%" fill="#f1f5f9"/><rect x="70" y="25" width="60" height="20" rx="5" fill="#334155"/><rect x="65" y="45" width="70" height="90" rx="14" fill="#0a2540" stroke="#334155" stroke-width="2"/><rect x="72" y="52" width="56" height="76" rx="10" fill="#020617"/><circle cx="100" cy="78" r="20" fill="none" stroke="#06b6d4" stroke-width="2"/><path d="M100 65 v13 l8 8" fill="none" stroke="#06b6d4" stroke-width="2" stroke-linecap="round"/><circle cx="100" cy="105" r="3" fill="#10b981"/><rect x="70" y="135" width="60" height="20" rx="5" fill="#334155"/><text x="100" y="180" font-family="Outfit" font-weight="700" font-size="11" fill="#0a2540" text-anchor="middle">SMARTWATCH</text></svg>`
};

// ==========================================================================
// FUNCIONES GLOBALMENTE COMPARTIDAS
// ==========================================================================

// Mostrar Toast
function showToast(message, type = "success") {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span class="toast-icon">✓</span> <span class="toast-msg">${message}</span>`;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.5s ease';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// Cargar imagen (Soporte para imágenes cargadas y SVGs inline de respaldo)
function renderProductImage(imagePath, targetEl) {
    if (inlineSVGs[imagePath]) {
        targetEl.innerHTML = inlineSVGs[imagePath];
    } else {
        targetEl.innerHTML = `<img src="${imagePath}" alt="Imagen del producto" onerror="this.onerror=null; this.parentNode.innerHTML=window.inlineSVGs['images/seo_marketing.svg']">`;
    }
}

// ==========================================================================
// GESTOR DE CARRITO DE COMPRAS
// ==========================================================================
const CartManager = {
    // Añadir al Carrito
    addItem: function(productId, quantity = 1) {
        const item = catalogItems.find(p => p.id === productId);
        if (!item) return;

        const existingItem = cart.find(cartItem => cartItem.id === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                quantity: quantity
            });
        }
        this.saveAndSync();
        showToast(`Añadido al carrito: ${item.name}`);
    },

    // Quitar del Carrito
    removeItem: function(productId) {
        cart = cart.filter(item => item.id !== productId);
        this.saveAndSync();
        showToast("Producto eliminado del carrito", "success");
    },

    // Actualizar cantidad
    updateQuantity: function(productId, quantity) {
        const cartItem = cart.find(item => item.id === productId);
        if (!cartItem) return;

        cartItem.quantity = parseInt(quantity);
        if (cartItem.quantity <= 0) {
            this.removeItem(productId);
        } else {
            this.saveAndSync();
        }
    },

    // Limpiar carrito
    clear: function() {
        cart = [];
        this.saveAndSync();
    },

    // Guardar en LocalStorage y Actualizar Interfaz
    saveAndSync: function() {
        localStorage.setItem('Nexus Marketing_cart', JSON.stringify(cart));
        this.updateUI();
    },

    // Obtener Totales
    getTotals: function() {
        let count = 0;
        let total = 0;
        cart.forEach(item => {
            count += item.quantity;
            total += item.price * item.quantity;
        });
        const subtotal = total;
        // Aplicar descuento promocional si existe
        if (window.PromoSystem && window.PromoSystem.discount > 0) {
            total = total * (1 - window.PromoSystem.discount);
        }
        return { count, total, subtotal };
    },

    // Renderizar Carrito en la interfaz
    updateUI: function() {
        const totals = this.getTotals();
        
        // Actualizar indicadores numéricos flotantes y contadores en cabeceras
        const badges = document.querySelectorAll('.cart-count');
        badges.forEach(b => b.textContent = totals.count);

        const totalsDisplays = document.querySelectorAll('.cart-total-val');
        totalsDisplays.forEach(td => td.textContent = `$${totals.total.toFixed(2)} USD`);

        // Renderizar items en la barra lateral del carrito
        const container = document.getElementById('cart-items-list');
        if (!container) return;

        if (cart.length === 0) {
            container.innerHTML = `
                <div class="cart-empty-state">
                    <div class="cart-empty-icon">🛒</div>
                    <p>Tu carrito está vacío</p>
                    <small>Agrega servicios o productos para comenzar</small>
                </div>
            `;
            const checkBtn = document.getElementById('cart-checkout-btn');
            if (checkBtn) checkBtn.style.display = 'none';
        } else {
            const checkBtn = document.getElementById('cart-checkout-btn');
            if (checkBtn) checkBtn.style.display = 'block';

            container.innerHTML = cart.map(item => {
                const isSvg = inlineSVGs[item.image] ? true : false;
                const imgMarkup = isSvg ? inlineSVGs[item.image] : `<img src="${item.image}" alt="${item.name}">`;
                
                return `
                    <div class="cart-item">
                        <div class="cart-item-img">
                            ${imgMarkup}
                        </div>
                        <div class="cart-item-details">
                            <h4 class="cart-item-name">${item.name}</h4>
                            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                            <div class="cart-item-actions">
                                <div class="qty-selector">
                                    <button class="qty-btn" onclick="CartManager.updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                                    <span class="qty-val">${item.quantity}</span>
                                    <button class="qty-btn" onclick="CartManager.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                                </div>
                                <button class="cart-item-remove" onclick="CartManager.removeItem('${item.id}')">Quitar</button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }
};

// ==========================================================================
// GESTOR DE LISTA DE DESEOS (WISHLIST)
// ==========================================================================
const WishlistManager = {
    items: JSON.parse(localStorage.getItem('nexus_wishlist')) || [],

    toggle: function(productId) {
        const idx = this.items.indexOf(productId);
        if (idx > -1) {
            this.items.splice(idx, 1);
            showToast('Eliminado de tu lista de deseos', 'success');
        } else {
            this.items.push(productId);
            showToast('Añadido a tu lista de deseos ♥', 'success');
        }
        localStorage.setItem('nexus_wishlist', JSON.stringify(this.items));
        this.updateUI();
    },

    isInWishlist: function(productId) {
        return this.items.indexOf(productId) > -1;
    },

    updateUI: function() {
        // Actualizar todos los botones de corazón en la página
        document.querySelectorAll('.product-wishlist-btn').forEach(btn => {
            const pid = btn.getAttribute('data-product-id');
            if (pid && this.isInWishlist(pid)) {
                btn.classList.add('active');
                btn.innerHTML = '♥';
            } else if (pid) {
                btn.classList.remove('active');
                btn.innerHTML = '♡';
            }
        });
        // Actualizar contador de lista de deseos en el encabezado
        const wishBadges = document.querySelectorAll('.wishlist-count');
        wishBadges.forEach(b => b.textContent = this.items.length);
    },

    showDrawer: function() {
        let drawer = document.getElementById('wishlist-drawer');
        let overlay = document.getElementById('wishlist-overlay');
        if (!drawer) return;

        // Renderizar elementos de la lista de deseos
        const container = document.getElementById('wishlist-items-list');
        if (!container) return;

        if (this.items.length === 0) {
            container.innerHTML = `
                <div style="text-align:center; padding:40px 20px; color:var(--color-text-muted);">
                    <div style="font-size:48px; margin-bottom:15px;">♡</div>
                    <p>Tu lista de deseos está vacía</p>
                    <small>Explora nuestro catálogo y guarda tus favoritos</small>
                </div>
            `;
        } else {
            container.innerHTML = this.items.map(pid => {
                const item = catalogItems.find(p => p.id === pid);
                if (!item) return '';
                const isSvg = inlineSVGs[item.image] ? true : false;
                const imgMarkup = isSvg 
                    ? `<div style="width:60px;height:60px;display:flex;align-items:center;justify-content:center;">${inlineSVGs[item.image]}</div>` 
                    : `<img src="${item.image}" alt="${item.name}" style="width:60px;height:60px;object-fit:contain;border-radius:8px;">`;
                return `
                    <div style="display:flex; align-items:center; gap:12px; padding:12px 0; border-bottom:1px solid var(--color-border);">
                        ${imgMarkup}
                        <div style="flex:1;">
                            <h5 style="font-size:13px; font-weight:600; color:var(--color-text-main); margin-bottom:4px;">${item.name}</h5>
                            <span style="font-size:12px; color:var(--color-primary); font-weight:700;">$${item.price} USD</span>
                        </div>
                        <div style="display:flex; gap:8px;">
                            <button style="background:var(--gradient-primary); color:white; border:none; padding:6px 12px; border-radius:6px; cursor:pointer; font-size:11px;" onclick="CartManager.addItem('${item.id}'); WishlistManager.toggle('${item.id}');">🛒 Comprar</button>
                            <button style="background:transparent; border:1px solid var(--color-accent-red); color:var(--color-accent-red); padding:6px 10px; border-radius:6px; cursor:pointer; font-size:11px;" onclick="WishlistManager.toggle('${item.id}'); WishlistManager.showDrawer();">✕</button>
                        </div>
                    </div>
                `;
            }).join('');
        }

        drawer.classList.add('active');
        overlay.classList.add('active');
    }
};

// ==========================================================================
// CONTROLADORES DE ELEMENTOS COMUNES DE INTERFAZ (DRAWER, MODALES)
// ==========================================================================

function initUIControls() {
    // Drawer de Categorías Lateral (Izquierda)
    const categoryBtn = document.getElementById('trigger-categories');
    const categoryDrawer = document.getElementById('category-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const drawerClose = document.getElementById('drawer-close');

    if (categoryBtn && categoryDrawer && drawerOverlay) {
        const toggleDrawer = (open) => {
            if (open) {
                categoryDrawer.classList.add('active');
                drawerOverlay.classList.add('active');
            } else {
                categoryDrawer.classList.remove('active');
                drawerOverlay.classList.remove('active');
            }
        };

        categoryBtn.addEventListener('click', (e) => { e.preventDefault(); toggleDrawer(true); });
        drawerClose.addEventListener('click', () => toggleDrawer(false));
        drawerOverlay.addEventListener('click', () => toggleDrawer(false));
    }

    // Drawer del Carrito Lateral (Derecha)
    const cartBtn = document.getElementById('trigger-cart');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartClose = document.getElementById('cart-close');

    if (cartBtn && cartDrawer && cartOverlay) {
        const toggleCart = (open) => {
            if (open) {
                cartDrawer.classList.add('active');
                cartOverlay.classList.add('active');
                CartManager.updateUI(); // Refrescar en apertura
            } else {
                cartDrawer.classList.remove('active');
                cartOverlay.classList.remove('active');
            }
        };

        cartBtn.addEventListener('click', (e) => { e.preventDefault(); toggleCart(true); });
        cartClose.addEventListener('click', () => toggleCart(false));
        cartOverlay.addEventListener('click', () => toggleCart(false));
    }

    // Modal de Detalles del Producto
    const modalOverlay = document.getElementById('product-modal');
    const modalClose = document.getElementById('modal-close');
    if (modalOverlay && modalClose) {
        modalClose.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
        });
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) modalOverlay.classList.remove('active');
        });
    }

    // Chat flotante / Contacto
    const whatsappFloating = document.getElementById('whatsapp-float');
    if (whatsappFloating) {
        whatsappFloating.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://api.whatsapp.com/send?phone=593986903129&text=Hola!%20Deseo%20cotizar%20servicios%20de%20marketing%20digital.', '_blank');
        });
    }
}

// Abrir detalle de producto en Modal
function openProductDetail(productId) {
    const item = catalogItems.find(p => p.id === productId);
    if (!item) return;

    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body-content');
    if (!modal || !modalBody) return;

    const isSvg = inlineSVGs[item.image] ? true : false;
    const imgMarkup = isSvg ? inlineSVGs[item.image] : `<img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.parentNode.innerHTML=window.inlineSVGs['images/seo_marketing.svg']">`;

    // Llenar datos
    modalBody.innerHTML = `
        <div class="modal-grid">
            <div class="modal-img-container">
                ${imgMarkup}
            </div>
            <div class="modal-details">
                <span class="product-category">${item.category}</span>
                <h2 class="slide-title" style="font-size:26px; margin-bottom:10px;">${item.name}</h2>
                <div class="product-rating" style="font-size:14px; margin-bottom:15px;">
                    ${"★".repeat(item.rating)}${"☆".repeat(5-item.rating)}
                </div>
                <div class="slide-price-tag" style="margin-bottom:15px;">
                    <span class="product-price-old">$${item.oldPrice} USD</span>
                    <span class="slide-price-val">$${item.price} USD</span>
                </div>
                <p class="slide-desc" style="font-size:13px; line-height:1.5; margin-bottom:20px;">${item.description}</p>
                <div class="product-installments" style="margin-bottom:20px; font-size:13px;">
                    <span>Financiamiento / Cuotas:</span> ${item.installments}
                </div>
                <button class="slide-btn" onclick="CartManager.addItem('${item.id}'); document.getElementById('product-modal').classList.remove('active');">
                    Agregar al Carrito
                </button>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

// ==========================================================================
// LOGICA DE CARRUSEL (SLIDER DE INICIO)
// ==========================================================================
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.getElementById('slider-dots');
    if (!slides.length || !dotsContainer) return;

    // Crear dots
    dotsContainer.innerHTML = '';
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.slider-dot');

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Auto rotar cada 5 segundos
    let autoSlide = setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 6000);

    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            clearInterval(autoSlide);
            goToSlide(currentSlide - 1);
        });
        nextBtn.addEventListener('click', () => {
            clearInterval(autoSlide);
            goToSlide(currentSlide + 1);
        });
    }
}

// ==========================================================================
// RENDERIZADOR DEL CATÁLOGO (PÁGINA INICIO)
// ==========================================================================
function renderCatalog(filterCategory = "Todos") {
    const grid = document.getElementById('catalog-grid');
    if (!grid) return;

    let filtered = catalogItems;
    if (filterCategory !== "Todos") {
        filtered = catalogItems.filter(item => item.category === filterCategory);
    }

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted);">No se encontraron productos en esta categoría.</p>`;
        return;
    }

    grid.innerHTML = filtered.map(item => {
        const isSvg = inlineSVGs[item.image] ? true : false;
        const imgMarkup = isSvg ? inlineSVGs[item.image] : `<img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.parentNode.innerHTML=window.inlineSVGs['images/seo_marketing.svg']">`;
        
        return `
            <div class="product-card">
                <span class="product-badge badge ${item.badgeClass}">${item.badge}</span>
                <button class="product-wishlist-btn" data-product-id="${item.id}" onclick="WishlistManager.toggle('${item.id}')">♡</button>
                <div class="product-img-container" onclick="openProductDetail('${item.id}')" style="cursor:pointer;">
                    ${imgMarkup}
                </div>
                <div class="product-info">
                    <span class="product-category">${item.category}</span>
                    <h3 class="product-name" onclick="openProductDetail('${item.id}')" style="cursor:pointer;">${item.name}</h3>
                    <div class="product-rating">
                        ${"★".repeat(item.rating)}${"☆".repeat(5-item.rating)}
                    </div>
                    <div class="product-pricing">
                        <div class="product-price-row">
                            <span class="product-price-old">$${item.oldPrice}</span>
                            <span class="product-price-current">$${item.price} USD</span>
                        </div>
                        <div class="product-installments">
                            <span>Cuotas</span> ${item.installments}
                        </div>
                    </div>
                    <button class="product-add-btn" onclick="CartManager.addItem('${item.id}')">
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Búsqueda en vivo
function initLiveSearch() {
    const searchInput = document.getElementById('search-input');
    const searchForm = document.getElementById('search-form');
    if (!searchInput) return;

    const handleSearch = () => {
        const query = searchInput.value.toLowerCase().trim();
        const grid = document.getElementById('catalog-grid');
        if (!grid) return; // Si no está en index.html, no filtrar catálogo directo

        if (query === "") {
            renderCatalog("Todos");
            return;
        }

        const filtered = catalogItems.filter(item => 
            item.name.toLowerCase().includes(query) || 
            item.category.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted); padding: 40px 0;">No se encontraron resultados para "${query}".</p>`;
        } else {
            grid.innerHTML = filtered.map(item => {
                const isSvg = inlineSVGs[item.image] ? true : false;
                const imgMarkup = isSvg ? inlineSVGs[item.image] : `<img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.parentNode.innerHTML=window.inlineSVGs['images/seo_marketing.svg']">`;
                
                return `
                    <div class="product-card">
                        <span class="product-badge badge ${item.badgeClass}">${item.badge}</span>
                        <button class="product-wishlist-btn" data-product-id="${item.id}" onclick="WishlistManager.toggle('${item.id}')">♡</button>
                        <div class="product-img-container" onclick="openProductDetail('${item.id}')" style="cursor:pointer;">
                            ${imgMarkup}
                        </div>
                        <div class="product-info">
                            <span class="product-category">${item.category}</span>
                            <h3 class="product-name" onclick="openProductDetail('${item.id}')" style="cursor:pointer;">${item.name}</h3>
                            <div class="product-rating">
                                ${"★".repeat(item.rating)}${"☆".repeat(5-item.rating)}
                            </div>
                            <div class="product-pricing">
                                <div class="product-price-row">
                                    <span class="product-price-old">$${item.oldPrice}</span>
                                    <span class="product-price-current">$${item.price} USD</span>
                                </div>
                                <div class="product-installments">
                                    <span>Cuotas</span> ${item.installments}
                                </div>
                            </div>
                            <button class="product-add-btn" onclick="CartManager.addItem('${item.id}')">
                                Agregar al Carrito
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        }
    };

    searchInput.addEventListener('input', handleSearch);
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleSearch();
        });
    }
}

// Búsqueda por Voz (Web Speech API)
function initVoiceSearch() {
    const voiceBtn = document.querySelector('.search-voice-btn');
    const searchInput = document.getElementById('search-input');
    if (!voiceBtn || !searchInput) return;

    voiceBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            showToast('Tu navegador no soporta búsqueda por voz. Intenta con Chrome.', 'error');
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = 'es-EC';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        voiceBtn.classList.add('listening');
        voiceBtn.innerHTML = '<i class="fas fa-circle" style="color:#ef4444; animation: pulse 1s infinite;"></i>';
        showToast('🎤 Escuchando... Habla ahora', 'success');

        recognition.start();

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            searchInput.value = transcript;
            searchInput.dispatchEvent(new Event('input'));
            showToast(`Búsqueda por voz: "${transcript}"`, 'success');
        };

        recognition.onerror = (event) => {
            showToast('No se pudo reconocer. Intenta de nuevo.', 'error');
        };

        recognition.onend = () => {
            voiceBtn.classList.remove('listening');
            voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
        };
    });
}

// Inicialización de Pestañas de Categoría (index.html)
function initCatalogTabs() {
    const tabs = document.querySelectorAll('.section-tab-btn');
    if (!tabs.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const category = tab.getAttribute('data-category');
            renderCatalog(category);
        });
    });
}

// ==========================================================================
// SECCIÓN CHECKOUT & PASARELA DE PAGOS (checkout.html)
// ==========================================================================
function initCheckout() {
    const orderItemsContainer = document.getElementById('checkout-order-items');
    if (!orderItemsContainer) return;

    // Renderizar resumen del carrito en checkout
    const updateCheckoutSummary = () => {
        const totals = CartManager.getTotals();
        
        if (cart.length === 0) {
            orderItemsContainer.innerHTML = `<p style="color:var(--color-text-muted); text-align:center;">No tienes artículos para comprar. <a href="index.html" style="color:var(--color-accent-purple); font-weight:600;">Volver al Inicio</a></p>`;
            const submitBtn = document.getElementById('checkout-submit-btn');
            if (submitBtn) submitBtn.disabled = true;
            return;
        }

        orderItemsContainer.innerHTML = cart.map(item => {
            return `
                <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--color-border); padding-bottom:10px; margin-bottom:10px;">
                    <div>
                        <h5 style="font-size:13px; font-weight:600; color:var(--color-text-main); margin-bottom:2px;">${item.name}</h5>
                        <small style="color:var(--color-text-muted);">Cant: ${item.quantity} x $${item.price.toFixed(2)}</small>
                    </div>
                    <span style="font-weight:700; font-size:14px; color:var(--color-primary);">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            `;
        }).join('');

        const subtotal = totals.subtotal;
        const discountAmt = totals.subtotal - totals.total;
        const totalAfterDiscount = totals.total;
        const tax = totalAfterDiscount * 0.12; // 12% IVA Ecuador
        const finalTotal = totalAfterDiscount + tax;

        document.getElementById('checkout-subtotal').textContent = `$${subtotal.toFixed(2)} USD`;
        if (discountAmt > 0) {
            let discountEl = document.getElementById('checkout-discount-row');
            if(!discountEl) {
                document.getElementById('checkout-subtotal').parentElement.insertAdjacentHTML('afterend', `
                    <div id="checkout-discount-row" style="display:flex; justify-content:space-between; font-size:14px; margin-bottom:8px; color:var(--color-accent-green);">
                        <span>Descuento Promocional:</span>
                        <span id="checkout-discount">-$${discountAmt.toFixed(2)} USD</span>
                    </div>
                `);
            } else {
                document.getElementById('checkout-discount').textContent = `-$${discountAmt.toFixed(2)} USD`;
            }
        }
        document.getElementById('checkout-tax').textContent = `$${tax.toFixed(2)} USD`;
        document.getElementById('checkout-total').textContent = `$${finalTotal.toFixed(2)} USD`;
    };

    updateCheckoutSummary();

    // Métodos de Pago Tabulación
    const paymentCards = document.querySelectorAll('.payment-method-card');
    const paymentForms = {
        card: document.getElementById('pay-form-card'),
        paypal: document.getElementById('pay-form-paypal'),
        transfer: document.getElementById('pay-form-transfer')
    };

    paymentCards.forEach(card => {
        card.addEventListener('click', () => {
            paymentCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            const method = card.getAttribute('data-method');
            // Ocultar todos los formularios de pago
            Object.values(paymentForms).forEach(f => { if (f) f.style.display = 'none'; });
            // Mostrar el seleccionado
            if (paymentForms[method]) paymentForms[method].style.display = 'block';
        });
    });

    // Controladores de animación de Tarjeta de Crédito 3D
    const cardInputNumber = document.getElementById('card-number-input');
    const cardInputName = document.getElementById('card-name-input');
    const cardInputExpiry = document.getElementById('card-expiry-input');
    const cardInputCVV = document.getElementById('card-cvv-input');

    const cardViewNumber = document.getElementById('card-num-display');
    const cardViewName = document.getElementById('card-holder-display');
    const cardViewExpiry = document.getElementById('card-exp-display');
    const cardViewCVV = document.getElementById('card-cvv-display');
    const creditCardPreview = document.getElementById('credit-card-preview');

    if (cardInputNumber) {
        // Enmascaramiento y espaciado de tarjeta
        cardInputNumber.addEventListener('input', (e) => {
            let val = e.target.value.replace(/\D/g, '');
            val = val.substring(0, 16);
            const matches = val.match(/\d{4,16}/g);
            const match = (matches && matches[0]) || '';
            const parts = [];

            for (let i = 0, len = match.length; i < len; i += 4) {
                parts.push(match.substring(i, i + 4));
            }

            if (parts.length > 0) {
                e.target.value = parts.join(' ');
            } else {
                e.target.value = val;
            }

            cardViewNumber.textContent = e.target.value || '•••• •••• •••• ••••';
        });
    }

    if (cardInputName) {
        cardInputName.addEventListener('input', (e) => {
            cardViewName.textContent = e.target.value.toUpperCase() || 'NOMBRE DEL TITULAR';
        });
    }

    if (cardInputExpiry) {
        cardInputExpiry.addEventListener('input', (e) => {
            let val = e.target.value.replace(/\D/g, '');
            if (val.length >= 2) {
                val = val.substring(0, 2) + '/' + val.substring(2, 4);
            }
            e.target.value = val.substring(0, 5);
            cardViewExpiry.textContent = e.target.value || 'MM/AA';
        });
    }

    if (cardInputCVV && creditCardPreview) {
        cardInputCVV.addEventListener('focus', () => {
            creditCardPreview.classList.add('flipped');
        });
        cardInputCVV.addEventListener('blur', () => {
            creditCardPreview.classList.remove('flipped');
        });
        cardInputCVV.addEventListener('input', (e) => {
            let val = e.target.value.replace(/\D/g, '');
            e.target.value = val.substring(0, 4);
            cardViewCVV.textContent = e.target.value || '•••';
        });
    }

    // Envío del Checkout
    const checkoutForm = document.getElementById('checkout-main-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validar campos
            const buyerName = document.getElementById('buyer-name').value;
            const buyerEmail = document.getElementById('buyer-email').value;

            if (!buyerName || !buyerEmail) {
                showToast("Por favor complete los datos de facturación obligatorios", "error");
                return;
            }

            // Simulación de carga
            const submitBtn = document.getElementById('checkout-submit-btn');
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span style="display:inline-block; animation:spin 1s linear infinite; margin-right:8px;">⏳</span> Procesando Pago Seguro...`;

            setTimeout(() => {
                // Registrar la orden en localStorage para el panel del cliente
                const orders = JSON.parse(localStorage.getItem('Nexus Marketing_orders')) || [];
                const totals = CartManager.getTotals();
                const newOrder = {
                    id: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
                    date: new Date().toLocaleDateString('es-ES'),
                    items: [...cart],
                    subtotal: totals.total,
                    tax: totals.total * 0.12,
                    total: totals.total * 1.12,
                    status: "Completado"
                };

                orders.push(newOrder);
                localStorage.setItem('Nexus Marketing_orders', JSON.stringify(orders));

                // Limpiar carrito
                CartManager.clear();

                // Mostrar modal de éxito
                const successModal = document.getElementById('payment-success-modal');
                if (successModal) {
                    document.getElementById('success-order-id').textContent = newOrder.id;
                    successModal.classList.add('active');
                } else {
                    showToast("Pago aprobado con éxito. Redirigiendo...", "success");
                    setTimeout(() => { window.location.href = 'dashboard.html'; }, 2000);
                }
            }, 3000);
        });
    }
}

// ==========================================================================
// SECCIÓN PANEL DEL CLIENTE (dashboard.html)
// ==========================================================================
function initDashboard() {
    const ordersList = document.getElementById('dashboard-orders-list');
    const servicesList = document.getElementById('dashboard-services-list');
    if (!ordersList && !servicesList) return; // No en página dashboard

    const orders = JSON.parse(localStorage.getItem('Nexus Marketing_orders')) || [];

    // Renderizar ordenes de compra
    if (ordersList) {
        if (orders.length === 0) {
            ordersList.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align:center; padding:30px; color:var(--color-text-muted);">
                        No has realizado ninguna compra todavía. <a href="index.html" style="color:var(--color-accent-purple); font-weight:600;">Comprar servicios/productos</a>
                    </td>
                </tr>
            `;
        } else {
            ordersList.innerHTML = orders.map(ord => {
                const itemsNames = ord.items.map(it => `${it.name} (x${it.quantity})`).join(', ');
                return `
                    <tr>
                        <td style="padding:15px; font-weight:700; color:var(--color-primary);">${ord.id}</td>
                        <td style="padding:15px; color:var(--color-text-muted);">${ord.date}</td>
                        <td style="padding:15px; max-width:250px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${itemsNames}</td>
                        <td style="padding:15px; font-weight:700;">$${ord.total.toFixed(2)} USD</td>
                        <td style="padding:15px;"><span class="badge badge-green">${ord.status}</span></td>
                    </tr>
                `;
            }).join('');
        }
    }

    // Renderizar servicios contratados en la pestaña correspondiente
    if (servicesList) {
        // Encontrar si compró servicios de marketing en sus órdenes
        const purchasedServices = [];
        orders.forEach(ord => {
            ord.items.forEach(it => {
                if (it.id.startsWith('serv-')) {
                    purchasedServices.push({
                        name: it.name,
                        date: ord.date,
                        orderId: ord.id
                    });
                }
            });
        });

        if (purchasedServices.length === 0) {
            servicesList.innerHTML = `
                <div style="text-align:center; padding:40px; border:1px dashed var(--color-border); border-radius:var(--radius-md); grid-column:1/-1;">
                    <h4 style="margin-bottom:8px; color:var(--color-primary);">No tienes servicios de marketing activos</h4>
                    <p style="font-size:13px; color:var(--color-text-muted); margin-bottom:20px;">Contrata planes SEO, Redes Sociales o Diseño Web para ver su avance y métricas aquí.</p>
                    <a href="index.html" class="slide-btn" style="margin: 0 auto;">Ver Catálogo de Servicios</a>
                </div>
            `;
        } else {
            servicesList.innerHTML = purchasedServices.map(srv => {
                // Estado simulado basado en el tipo de servicio
                let statusText = "En Progreso";
                let progressPercent = 35;
                let nextDeliverable = "Auditoría de Palabras Clave";

                if (srv.name.includes("Redes")) {
                    statusText = "Generando Contenido";
                    progressPercent = 60;
                    nextDeliverable = "Aprobación de Grilla Semanal";
                } else if (srv.name.includes("Web")) {
                    statusText = "Estructura & Maquetación";
                    progressPercent = 20;
                    nextDeliverable = "Propuesta de Diseño de Inicio";
                } else if (srv.name.includes("Ads")) {
                    statusText = "Optimización Semanal";
                    progressPercent = 80;
                    nextDeliverable = "Reporte de Conversiones de Campaña";
                }

                return `
                    <div style="background:var(--color-bg-main); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:20px; display:flex; flex-direction:column; gap:15px;">
                        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                            <div>
                                <span class="badge badge-cyan" style="margin-left:0; margin-bottom:8px;">Servicio Activo</span>
                                <h4 style="font-family:var(--font-heading); color:var(--color-primary); font-size:16px;">${srv.name}</h4>
                                <small style="color:var(--color-text-muted);">Contratado el ${srv.date} (Orden: ${srv.orderId})</small>
                            </div>
                            <span class="badge badge-green">${statusText}</span>
                        </div>
                        
                        <div>
                            <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:600; margin-bottom:5px;">
                                <span>Progreso del Proyecto</span>
                                <span>${progressPercent}%</span>
                            </div>
                            <div style="width:100%; height:8px; background:var(--color-border); border-radius:4px; overflow:hidden;">
                                <div style="width:${progressPercent}%; height:100%; background:var(--color-accent-purple); border-radius:4px; transition:width 1s ease;"></div>
                            </div>
                        </div>

                        <div style="background:white; padding:10px; border-radius:var(--radius-sm); border:1px solid var(--color-border); font-size:12px;">
                            <strong style="color:var(--color-primary);">Próximo Entregable:</strong> ${nextDeliverable}
                        </div>
                    </div>
                `;
            }).join('');
        }
    }
}

// Cambio de pestañas en el Dashboard
function initDashboardTabs() {
    const links = document.querySelectorAll('.db-side-link');
    if (!links.length) return;

    const sections = {
        resumen: document.getElementById('db-sec-resumen'),
        servicios: document.getElementById('db-sec-servicios'),
        compras: document.getElementById('db-sec-compras'),
        soporte: document.getElementById('db-sec-soporte')
    };

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const sectionKey = link.getAttribute('data-section');
            Object.values(sections).forEach(sec => { if (sec) sec.style.display = 'none'; });
            if (sections[sectionKey]) sections[sectionKey].style.display = 'block';
        });
    });
}

// ==========================================================================
// RENDERIZADORES DE DIRECTORIO DE TIENDAS Y BLOG (PÁGINAS EXTERNAS)
// ==========================================================================
function renderDirectory() {
    const grid = document.getElementById('directory-grid');
    if (!grid) return;

    grid.innerHTML = directoryStores.map(store => {
        return `
            <div class="store-card">
                <div class="store-logo-wrapper">${store.logoText}</div>
                <h3 class="store-name">${store.name}</h3>
                <div class="store-meta">
                    <span class="store-badge">${store.category}</span>
                </div>
                <div class="product-rating" style="margin-bottom:12px;">
                    ${"★".repeat(Math.round(store.rating))}${"☆".repeat(5-Math.round(store.rating))} (${store.rating})
                </div>
                <small style="color:var(--color-text-muted); margin-bottom:15px; display:block;">${store.productsCount} Productos en catálogo</small>
                <a href="index.html" class="product-add-btn" style="text-align:center;">Visitar Tienda</a>
            </div>
        `;
    }).join('');
}

function renderBlog() {
    const grid = document.getElementById('blog-grid');
    if (!grid) return;

    grid.innerHTML = blogArticles.map(art => {
        return `
            <article class="blog-card">
                <div class="blog-img-container">
                    ${inlineSVGs[art.image] || ''}
                </div>
                <div class="blog-content">
                    <div class="blog-date">${art.date}</div>
                    <h3 class="blog-title">${art.title}</h3>
                    <p class="blog-excerpt">${art.excerpt}</p>
                    <a href="#" class="blog-read-more" onclick="event.preventDefault(); showToast('Abriendo artículo completo...')">Leer más →</a>
                </div>
            </article>
        `;
    }).join('');
}

// ==========================================================================
// CARGA INICIAL DE LA APLICACIÓN
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar controles comunes de interfaz (Menús laterales, WhatsApp)
    initUIControls();

    // Actualizar el estado del carrito en toda la aplicación
    CartManager.updateUI();

    // Lógica específica para cada página detectando elementos
    if (document.getElementById('catalog-grid')) {
        renderCatalog("Todos");
        initCatalogTabs();
        initHeroSlider();
        initLiveSearch();
        initVoiceSearch();
        WishlistManager.updateUI();
    }

    if (document.getElementById('checkout-order-items')) {
        initCheckout();
    }

    if (document.getElementById('dashboard-orders-list') || document.getElementById('dashboard-services-list')) {
        initDashboard();
        initDashboardTabs();
    }

    if (document.getElementById('directory-grid')) {
        renderDirectory();
    }

    if (document.getElementById('blog-grid')) {
        renderBlog();
    }
});

// Estilos de rotación de animación de carga en Checkout
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
`;
document.head.appendChild(styleSheet);

// ==========================================================================
// NUEVO SISTEMA DE PROMOCIONES (PROMO CODES)
// ==========================================================================
window.PromoSystem = {
    discount: 0,
    applyCode: function(code) {
        if (code.toUpperCase() === "NEXUS2026") {
            this.discount = 0.15; // 15% de descuento
            showToast("Cupón NEXUS2026 aplicado: 15% de descuento", "success");
            CartManager.updateUI();
            if(document.getElementById('checkout-order-items')) {
                // Forzar re-render en checkout
                const evt = new Event('DOMContentLoaded');
                document.dispatchEvent(evt);
            }
        } else {
            showToast("Código promocional inválido", "error");
        }
    }
};

// ==========================================================================
// EXPORTACIÓN GLOBAL PARA HTML INLINE ONCLICK (SOLUCIÓN A VITE MODULES)
// ==========================================================================
window.CartManager = CartManager;
window.WishlistManager = WishlistManager;
window.renderCatalog = renderCatalog;
window.showToast = showToast;
window.openProductDetail = openProductDetail;
window.initVoiceSearch = initVoiceSearch;
window.inlineSVGs = inlineSVGs;
window.sendChatMessage = typeof sendChatMessage !== 'undefined' ? sendChatMessage : function() { showToast('Mensaje enviado') };
window.PromoSystem = window.PromoSystem;
