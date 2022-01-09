import React from "react";

function Aboutme() {
  return (
    <>
      <div className="aboutPhase1">
        <h3 className="title">About Me</h3>
        <p className="description">
          i am a developer. developed hybrid type application with the help of
          react native . i have interest in learn daily new technologies, design
          UI and solve the complex type of bugs in any type of application.
        </p>
      </div>
      <div className="aboutPhase2">
        <h3 className="title">Qualification</h3>
        <ul className="descriptionlist1">
          <li>
            Bachelor of Computer Science{" "}
            <i
              style={{
                marginLeft: 20,
              }}
            >
              (2018 - 2021)
            </i>
          </li>
          Gayatri Institute of computer science and management, Hinjilicut
          <li>
            Higher Secondary in Science{" "}
            <i
              style={{
                marginLeft: 20,
              }}
            >
              (2016 - 2018)
            </i>
          </li>
          Anchalika Science College, Kshatriyabarpur
        </ul>
        <h3 className="title">Projects</h3>
        <ul className="descriptionlist2">
          <li
            className="liTxt"
          >
            XYNOSHARE (Web App){" "}
            <i
              className="liXtt"
            >
              (28th July 2021- 29th Aug 2021)
            </i>
          </li>
          <p className="subDesc">
            This is Based On News and Article App. I Create This Web App with
            the help of Django and HTML designed with Bootstrap. database was
            used here postgreSQL. .
          </p>
          <li
            className="liTxt"
          >
            SAYO (Android App){" "}
            <i
              className="liXtt"
            >
              (07th Sep 2021- 28th Dec 2021)
            </i>
          </li>
          <p className="subDesc">
            This App is Based On Social Productive App. Its an Android
            Application Build By React Native with Django. For the Front End - i
            used figma for design ui and expo react native for build application
            with many libraries, Backend - i used Python Framework Django and
            with the help of DRF(Django Rest Framework) create an API for easy
            to connect with Frontend. Then Deployed My Backend in Heroku Cloud
            Platform with PostGresql default DB.
          </p>
        </ul>
      </div>
    </>
  );
}

export default Aboutme;
