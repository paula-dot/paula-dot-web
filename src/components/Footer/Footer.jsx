import './Footer.css'

export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Paul Akelo. All rights reserved.</p>

                <ul className="social-links" aria-label="Social Links">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/paul-akelo-377577291"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile (opens in new tab)"
                            title="LinkedIn — Paul Akelo"
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.65-1.24 2.24-2.54 4.6-2.54 4.92 0 5.8 3.24 5.8 7.44V24h-5V15.5c0-2.02-.04-4.62-2.82-4.62-2.82 0-3.25 2.2-3.25 4.46V24h-5V8z" />
                            </svg>
                            <span className="sr-only">LinkedIn</span>
                        </a>

                    </li>
                    <li>
                        <a
                            href="https://github.com/paula-dot"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub (opens in new tab)"
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.28 3.438 9.75 8.205 11.33.6.11.82-.26.82-.58 0-.29-.01-1.05-.016-2.06-3.338.73-4.042-1.61-4.042-1.61-.546-1.38-1.333-1.75-1.333-1.75-1.09-.74.082-.72.082-.72 1.205.085 1.84 1.24 1.84 1.24 1.07 1.84 2.807 1.31 3.49 1 .108-.78.42-1.31.762-1.61-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.528.117-3.18 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0112 6.844c1.02.005 2.045.138 3.003.405 2.29-1.55 3.297-1.23 3.297-1.23.654 1.653.243 2.88.12 3.183.77.84 1.233 1.92 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.432.372.816 1.102.816 2.222 0 1.606-.015 2.9-.015 3.29 0 .32.216.694.825.576C20.565 22.246 24 17.78 24 12.5 24 5.87 18.627.5 12 .5z" />
                            </svg>
                            <span className="sr-only">GitHub</span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}