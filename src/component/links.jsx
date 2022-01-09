import React from "react";
import { BsGithub, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

function Links() {
  return (
    <div className="icons">
      <BsGithub className="iconZ jump" onClick={()=>{
          window.open('https://github.com/narkreeta')
      }}/>
      <BsInstagram className="iconZ jump" onClick={()=>{
          window.open('https://instagram.com/narkreeta')
      }}/>
      <BsTwitter className="iconZ jump" onClick={()=>{
          window.open('https://twitter.com/narkreeta')
      }}/>
      <BsLinkedin className="iconZ jump" onClick={()=>{
          window.open('https://www.linkedin.com/in/sailendra-dash-713023218/')
      }} />
    </div>
  );
}

export default Links;
