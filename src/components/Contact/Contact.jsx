import { useTranslation } from 'react-i18next';
import './Contact.css';

function Contact() {
    const { t } = useTranslation();

    return (
        <section id="contact" className="section contact">
            <h2>{t("contact.title")}</h2>
            <p className="contact-text">{t("contact.description")}</p>
            <a href="mailto:vitor.qn2004@gmail.com" className="contact-btn">
                {t("contact.button")}
            </a>
        </section>
    )
}

export default Contact;
