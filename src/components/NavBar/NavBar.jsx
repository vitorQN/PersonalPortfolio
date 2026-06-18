import { useTranslation } from 'react-i18next';
import './NavBar.css';
import logo from '../../assets/logo.svg';
import LanguageSwitcher from '../SwitcherLanguage/LanguageSwitcher';

function NavBar() {
    const { t } = useTranslation();

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <img src={logo} alt=" logo" />
                </div>

                <div className="nav-links">
                    <a href="#about">{t("nav.about")}</a>
                    <a href="#projects">{t("nav.projects")}</a>
                    <a href="#skills">{t("nav.skills")}</a>
                    <a href="#contact">{t("nav.contact")}</a>
                </div>
                <LanguageSwitcher />
                <a href="#contact" className="cta-button">{t("nav.cta")}</a>
            </div>
        </nav>
    );
}

export default NavBar;
