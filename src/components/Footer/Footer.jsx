import './Footer.css';
import logo from '../../assets/logo.svg'

import {
    FaInstagram,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";




function Footer() {
    return (
        <footer
            className="footer"
        >
            <div className="footer-bg"></div>
            <div className="footer-main">
                <div className="footer-brand">
                    <img src={logo} alt="" />

                    <p>
                        Full Stack Developer focused on building
                        modern and scalable digital experiences.
                    </p>
                </div>

                <div className="footer-column">
                    <h4>INSTITUTIONAL</h4>

                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="footer-column">
                    <h4>CONTACT</h4>

                    <a href="mailto:vitor.qn2004@gmail.com">Email</a>
                    <a
                        href="https://github.com/vitorQN"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vitor-queiroz-nunes-18319b278/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>

                <div className="footer-newsletter">
                    <h4>GET IN TOUCH</h4>

                    <div className="newsletter-input">
                        <input
                            type="email"
                            placeholder="Your e-mail"
                        />
                        <button>→</button>
                    </div>

                    <div className="social-icons">
                        <a
                            href="https://www.instagram.com/vitor_talvez/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://github.com/vitorQN"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/vitor-queiroz-nunes-18319b278/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                © 2026 Vitor Queiroz. All rights reserved.
            </div>
        </footer>
    )

}

export default Footer;