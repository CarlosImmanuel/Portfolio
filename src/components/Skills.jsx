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
                <img src="/images/html.png" alt="HTML" />
                <img src="/images/css.png" alt="CSS" />
                <img src="/images/laravel.png" alt="Laravel" />
                <img src="/images/js.png" alt="JavaScript" />
                <img src="/images/java.png" alt="Java" />
                <img src="/images/flutter.png" alt="Flutter" />
                <img src="/images/vue.png" alt="Vue" />
                <img src="/images/ardu.png" alt="Arduino" />
                <img src="/images/boot.png" alt="Bootstrap" />
                <img src="/images/php.png" alt="PHP" />
                <img src="/images/c.png" alt="C" />
                <img src="/images/c++.png" alt="C++" />
              </div>
            </div>
          )}

          {activeSection === 1 && (
            <div className="fade-in-out">
              <h4 className="center-text">Tools</h4>
              <div className="skill-icons center-icons">
                <img src="/images/vscode.png" alt="VSCode" />
                <img src="/images/github.png" alt="GitHub" />
                <img src="/images/source.png" alt="SourceTree" />
                <img src="/images/figma.png" alt="Figma" />
                <img src="/images/post.png" alt="PostMan" />
              </div>
            </div>
          )}

          {activeSection === 2 && (
            <div className="fade-in-out">
              <h4 className="center-text">Database</h4>
              <div className="skill-icons center-icons">
                <img src="/images/sql2.png" alt="MySQL" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
