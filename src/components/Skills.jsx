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
                <img src="/images/HTML.png" alt="HTML" />
                <img src="/images/CSS.png" alt="CSS" />
                <img src="/images/Laravel.png" alt="Laravel" />
                <img src="/images/JS.png" alt="JavaScript" />
                <img src="/images/Java.png" alt="Java" />
                <img src="/images/Flutter.png" alt="Flutter" />
                <img src="/images/Vue.png" alt="Vue" />
                <img src="/images/Ardu.png" alt="Arduino" />
                <img src="/images/Boot.png" alt="Bootstrap" />
                <img src="/images/PHP.png" alt="PHP" />
                <img src="/images/C.png" alt="C" />
                <img src="/images/C++.png" alt="C++" />
              </div>
            </div>
          )}

          {activeSection === 1 && (
            <div className="fade-in-out">
              <h4 className="center-text">Tools</h4>
              <div className="skill-icons center-icons">
                <img src="/images/vscode.png" alt="VSCode" />
                <img src="/images/github.png" alt="GitHub" />
                <img src="/images/Source.png" alt="SourceTree" />
                <img src="/images/Figma.png" alt="Figma" />
                <img src="/images/Post.png" alt="PostMan" />
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
