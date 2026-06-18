import { useTranslation } from 'react-i18next';
import './HeroOverlay.css';

function HeroOverlay() {
    const { t } = useTranslation();

    return (
        <section className="hero-overlay">
            <div className="hero-bg"></div>

            <div className="hero-content-overlay">
                <div className="hero-badge">{t("heroOverlay.badge")}</div>

                <h1 className="hero-title-overlay">
                    {t("heroOverlay.title")} <span className="highlight">{t("heroOverlay.highlight")}</span>
                </h1>

                <p className="hero-subtitle-overlay">
                    {t("heroOverlay.subtitle")}
                </p>

                <div className="hero-buttons-overlay">
                    <a href="https://github.com/vitorQN" target="_blank" className="btn secondary">
                        {t("common.github")} &rarr;
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HeroOverlay;
