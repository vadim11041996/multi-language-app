const About = ({ language, switchLanguage }) => {
    const { title, content } = require(`../${language}/translations.json`).about;
  
    return (
      <div className="container">
        <header>
          <button onClick={() => switchLanguage('en')}>English</button>
          <button onClick={() => switchLanguage('ro')}>Română</button>
        </header>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    );
  };
  
  export default About;
  