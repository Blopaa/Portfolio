import Image from 'next/image';
import React from 'react';

interface IProjectCard {
  src: string;
  title: string;
  href: string;
}

const ProjectCard = ({ src, title, href }: IProjectCard) => {
  return (
    <a target="blank" href={href} className="project__cardcontainer">
      <div className="pointer project__card">
        <Image src={src} quality="100" width="500px" height="500px" />
        <p className="bodyText mt-1">{title}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
