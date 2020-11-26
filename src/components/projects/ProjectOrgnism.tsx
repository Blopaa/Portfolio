import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectOrgnism = () => {
  return (
    <div className="project__container">
      <ProjectCard
        href="https://online-lists-frontend.vercel.app/signin"
        src="/foodlist.PNG"
        title="online foodlists (semi-responsive)"
      />
      <ProjectCard
        href="https://app-weather-demo.netlify.app/"
        src="/weather.PNG"
        title="weather app"
      />
      <ProjectCard
        href="https://journals-app.netlify.app/"
        src="/journal.PNG"
        title="firebase + redux journal app"
      />
      <ProjectCard
        href="https://github.pablosabater.dev/"
        src="/GitHub.png"
        title="more projects, apis and bots on github"
      />
    </div>
  );
};

export default ProjectOrgnism;
