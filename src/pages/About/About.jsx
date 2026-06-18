import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';
import badge1 from '../../assets/IFBAicon.svg';
import badge2 from '../../assets/devIcon.svg';
import badge3 from '../../assets/MachiningIcon.svg';

function About() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const badges = section.querySelectorAll('.badge-deco');

          if (entry.isIntersecting) {
            badges.forEach((badge, i) => {
              setTimeout(() => {
                badge.classList.add('badge-deco--visible');
              }, i * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section" ref={sectionRef}>

      <img src={badge1} className="badge-deco badge-deco--tl" alt="" aria-hidden="true" />
      <img src={badge2} className="badge-deco badge-deco--tr" alt="" aria-hidden="true" />
      <img src={badge3} className="badge-deco badge-deco--br" alt="" aria-hidden="true" />

      <h2>{t("about.title")}</h2>
      <div className="about-grid"></div>
      <p className="about-text">
        {t("about.description")}
      </p>

    </section>
  );
}

export default About;
