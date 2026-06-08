import './HeroOverlay.css';

function HeroOverlay() {
    return (
        <section className="hero-overlay">
            <div className="hero-bg"></div>

            <div className="hero-content-overlay">
                <div className="hero-badge">Open to new opportunities</div>

                <h1 className="hero-title-overlay">
                    Coding like a <span className="highlight">Coder</span>
                </h1>

                <p className="hero-subtitle-overlay">
                    Fullstack Developer
                </p>

                <div className="hero-buttons-overlay">
                    <a href="https://github.com/vitorQN" target="_blank" className="btn secondary">
                        GitHub →
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HeroOverlay;