const About = () => {
  return (
    <section id="about" className="about-section wide-section">
      <div className="about-container">
        <img src="/src/assets/Foto.jpg" alt="Carlos" className="about-img" />
        <div className="about-text">
          <h2>HELLO</h2>
          <p>
            My name is Carlos Immanuel Tampubolon, a programmer specializing in Frontend Development. I have a strong interest in building responsive, clean, and user-friendly web interfaces. Familiar with C++, Vue, Laravel, Bootstrap, Java, and others. I always strive to keep up with technological advancements to continuously improve the quality of my work.
          </p>
          <div className="contact-grid">
            <div className="contact-item">
              <img src="/images/Email.png" alt="email" className="icon" />
              <span>carlosnuel1208@gmail.com</span>
            </div>
            <div className="contact-item">
              <img src="/src/assets/WA.png" alt="phone" className="icon" />
              <span>08569072219</span>
            </div>
            <div className="contact-item">
              <img src="/src/assets/Insta.png" alt="Instagram" className="icon" />
              <span>nuelll1208</span>
            </div>
            <div className="contact-item">
              <img src="/src/assets/Git.png" alt="GitHub" className="icon" />
              <span>CarlosImmanuel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;