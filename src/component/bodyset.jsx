import React from "react";
import profile from "../assets/profile.png";
import cover from "../assets/cover.png";

function Bodyset() {
  return (
    <>
      <div className="coverSet">
        <img className="covimage" src={cover} alt="cover" />
      </div>
      <div className="bodySet">
        <img className="proimage" src={profile} alt="profile" />
      </div>
      <div className="textSet">
        <h3 className="text-Name">Sailendra Dash</h3>
        <h3 className="text-Name2">Dev Name : NARKREETA </h3>
      </div>
    </>
  );
}

export default Bodyset;
