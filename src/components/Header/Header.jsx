import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import './Header.css'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('mobile-menu-open');
        } else {
            document.body.classList.remove('mobile-menu-open');
        }

        // Cleanup on unmount
        return () => {
            document.body.classList.remove('mobile-menu-open');
        };
    }, [isMenuOpen]);

    return (
        <header>
            <div className="container">
                <nav className="navbar">
                    <h1 className="logo">
                        <NavLink to="/" className="brand" onClick={closeMenu}>
                            {/**
                             * Use Vite's BASE_URL so the logo works regardless of deploy base path
                             * (e.g., Vercel previews or custom base). The file lives under public/assets.
                             */}
                            <img src={`${import.meta.env.BASE_URL}assets/paula_dot_icon.png`} alt="Paula-dot logo"/>
                        </NavLink>
                    </h1>

                    {/* Mobile menu toggle button */}
                    <button
                        className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>

                    {/* Backdrop overlay for mobile menu */}
                    {isMenuOpen && (
                        <div
                            className="mobile-menu-backdrop"
                            onClick={closeMenu}
                            aria-hidden="true"
                        />
                    )}

                    <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
                        <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
                        <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
                        <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
                        <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}