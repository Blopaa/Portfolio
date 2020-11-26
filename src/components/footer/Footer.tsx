import React from 'react';
import { AiOutlineMail, AiFillGithub } from 'react-icons/ai';
import { RiTwitterLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className="footer__background">
      <div className="footer__container">
        <p>©Pablo Sabater Jiménez 2020</p>
        <div className="footer__socialcontainer">
          <a href="mailto: pabloosabaterr@gmail.com">
            <AiOutlineMail />
          </a>
          <a href="https://twitter.com/Pabloosabaterr">
            <RiTwitterLine />
          </a>
          <a href="https://github.com/Blopaa">
            <AiFillGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
