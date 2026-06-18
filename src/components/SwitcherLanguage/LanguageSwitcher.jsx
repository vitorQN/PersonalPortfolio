import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";
import './LanguageSwitcher.css'

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="language-menu">
      <button
        className="language-button"
        onClick={() => setOpen(!open)}
        aria-label={t("language.select")}
      >
        <IoLanguage />
      </button>

      {open && (
        <div className="language-dropdown">
          <button onClick={() => changeLanguage("en")}>
            {t("language.english")}
          </button>

          <button onClick={() => changeLanguage("pt")}>
            {t("language.portuguese")}
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
