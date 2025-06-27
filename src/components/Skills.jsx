import { useState, useEffect } from "react";

const Skills = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ["programming", "tools", "database"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 3000); // 3 detik per bagian
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skill" className="skill-section wide-section">
      <div className="section-heading">
        <div className="section-title">
          <h2>MY</h2>
          <h2>SKILL</h2>
        </div>
        <div className="heading-line"></div>
      </div>

      <div className="container">
        <div className="skill-single">
          {activeSection === 0 && (
            <div className="fade-in-out">
              <h4 className="center-text">Programming Language and Framework</h4>
              <div className="skill-icons center-icons">
                <img src="/src/assets/html.png" alt="HTML" />
                <img src="/src/assets/css.png" alt="CSS" />
                <img src="/src/assets/laravel.png" alt="Laravel" />
                <img src="/src/assets/js.png" alt="JavaScript" />
                <img src="/src/assets/java.png" alt="Java" />
                <img src="/src/assets/flutter.png" alt="Flutter" />
                <img src="/src/assets/vue.png" alt="Vue" />
                <img src="/src/assets/ardu.png" alt="Arduino" />
                <img src="/src/assets/boot.png" alt="Bootstrap" />
                <img src="/src/assets/php.png" alt="PHP" />
                <img src="/src/assets/c.png" alt="C" />
                <img src="/src/assets/c++.png" alt="C++" />
              </div>
            </div>
          )}

          {activeSection === 1 && (
            <div className="fade-in-out">
              <h4 className="center-text">Tools</h4>
              <div className="skill-icons center-icons">
                <img src="/src/assets/vscode.png" alt="VSCode" />
                <img src="/src/assets/github.png" alt="GitHub" />
                <img src="/src/assets/source.png" alt="SourceTree" />
                <img src="/src/assets/figma.png" alt="Figma" />
                <img src="/src/assets/post.png" alt="PostMan" />
              </div>
            </div>
          )}

          {activeSection === 2 && (
            <div className="fade-in-out">
              <h4 className="center-text">Database</h4>
              <div className="skill-icons center-icons">
                <img src="/src/assets/sql2.png" alt="MySQL" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
