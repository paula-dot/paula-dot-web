import { NavLink } from "react-router-dom";
export function Header() {
    return (
        <header>
            <div className="container">
                <nav className="navbar">
                    <h1 className="logo">
                        <NavLink to="/" className="brand" >
                            <img src="/assets/images/paula_dot_icon.png" alt="Paula-dot logo"/>
                        </NavLink>
                    </h1>
                    <ul className="nav-links">
                        <li><NavLink to="/" className="active">Home</NavLink></li>
                        <li><NavLink to="/about.html">About</NavLink></li>
                        <li><NavLink to="/projects.html">Projects</NavLink></li>
                        <li><NavLink to="/contact.html">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}