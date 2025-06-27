import { useState } from 'react';

const Projects = () => {
  const [selected, setSelected] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  const projectList = [
    {
      title: '1',
      icon: '1',
      images: ['/images/Berita4.png', '/images/Berita5.png', '/images/Berita1.png', '/images/Berita2.png', '/images/Berita3.png']
    },
    {
      title: '2',
      icon: '2',
      images: ['/images/buku1.png', '/images/buku2.png']
    },
  ];

  const handlePrev = () => {
    setPhotoIndex((prev) => (prev === 0 ? projectList[selected].images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setPhotoIndex((prev) => (prev === projectList[selected].images.length - 1 ? 0 : prev + 1));
  };

  const handleSelectProject = (index) => {
    setSelected(index);
    setPhotoIndex(0);
  };

  return (
    <section id="project" className="project-section wide-section">
      <div className="section-heading">
        <div className="heading-line"></div>
        <div className="section-title" style={{ alignItems: 'flex-end', textAlign: 'right' }}>
          <h2>MY</h2>
          <h2>PROJECT</h2>
        </div>
      </div>
      <div className="project-flex">
        <div className="project-buttons-vertical">
          {projectList.map((proj, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelectProject(index)}
              className={`project-btn ${selected === index ? 'active' : ''}`}
            >
              {proj.icon}
            </button>
          ))}
        </div>
        <div className="project-image-wrapper">
          <div className="project-image-box">
            <img
              src={projectList[selected].images[photoIndex]}
              alt={`Project ${selected + 1}`}
              className="project-img"
            />
            {projectList[selected].images.length > 1 && (
              <>
                <button className="nav-arrow left" onClick={handlePrev}>
                  <img src="/images/left-arrow.png" alt="prev" className="arrow-icon" />
                </button>
                <button className="nav-arrow right" onClick={handleNext}>
                  <img src="/images/right-arrow.png" alt="next" className="arrow-icon" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;