/**
 * Athonics — Shared JavaScript
 * Mobile menu, scroll animations, progress bar, floating CTA, stats counter
 */

(function () {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mark body so CSS knows JS is active (progressive enhancement)
    document.body.classList.add('js-loaded');

    // ── Mobile Menu Toggle ──────────────────────────────────────────────
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            const expanded = menuToggle.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', String(expanded));
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('nav')) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // ── Nav Background on Scroll ────────────────────────────────────────
    const nav = document.querySelector('nav');
    if (nav) {
        const onNavScroll = () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', onNavScroll, { passive: true });
        onNavScroll();
    }

    // ── Scroll Progress Bar ─────────────────────────────────────────────
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            progressBar.style.width = progress + '%';
        }, { passive: true });
    }

    // ── Scroll Reveal Animations ────────────────────────────────────────
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
        if (prefersReducedMotion) {
            // Show everything immediately
            revealElements.forEach(el => el.classList.add('revealed'));
        } else {
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -40px 0px'
            });

            revealElements.forEach(el => revealObserver.observe(el));
        }
    }

    // ── Floating CTA Show/Hide on Scroll ────────────────────────────────
    const floatingCta = document.querySelector('.floating-cta');
    if (floatingCta) {
        let lastScroll = 0;
        const showThreshold = 300;

        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            if (currentScroll > showThreshold) {
                floatingCta.classList.add('visible');
            } else {
                floatingCta.classList.remove('visible');
            }
            lastScroll = currentScroll;
        }, { passive: true });
    }

    // ── Smooth Scroll for Anchor Links ──────────────────────────────────
    if (!prefersReducedMotion) {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    // ── Stats Counter Animation ─────────────────────────────────────────
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');

    if (statNumbers.length > 0) {
        const animateCounter = (el) => {
            const target = parseInt(el.getAttribute('data-target'), 10);
            if (isNaN(target)) return;

            if (prefersReducedMotion) {
                el.textContent = target;
                return;
            }

            const duration = 2000;
            const startTime = performance.now();

            const step = (now) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease-out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.round(target * eased);
                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    el.textContent = target;
                }
            };

            requestAnimationFrame(step);
        };

        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        statNumbers.forEach(el => statsObserver.observe(el));
    }

})();
