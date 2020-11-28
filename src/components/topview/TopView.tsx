import React from 'react';
import Image from 'next/image';

const TopView = () => {
  const skills = [
    'https://devicons.github.io/devicon/devicon.git/icons/bootstrap/bootstrap-plain.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/css3/css3-original-wordmark.svg',
    'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
    'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/html5/html5-original-wordmark.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/java/java-original-wordmark.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/mongodb/mongodb-original-wordmark.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/mysql/mysql-original-wordmark.svg',
    'https://cdn.worldvectorlogo.com/logos/nextjs-3.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original-wordmark.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/postgresql/postgresql-original-wordmark.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/redux/redux-original.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/sass/sass-original.svg',
    'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/typescript/typescript-original.svg',
  ];

  return (
    <div className="topview__background">
      <div className="topview__container">
        <div className="topview__me">
          <Image
            src="/me.jpg"
            alt="pablo Sabater"
            width="350"
            height="350"
            quality="100"
            loading="lazy"
          />
          <div>
            <h1 className="title">Pablo Sabater Jiménez</h1>
            <p className="subtitle">Software Developer</p>
          </div>
        </div>
        <div className="bodyText topview__description">
          I'm a full stack developer who likes to program every day, I love to
          learn new technologies and methods to improve myself and do things in
          the best way.
        </div>
        <div className="topview__techStackContainer">
          <h2 className="subtitle topview__techStack">Tech stack :</h2>
          <div>
            {skills.map((n) => (
              <img
                src={n}
                alt="tech_skill"
                width="40px"
                height="40px"
                key={n}
                className="topview__techs"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopView;
