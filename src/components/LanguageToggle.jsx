import { useEffect, useRef, useState } from 'react';

const languages = [
  { code: 'en', shortLabel: 'EN', label: 'English' },
  { code: 'pt', shortLabel: 'PT-BR', label: 'Português BR' },
];

function LanguageToggle({ language, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const activeLanguage = languages.find((item) => item.code === language) ?? languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const selectLanguage = (nextLanguage) => {
    onChange(nextLanguage);
    setIsOpen(false);
  };

  return (
    <div className="language-menu" ref={dropdownRef}>
      <button
        className="language-menu-trigger"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={`Current language: ${activeLanguage.label}`}
      >
        <svg
          className="language-menu-icon"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M2 12h20"></path>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span className={`language-menu-chevron ${isOpen ? 'open' : ''}`}>⌄</span>
      </button>

      <div className={`language-menu-options ${isOpen ? 'open' : ''}`} role="menu">
        {languages.map((item) => (
          <button
            className={item.code === language ? 'active' : ''}
            key={item.code}
            type="button"
            onClick={() => selectLanguage(item.code)}
            role="menuitem"
          >
            <span>{item.label}</span>
            <span>{item.shortLabel}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default LanguageToggle;