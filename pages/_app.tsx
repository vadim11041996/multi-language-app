import { useEffect, useState } from 'react';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const switchLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return <Component {...pageProps} language={language} switchLanguage={switchLanguage} />;
};

export default MyApp;
