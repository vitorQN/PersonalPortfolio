import './NavBar.css';
import logo from '../../assets/logo.svg';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <img src={logo} alt=" logo" />
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