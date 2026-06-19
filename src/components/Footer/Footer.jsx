import { useTranslation } from 'react-i18next';
import './Footer.css';
import logo from '../../assets/logo.svg'

import {
    FaInstagram,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer
            className="footer"
        >
            <div className="footer-bg">
                <div className="grid"></div>
                <div className="footer-main">
                    <div className="footer-brand">
                        <img src={logo} alt="" />

                        <p>
                            {t("footer.description")}
                        </p>
                    </div>

                    <div className="footer-column">
                        <h4>{t("footer.institutional")}</h4>

                        <a href="#about">{t("nav.about")}</a>
                        <a href="#skills">{t("nav.skills")}</a>
                        <a href="#projects">{t("nav.projects")}</a>
                        <a href="#contact">{t("nav.contact")}</a>
                    </div>

                    <div className="footer-column">
                        <h4>{t("footer.contact")}</h4>

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
                        <h4>{t("footer.getInTouch")}</h4>

                        <div className="newsletter-input">
                            <input
                                type="email"
                                placeholder={t("footer.emailPlaceholder")}
                            />
                            <button>&rarr;</button>
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
                &copy; 2026 Vitor Queiroz. {t("footer.rights")}
               </div>
            </div>

            
        </footer>
    )

}

export default Footer;
