import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <span>Vitor Queiroz</span>
                </div>

                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </div>

                <a href="#contact" className="cta-button">Let's Talk</a>
            </div>
        </nav>
    );
}

export default NavBar;