import React from 'react';
import { AiOutlineMail, AiFillGithub } from 'react-icons/ai';
import { RiTwitterLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="footer__container">
      <p>© Pablo Sabater Jiménez 2020</p>
      <div className="footer__socialcontainer">
        <a
          aria-label="Contact me by email"
          href="mailto: pabloosabaterr@gmail.com"
        >
          <AiOutlineMail />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to my Twitter"
          href="https://twitter.com/Pabloosabaterr"
        >
          <RiTwitterLine />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to my Github"
          href="https://github.com/Blopaa"
        >
          <AiFillGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
