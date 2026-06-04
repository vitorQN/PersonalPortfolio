import { useEffect ,useState } from 'react'
import profileImage from './assets/profileImage.png';
import LanguageToggle from './components/LanguageToggle.jsx';

const navItems = [
  { href: '#about', key: 'about' },
  { href: '#skills', key: 'skills' },
  { href: '#projects', key: 'projects' },
  { href: '#contact', key: 'contact' },
];

const socialLinks = [
  { href: 'mailto:vitor.qn2004@gmail.com', label: 'Email' },
  { href: 'https://github.com/vitorQN', label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/vitor-queiroz-nunes-18319b278/',
    label: 'LinkedIn',
  },
];

const translations = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    menuLabel: 'Toggle navigation menu',
    backToTop: 'Back to top',
    theme: {
      light: 'Light theme',
      dark: 'Dark theme',
    },
    hero: {
      greeting: "Hello, I'm",
      role: 'Fullstack Developer',
      description:
        'I build modern, scalable and high-performance applications using Java, Spring Boot and JavaScript.',
      cta: "Let's Talk",
    },
    about: {
      title: 'About Me',
      description:
        'Passionate Full Stack Developer dedicated to building high-quality digital experiences. Experienced in Java, Spring Boot, RESTful APIs, and modern frontend technologies, with a focus on creating scalable, efficient, and user-centered applications.',
    },
    skills: {
      title: 'Skills',
      items: [
        {
          title: 'Backend',
          description: 'Java, Spring Boot, REST APIs, Security',
        },
        {
          title: 'Frontend',
          description: 'JavaScript, HTML5, CSS3, Responsive Design',
        },
        {
          title: 'Tools',
          description: 'Git, GitHub, Docker, SQL',
        },
      ],
    },
    projects: {
      title: 'Projects',
      heading: 'Projects Coming Soon',
      description:
        "I'm currently working on exciting new projects. They will be available here very soon. Stay tuned!",
    },
    contact: {
      title: 'Contact',
      emailLabel: 'Email Vitor',
      githubLabel: 'Vitor on GitHub',
      linkedinLabel: 'Vitor on LinkedIn',
    },
    footer: {
      description:
        'Fullstack developer building clean, scalable web applications with Java, Spring Boot, and modern frontend tools.',
      explore: 'Explore',
      connect: 'Connect',
      copyright: '© 2026 Vitor Queiroz Nunes',
      role: 'Fullstack Developer',
    },
  },
  pt: {
    nav: {
      about: 'Sobre',
      skills: 'Habilidades',
      projects: 'Projetos',
      contact: 'Contato',
    },
    menuLabel: 'Alternar menu de navegação',
    backToTop: 'Voltar ao topo',
    theme: {
      light: 'Tema claro',
      dark: 'Tema escuro',
    },
    hero: {
      greeting: 'Olá, eu sou',
      role: 'Desenvolvedor Fullstack',
      description:
        'Desenvolvo aplicações modernas, escaláveis e de alta performance usando Java, Spring Boot e JavaScript.',
      cta: 'Vamos Conversar',
    },
    about: {
      title: 'Sobre Mim',
      description:
        'Desenvolvedor Full Stack apaixonado por criar experiências digitais de alta qualidade. Possuo experiência em Java, Spring Boot, APIs RESTful e tecnologias modernas de frontend, com foco no desenvolvimento de aplicações escaláveis, eficientes e centradas no usuário.',
    },
    skills: {
      title: 'Habilidades',
      items: [
        {
          title: 'Backend',
          description: 'Java, Spring Boot, APIs REST, Segurança',
        },
        {
          title: 'Frontend',
          description: 'JavaScript, HTML5, CSS3, Design Responsivo',
        },
        {
          title: 'Ferramentas',
          description: 'Git, GitHub, Docker, SQL',
        },
      ],
    },
    projects: {
      title: 'Projetos',
      heading: 'Projetos em Breve',
      description:
        'Estou trabalhando em novos projetos empolgantes. Eles estarão disponíveis aqui muito em breve. Fique ligado!',
    },
    contact: {
      title: 'Contato',
      emailLabel: 'Enviar email para Vitor',
      githubLabel: 'Vitor no GitHub',
      linkedinLabel: 'Vitor no LinkedIn',
    },
    footer: {
      description:
        'Desenvolvedor fullstack criando aplicações web limpas e escaláveis com Java, Spring Boot e ferramentas frontend modernas.',
      explore: 'Explorar',
      connect: 'Conectar',
      copyright: '© 2026 Vitor Queiroz Nunes',
      role: 'Desenvolvedor Fullstack',
    },
  },
};

