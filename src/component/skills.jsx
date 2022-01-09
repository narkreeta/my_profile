import React from "react";

const myskill = [
  {
    name: "React",
    exp: 95,
  },
  {
    name: "Django",
    exp: 90,
  },
  {
    name: "Python",
    exp: 90,
  },
  {
    name: "PGSQL",
    exp: 75,
  },
  {
    name: "CSS FW",
    exp: 89,
  },
];

function Skills() {
  return (
    <div>
      <h3 className="title">Skills</h3>
      <div className="skillSet">
        {myskill.map((i, index) => {
          return (
            <div className="firstSkill" key={index}>
              <h5 className="skillName">{i.name}</h5>
              <div className="statBox">
                <div
                  className="statBoxSet"
                  style={{
                    width: `${i.exp / 2}vw`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
