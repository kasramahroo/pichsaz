function convertToPersianDigits(value) {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    return String(value).replace(/\d/g, (digit) => persianDigits[digit]);
}

function convertPageNumbersToPersian() {
    const textNodes = [];
    const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            const parent = node.parentElement;
            if (!node.nodeValue.trim() || parent?.closest("script, style, textarea, select, option")) {
                return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
        },
    });

    while (textWalker.nextNode()) {
        textNodes.push(textWalker.currentNode);
    }

    textNodes.forEach((node) => {
        node.nodeValue = convertToPersianDigits(node.nodeValue);
    });
}

window.addEventListener("load", convertPageNumbersToPersian);

const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("#mobile-menu");
const menuCloseControls = document.querySelectorAll("[data-menu-close]");

function setMobileMenuState(isOpen) {
    mobileMenu.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("mobile-menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
    mobileMenu.inert = !isOpen;
}

menuToggle.addEventListener("click", () => setMobileMenuState(true));
menuCloseControls.forEach((control) => control.addEventListener("click", () => setMobileMenuState(false)));
mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMobileMenuState(false)));

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMobileMenuState(false);
});

if (window.gsap && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const heroTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
    });

    heroTimeline
        .from(".hero-section-image", { duration: 1.1, autoAlpha: 0, scale: 1.035 })
        .from(".hero-section-logo-container", { duration: 0.7, x: -230 }, "-=0.55")
        .from(".hero-text h1", { duration: 0.65, autoAlpha: 0, y: 42 }, "-=0.25")
        .from(".hero-text p", { duration: 0.7, autoAlpha: 0, y: 28 }, "-=0.4")
        .from(".hero-actions-link", { duration: 0.5, autoAlpha: 0, y: 22, stagger: 0.12 }, "-=0.45");

    if (window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);

        const addScrollAnimation = (trigger, targets, options = {}) => {
            gsap.from(targets, {
                autoAlpha: 0,
                y: 36,
                duration: 0.7,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger,
                    start: "40% bottom",
                    once: true,
                },
                ...options,
            });
        };

        addScrollAnimation(".about-section", ".about-section .about-item", { y: 48, stagger: 0.12 });
        addScrollAnimation(".about-section", ".about-section > span:nth-child(2) > *", { y: 28 });
        addScrollAnimation(".products-section", ".products-section > p", { y: 42 });
        gsap.utils.toArray(".products-section .product").forEach((product) => {
            gsap.from(product, {
                autoAlpha: 0,
                y: 42,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: product,
                    start: "40% bottom",
                    once: true,
                },
            });
        });
        addScrollAnimation(".partners-section", ".partners-section > p", { y: 28 });
        gsap.timeline({
            scrollTrigger: {
                trigger: ".partners-section",
                start: "60% bottom",
                once: true,
            },
        })
            .from(".partners-section .cooperator", {
                autoAlpha: 0,
                scaleX: 0,
                transformOrigin: "right center",
                duration: 0.65,
                stagger: 0.12,
                ease: "power3.out",
            })
            .from(".partners-section .cooperator-text", {
                autoAlpha: 0,
                x: 12,
                duration: 0.35,
                stagger: 0.08,
                ease: "power2.out",
            });
        addScrollAnimation(".contact-section", ".contact-section > p, .contact-section .social-link", { y: 35, stagger: 0.12 });
        addScrollAnimation(".footer", ".footer-intro, .footer-links, .footer-contact, .footer-form", { y: 30, stagger: 0.12 });
    }
}
