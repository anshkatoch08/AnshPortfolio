import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <p className="career-tagline">
          Driven by curiosity, built on problem-solving, and focused on creating
          impactful digital solutions.
        </p>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>🔹 Hackathon Finalist – Web-e-Stan</h4>
                <h5>Top 10 out of multiple teams</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built an AI-powered Doctor system for image-based health insights.
              Secured Top 10 with strong problem-solving and rapid development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>🔹 DSA &amp; Problem Solver – LPU</h4>
                <h5>200+ Problems Solved</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Solved 200+ problems while strengthening core concepts of Data
              Structures and Algorithms with a focus on optimized coding.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>🔹 Full Stack Developer</h4>
                <h5>Real-World Projects</h5>
              </div>
              <h3>PRESENT</h3>
            </div>
            <p>
              Building scalable web applications using modern technologies,
              focused on performance and seamless user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
