import React, { useState, useEffect, useRef } from 'react';
import './Header.css'
import useActiveSection from '../../hooks/useActiveSection';

export function Header() {
    const NAV_ITEMS = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    // small id map for alternative anchors (letsAbout -> about etc.)
    const ID_FALLBACK = {
        letsAbout: 'about'
    };

    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useActiveSection(NAV_ITEMS.map(i => i.id), { idFallback: ID_FALLBACK });
    const menuButtonRef = useRef(null);

    useEffect(() => {
        // set CSS variable --header-offset to the header height so sections with scroll-margin-top align correctly
        const setHeaderOffset = () => {
            const headerEl = document.querySelector('header');
            const height = headerEl ? Math.round(headerEl.getBoundingClientRect().height) : 72;
            document.documentElement.style.setProperty('--header-offset', `${height}px`);
            if (import.meta.env.DEV) console.log('[Header] set --header-offset to', height);
        };

        // run after a short delay to allow fonts/layout to stabilize
        const t = setTimeout(setHeaderOffset, 60);
        window.addEventListener('resize', setHeaderOffset);
        return () => {
            clearTimeout(t);
            window.removeEventListener('resize', setHeaderOffset);
        };
    }, []);

    useEffect(() => {
        // Close menu on escape
        const onKey = (e) => {
            if (e.key === 'Escape' && open) setOpen(false);
        };

        // Close menu on resize (desktop)
        const onResize = () => {
            if (window.innerWidth > 768 && open) setOpen(false);
        };

        window.addEventListener('keydown', onKey);
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('resize', onResize);
        };
    }, [open]);

    // toggle a `scrolled` state when the page is scrolled past a small threshold
    useEffect(() => {
        let ticking = false;
        const threshold = 24;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const y = window.scrollY || window.pageYOffset;
                setScrolled(y > threshold);
                ticking = false;
            });
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        // set initial value
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // useActiveSection hook handles observing and updating `active`

    const scrollToSection = (id) => {
        // try direct id, then fallback map if present
        let targetId = id;
        let el = document.getElementById(targetId);
        if (!el && ID_FALLBACK[id]) {
            targetId = ID_FALLBACK[id];
            el = document.getElementById(targetId);
        }

        if (!el) {
            if (import.meta.env.DEV) console.log('[Header] scrollToSection: target element not found for', id);
            return;
        }

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (import.meta.env.DEV) console.log('[Header] scrollToSection ->', targetId, 'prefersReduced=', prefersReduced);

        // Wait two frames to allow layout to stabilize, then use scrollIntoView which respects CSS scroll-margin-top
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                try {
                    el.scrollIntoView({ block: 'start', behavior: prefersReduced ? 'auto' : 'smooth' });
                } catch (err) {
                    // fallback to window.scrollTo if scrollIntoView fails
                    const headerEl = document.querySelector('header');
                    const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 0;
                    const top = Math.round(el.getBoundingClientRect().top + window.scrollY - headerHeight);
                    if (prefersReduced) window.scrollTo(0, top);
                    else window.scrollTo({ top, behavior: 'smooth' });
                }

                // update pathname without creating an extra history entry (keep browser navigation working)
                try {
                    const newPath = targetId === 'hero' ? '/' : `/${targetId}`;
                    history.replaceState(null, '', newPath);
                } catch (e) {
                    // ignore — not critical
                }

                setActive(targetId);

                // Close mobile menu and restore focus
                setOpen(false);
                if (menuButtonRef.current) menuButtonRef.current.focus();
            });
        });
    };

    // Use client-side navigation for clicks: preventDefault, pushState, and scroll using SPA behaviour
    const onNavClick = (e, id) => {
        // ensure SPA navigation (no full page reload)
        if (e && typeof e.preventDefault === 'function') e.preventDefault();
        setOpen(false);
        setActive(id);

        // update history with a new entry so back/forward behaves naturally
        try {
            const path = id === 'hero' ? '/' : `/${id}`;
            history.pushState(null, '', path);
        } catch (err) {
            // ignore
        }

        // scroll to target section
        scrollToSection(id);
    };

    // Handle deep links on initial load and popstate (history navigation)
    useEffect(() => {
        const tryDeepLink = () => {
            // prefer hash if present (still supported)
            const hash = window.location.hash;
            if (hash) {
                const id = hash.replace('#', '');
                if (id) {
                    const el = document.getElementById(id) || document.getElementById(ID_FALLBACK[id]);
                    if (el) scrollToSection(id);
                    return;
                }
            }

            // else check pathname (/projects -> projects)
            const path = window.location.pathname;
            if (path && path !== '/') {
                const id = path.replace(/^\//, '');
                const el = document.getElementById(id) || document.getElementById(ID_FALLBACK[id]);
                if (el) scrollToSection(id);
            }
        };

        // run once on mount
        tryDeepLink();

        const onPop = () => {
            const path = window.location.pathname;
            if (path === '/' || path === '') {
                scrollToSection('hero');
                return;
            }
            const id = path.replace(/^\//, '');
            if (id) scrollToSection(id);
        };

        window.addEventListener('popstate', onPop);
        return () => window.removeEventListener('popstate', onPop);
    }, []);

    return (
        <header role="banner" className={`${open ? 'open' : ''}${scrolled ? ' scrolled' : ''}`}>
            <a className="skip-link" href="#main">Skip to content</a>

            <div className="container">
                <nav className="navbar" role="navigation" aria-label="Primary">
                    {/* Visually hidden brand for accessibility; logo removed per request */}
                    <a href="/" className="brand sr-only" onClick={(e) => onNavClick(e, 'hero')}>Paul Akelo</a>

                    <button
                        ref={menuButtonRef}
                        className={`nav-toggle ${open ? 'is-open' : ''}`}
                        aria-controls="primary-navigation"
                        aria-expanded={open}
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        onClick={() => setOpen(prev => !prev)}
                    >
                        <span className="hamburger" aria-hidden="true" />
                    </button>

                    <ul id="primary-navigation" className={`nav-links ${open ? 'open' : ''}`}>
                        {NAV_ITEMS.map(item => (
                            <li key={item.id}>
                                <a
                                    href={item.id === 'hero' ? '/' : `/${item.id}`}
                                    onClick={(e) => onNavClick(e, item.id)}
                                    className={active === item.id ? 'active' : ''}
                                    aria-current={active === item.id ? 'page' : undefined}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}