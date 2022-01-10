import React from "react";
import Aboutme from "./component/aboutme";
import Bodyset from "./component/bodyset";
import Contactme from "./component/contactme";
import Download from "./component/download";
import Links from "./component/links";
import Skills from "./component/skills";

function Mainpage() {
  return (
    <div>
      <div className="FirstPhase">
        <Bodyset />
        <Download />
        <Links />
      </div>
      <div className="SecondPhase">
        <Aboutme />
      </div>
      <div className="ThirdPhase">
        <Skills />
        <Contactme />
      </div>
    </div>
  );
}

export default Mainpage;
