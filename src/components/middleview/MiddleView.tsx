import React from 'react';
import ProjectOrgnism from '../projects/ProjectOrgnism';

const MiddleView = () => {
  return (
    <>
      <div id="abajo" style={{ height: '0px' }}></div>
      <div className="middleview__projectContainer">
        <div className="center column">
          <h2 className="subtitle middleview__titlee">My Projects</h2>
          <div className="project__advice responsiveshow">
            <p className="smallBodyText">
              If you want to see more frontend and backend projects like apis
              bots and webs, you can click below and go to my github to see them
            </p>
            <a href="https://github.pablosabater.dev">
              <button>Go to my GitHub</button>
            </a>
          </div>
        </div>
        <ProjectOrgnism />
      </div>
    </>
  );
};

export default MiddleView;
