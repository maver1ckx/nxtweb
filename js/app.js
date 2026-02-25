// Tailwind Configuration
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#2563eb",
                secondary: "#60a5fa",
                "background-light": "#f8fafc",
                "background-dark": "#070a13",
                "neutral-dark": "#0f172a",
                "accent-dark": "#1e293b",
                "premium-blue": "#2563eb"
            },
            fontFamily: {
                display: ["Manrope", "sans-serif"],
                sans: ["Inter", "sans-serif"]
            }
        }
    }
}

// Component Constants (HTML as strings to bypass local fetch CORS issues)
const HEADER_HTML = `
<div class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
    <a href="index.html" class="flex items-center gap-1.5 group">
        <span class="text-2xl font-black tracking-tighter text-primary transition-colors duration-300">NXT</span>
        <span class="text-xl font-light tracking-widest text-slate-500 uppercase mt-0.5 group-hover:text-white transition-colors duration-300">Studio</span>
    </a>

    <nav class="hidden md:flex gap-10 text-sm font-semibold uppercase tracking-wider">
        <a href="index.html" class="nav-link text-slate-500 hover:text-primary transition-colors" data-nav="home">홈</a>
        <a href="service.html" class="nav-link text-slate-500 hover:text-primary transition-colors" data-nav="service">서비스</a>
        <a href="process.html" class="nav-link text-slate-500 hover:text-primary transition-colors" data-nav="process">프로세스</a>
        <a href="about.html" class="nav-link text-slate-500 hover:text-primary transition-colors" data-nav="about">About Us</a>
    </nav>

    <a href="contact.html"
        class="bg-primary hover:bg-premium-blue/90 transition-all text-white px-8 py-3 rounded-full text-sm font-bold shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 leading-none">
        무료 상담하기
    </a>
</div>
`;

const FOOTER_HTML = `
<div class="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-left">
    <div class="md:col-span-2">
        <a href="index.html" class="flex items-center gap-1.5 mb-6 group inline-flex">
            <span class="text-2xl font-black tracking-tighter text-primary transition-colors duration-300">NXT</span>
            <span class="text-xl font-light tracking-widest text-slate-500 uppercase mt-0.5 group-hover:text-white transition-colors duration-300">Studio</span>
        </a>
        <p class="text-slate-500 text-sm max-w-xs leading-relaxed">
            Leading the next digital standard with premium web experiences for small businesses and educators.
        </p>

    </div>
    
    <div>
        <h4 class="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
        <div class="flex flex-col gap-4 text-sm text-slate-500">
            <a href="contact.html" class="hover:text-primary transition-colors">Contact Us</a>
            <a href="about.html" class="hover:text-primary transition-colors">Our Story</a>
        </div>
    </div>

    <div>
        <h4 class="text-white font-bold mb-6 text-sm uppercase tracking-widest">Legal</h4>
        <div class="flex flex-col gap-4 text-sm text-slate-500">
            <a href="terms.html" class="hover:text-primary transition-colors">Terms of Service</a>
            <a href="privacy.html" class="hover:text-primary transition-colors">Privacy Policy</a>
        </div>
    </div>
</div>

<div class="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center">
    <div class="text-xs text-slate-600 font-medium">
        © 2026 NXT studio. Crafted with precision for the digital age.
    </div>
</div>
`;

// Component Loader
function loadComponents() {
    const headerElement = document.getElementById('header-placeholder');
    const footerElement = document.getElementById('footer-placeholder');

    if (headerElement) {
        headerElement.innerHTML = HEADER_HTML;
        setActiveNavLink();
    }

    if (footerElement) {
        footerElement.innerHTML = FOOTER_HTML;
    }
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navMap = {
        'index.html': 'home',
        'service.html': 'service',
        'process.html': 'process',
        'about.html': 'about'
    };

    const activeKey = navMap[currentPage];
    if (activeKey) {
        const links = document.querySelectorAll(`[data-nav="${activeKey}"]`);
        links.forEach(link => {
            link.classList.remove('text-slate-500');
            link.classList.add('text-primary');
        });
    }
}

// Reveal on Scroll Logic
function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
    initReveal();
});
