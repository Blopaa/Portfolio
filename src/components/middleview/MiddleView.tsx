import React from 'react';
import Footer from '../footer/footer';
import ProjectOrgnism from '../projects/ProjectOrgnism';

const MiddleView = () => {
  return (
    <>
      <div className="middleview__container" id="abajo">
        <h2 className="subtitle middleview__titlee">My Projects</h2>

        <div className="middleview__projectContainer">
          <ProjectOrgnism />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MiddleView;
