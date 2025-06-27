const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault(); // Biar ga reload

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mgvyraqk", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      alert("Pesan Terkirim!");
      form.reset(); // Reset inputnya
    } else {
      alert("Gagal mengirim pesan. Coba lagi ya.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-heading">
        <h2>CONTACT</h2>
        <div className="heading-line"></div>
      </div>

      <div className="contact-form-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="phone" placeholder="Phone" />
          <input type="text" name="name" placeholder="Name" required />
          <textarea name="message" rows="5" placeholder="Message" required />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
