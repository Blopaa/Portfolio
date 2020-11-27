import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectOrgnism = () => {
  return (
    <div className="project__container">
      <ProjectCard
        href="https://online-lists-frontend.vercel.app/signin"
         refactor/seo
        src="/foodlist.png"
        title="Online Foodlists (semi-responsive)"
      />
      <ProjectCard
        href="https://app-weather-demo.netlify.app/"
        src="/weather.png"
        title="Weather App"
      />
      <ProjectCard
        href="https://journals-app.netlify.app/"
        src="/journal.png"
        title="Firebase + Redux Journal App"
      />
      <div className="center">
        <div className="project__advice">
          <p className="smallBodyText">
            If you want to see more frontend and backend projects like apis bots
            and webs, you can click below and go to my github to see them
          </p>
          <a href="https://github.pablosabater.dev">
            <button>Go to my GitHub</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectOrgnism;
