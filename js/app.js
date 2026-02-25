// Tailwind Configuration
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#135bec",
                "background-light": "#f6f6f8",
                "background-dark": "#101622",
                "neutral-dark": "#1c1f27",
                "accent-dark": "#282e39"
            },
            fontFamily: {
                display: ["Manrope", "sans-serif"]
            }
        }
    }
}

// Component Constants (HTML as strings to bypass local fetch CORS issues)
const HEADER_HTML = `
<div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <a href="index.html" class="text-xl font-black tracking-tight">
        <span class="text-primary">NXT</span> web studio
    </a>

    <nav class="hidden md:flex gap-10 font-medium">
        <a href="index.html" class="nav-link text-slate-600 dark:text-slate-400 hover:text-primary transition" data-nav="home">홈</a>
        <a href="service.html" class="nav-link text-slate-600 dark:text-slate-400 hover:text-primary transition" data-nav="service">서비스</a>
        <a href="process.html" class="nav-link text-slate-600 dark:text-slate-400 hover:text-primary transition" data-nav="process">프로세스</a>
        <a href="about.html" class="nav-link text-slate-600 dark:text-slate-400 hover:text-primary transition" data-nav="about">About Us</a>
    </nav>

    <a href="contact.html"
        class="bg-primary hover:bg-blue-700 transition text-white px-6 py-2 rounded-lg font-bold shadow">
        문의하기
    </a>
</div>
`;

const FOOTER_HTML = `
<div class="font-bold text-lg mb-2">
    NXT web studio
</div>

<div class="flex justify-center gap-6 text-sm text-slate-500 mb-4">
    <a href="terms.html" class="hover:text-primary transition">이용약관</a>
    <a href="privacy.html" class="hover:text-primary transition">개인정보처리방침</a>
</div>

<div class="text-sm text-slate-500">
    © 2026 NXT web studio. All rights reserved.
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
            link.classList.remove('text-slate-600', 'dark:text-slate-400');
            link.classList.add('text-primary', 'font-semibold');
        });
    }
}

document.addEventListener('DOMContentLoaded', loadComponents);
