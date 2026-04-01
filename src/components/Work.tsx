import "./styles/Work.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  const projects = [
    {
      title: "Food Donation App",
      description:
        "Reduce food waste by connecting donors with NGOs and people in need. Manage donations and request tracking with ease.",
      stack: "HTML, CSS, JavaScript, Backend",
      github: "https://github.com/anshkatoch08/food_donation_app",
    },
    {
      title: "Sentinel Chatbot",
      description:
        "AI-powered chatbot that automates conversations and handles queries intelligently for better user experience.",
      stack: "JavaScript, APIs, AI Logic",
      github: "https://github.com/anshkatoch08/chatbot_Sentinel",
    },
    {
      title: "Ticketing System",
      description:
        "Manage and track support tickets with status updates, user assignments, and workflow automation.",
      stack: "Backend System, Database",
      github: "https://github.com/anshkatoch08/ticketingsystem",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Modern responsive portfolio to showcase skills, projects, and achievements with a smooth UI.",
      stack: "HTML, CSS, JavaScript",
      github: "https://github.com/anshkatoch08/Ansh-Katoch",
    },
    {
      title: "AI Smart Assistant",
      description:
        "Smart assistant for task automation, query response, and productivity with AI-based features.",
      stack: "AI, APIs, JavaScript",
      github: "https://github.com/anshkatoch08/anshkatoch08",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-grid">
          {projects.map((project, index) => (
            <div className="work-card" key={index}>
              <h3>{project.title}</h3>
              <p className="work-description">{project.description}</p>
              <p className="work-stack">Tech Stack: {project.stack}</p>
              <a
                className="work-link"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
