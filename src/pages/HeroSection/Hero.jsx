import profilebg from '../../assets/profilebg.png';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">
                {/* Left: Text */}
                <div className="hero-grid"></div>
                <div className="hero-text">
                    <div className="badge">Open to new opportunities</div>

                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Vitor Queiroz</span>
                    </h1>

                    <p className="hero-subtitle">
                        Fullstack Developer crafting fast, safe, and delightful web experiences.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn primary">View My Projects</a>
                        <a href="https://github.com/vitorQN" target="_blank" className="btn secondary">
                            GitHub →
                        </a>
                    </div>
                </div>

                {/* Right: Profile Photo */}
                <div className="hero-image">
                    <div className="image-frame">
                        <img
                            src={profilebg}
                            alt="Profile"
                            className="profile-inside"
                        />
                    </div>
                    <img
                            src={profilebg}
                            alt="Profile"
                            className="profile-outside"
                        />

                    {/* Optional floating cards */}
                    <div className="card card-1">Full Stack</div>
                    <div className="card card-2">Java</div>
                    <div className="card card-3">React</div>
                </div>
            </div>
        </section>
    );
}

export default Hero;