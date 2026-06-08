import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
            <div className="footer-left">
                © 2026 Vitor Queiroz • Built with React & Vite
            </div>
            <div className="footer-contact">
                <a href="mailto:vitor.qn2004@gmail.com">Email</a>
                <a href="https://github.com/vitorQN" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/vitor-queiroz-nunes-18319b278/" target="_blank">LinkedIn</a>
            </div>
            </div>
        </footer>
    )

}

export default Footer;