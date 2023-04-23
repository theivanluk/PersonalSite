import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

const SocialMedia: React.FC = (): JSX.Element => {
  return (
    <div className="app__social">
      <a href="https://github.com/theivanluk" target="_blank" rel="noreferrer">
        <div>
          <BsGithub />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/lukivan/" target="_blank" rel="noreferrer">
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="https://www.instagram.com/aifunlook/" target="_blank" rel="noreferrer">
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
