import Image from 'next/image';
import React from 'react';

interface IProjectCard {
  src: string;
  title: string;
  href: string;
}

const ProjectCard = ({ src, title, href }: IProjectCard) => {
  return (
    <a target="_blank" rel="noopener noreferrer" aria-label="Link to live preview" href={href} className="project__cardcontainer">
      <div className="pointer project__card">
        <Image loading="lazy" quality="100" src={src} title={title} alt={title} width="500px" height="500px" />
        <p className="bodyText">{title}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
