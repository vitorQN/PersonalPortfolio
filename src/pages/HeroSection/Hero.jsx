import profilebg from '../../assets/profilebg.png';
import './Hero.css';
import { useTranslation } from 'react-i18next';
import java from '../../assets/java.png'

import ufrb from '../../assets/UFRBIcon.svg'
import dev from '../../assets/devIcon.svg'

function Hero() {

    const { t } = useTranslation();

    return (
        <section className="hero">
            <div className="hero-container">
                {/* Left: Text */}
                <div className="hero-grid"></div>
                <div className="hero-text">
                    <div className="badge">{t("hero.badge")}</div>

                    <h1 className="hero-title">
                        {t("hero.title")} <span className="highlight">Vitor Queiroz</span>
                    </h1>

                    <p className="hero-subtitle">
                        {t("hero.subtitle")}
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn primary">{t("hero.projectsButton")}</a>
                        <a href="https://github.com/vitorQN" target="_blank" className="btn secondary">
                            {t("common.github")} &rarr;
                        </a>
                    </div>
                </div>

                {/* Right: Profile Photo */}
                <div className="hero-image">
                    <div className="image-frame">
                        <img
                            src={profilebg}
                            alt={t("hero.profileAlt")}
                            className="profile-inside"
                        />
                        <div className="hero-grid"></div>
                    </div>
                    <img
                        src={profilebg}
                        alt={t("hero.profileAlt")}
                        className="profile-outside"
                    />

                    {/* Optional floating cards */}
                    <img src={java} alt="" className="card card-1"/>
                    <img src={ufrb} alt="" className="card card-2"/>
                    <img src={dev} alt="" className="card card-3"/>
                   
                </div>
            </div>
        </section>
    );
}

export default Hero;
