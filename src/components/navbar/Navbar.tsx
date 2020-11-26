import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__links">
        <Link to="abajo" smooth={true} duration={700} offset={-50}>
          <div className="link pointer">projects</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
