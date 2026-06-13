import { useEffect, useRef } from 'react';
import './About.css';
import badge1 from '../../assets/IFBAicon.svg';
import badge2 from '../../assets/devIcon.svg';
import badge3 from '../../assets/MachiningIcon.svg';

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const badges = section.querySelectorAll('.badge-deco');

          if (entry.isIntersecting) {
            // scrolling DOWN — sticker slap in
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

      <h2>About Me</h2>
      <div className="about-grid"></div>
      <p className="about-text">
        I am a Fullstack Developer with experience building applications using Java, Spring, and JavaScript.
        I focus on creating scalable solutions, writing clean code, and following best development practices.
        On the backend, I work with Java and Spring Boot, developing REST APIs and well-structured applications
        with an emphasis on performance and solid architecture. On the frontend, I use JavaScript to build
        dynamic and functional user interfaces.
      </p>

    </section>
  );
}

export default About;