function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const text = translations[language];
  const localizedNavItems = navItems.map((item) => ({
    ...item,
    label: text.nav[item.key],
  }));

  useEffect(() => {
    document.body.classList.toggle('light', isLightTheme);
  }, [isLightTheme]);

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [language]);

  return (
    <>
      <header>
        <h1>Vitor Queiroz Nunes</h1>
        <nav id="mobileNav" className={isMenuOpen ? 'active' : ''}>
          {localizedNavItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div
          className="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          role="button"
          tabIndex="0"
          aria-label={text.menuLabel}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              setIsMenuOpen((open) => !open);
            }
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="header-actions">
          <LanguageToggle language={language} onChange={setLanguage} />
          <button
            className="toggle-btn"
            onClick={() => setIsLightTheme((light) => !light)}
            aria-label={isLightTheme ? text.theme.light : text.theme.dark}
          >
            {isLightTheme ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <section className="hero reveal">
        <div className="hero-text">
          <h2>
            {text.hero.greeting} <span>Vitor</span>
            <br />
            {text.hero.role}
          </h2>
          <p>{text.hero.description}</p>
          <a href="#contact" className="btn">
            {text.hero.cta}
          </a>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Vitor Queiroz Nunes" />
        </div>
      </section>

      <section id="about" className="reveal">
        <h2 className="section-title">{text.about.title}</h2>
        <p>{text.about.description}</p>
      </section>

      <section id="skills" className="reveal">
        <h2 className="section-title">{text.skills.title}</h2>
        <div className="grid">
          {text.skills.items.map((skill, index) => (
            <div className="card reveal" key={`skill-${index}`}>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="reveal">
        <h2 className="section-title">{text.projects.title}</h2>
        <div className="grid">
          <div className="card reveal projects-card">
            <h3>🚀 {text.projects.heading}</h3>
            <p>{text.projects.description}</p>
          </div>
        </div>
      </section>

      <section id="contact" className="reveal">
        <h2 className="section-title">{text.contact.title}</h2>
        <div className="grid contact-grid">
          <a
            href="mailto:vitor.qn2004@gmail.com"
            className="card contact-btn"
            target="_blank"
            rel="noreferrer"
            aria-label={text.contact.emailLabel}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2"></rect>
              <polyline points="3 7 12 13 21 7"></polyline>
            </svg>
          </a>

          <a
            href="https://github.com/vitorQN"
            className="card contact-btn"
            target="_blank"
            rel="noreferrer"
            aria-label={text.contact.githubLabel}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#0ea5e9" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.95c.6.1.82-.26.82-.58v-2.2c-3.25.7-3.94-1.57-3.94-1.57-.53-1.36-1.3-1.72-1.3-1.72-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.2 1.8 1.2 1.05 1.8 2.75 1.28 3.42.98.1-.76.4-1.28.73-1.58-2.6-.3-5.33-1.3-5.33-5.8 0-1.28.46-2.32 1.2-3.14-.12-.3-.52-1.5.12-3.13 0 0 .98-.32 3.2 1.2a11.1 11.1 0 015.82 0c2.22-1.52 3.2-1.2 3.2-1.2.64 1.63.24 2.83.12 3.13.75.82 1.2 1.86 1.2 3.14 0 4.52-2.74 5.5-5.35 5.8.42.37.8 1.1.8 2.22v3.3c0 .32.22.7.83.58A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/vitor-queiroz-nunes-18319b278/"
            className="card contact-btn"
            target="_blank"
            rel="noreferrer"
            aria-label={text.contact.linkedinLabel}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#0ea5e9" aria-hidden="true">
              <path d="M4.98 3.5C4.98 5 3.88 6.1 2.5 6.1S0 5 0 3.5 1.1.9 2.5.9 4.98 2 4.98 3.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.05c.53-1 1.84-2.2 3.8-2.2 4.06 0 4.8 2.67 4.8 6.15V24h-4v-7.8c0-1.86-.03-4.26-2.6-4.26-2.6 0-3 2.03-3 4.13V24h-4V8z" />
            </svg>
          </a>
        </div>
      </section>

      <footer className="site-footer reveal">
        <div className="footer-shell">
          <div className="footer-brand">
            <a href="#" className="footer-logo" aria-label={text.backToTop}>
              Vitor
            </a>
            <p>{text.footer.description}</p>
          </div>

          <div className="footer-column">
            <h3>{text.footer.explore}</h3>
            <div className="footer-links">
              {localizedNavItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h3>{text.footer.connect}</h3>
            <div className="footer-links">
              {socialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{text.footer.copyright}</span>
          <span>{text.footer.role}</span>
        </div>
      </footer>
    </>
  );
}
export default App;
