import "./App.css";
import Aboutme from "./component/aboutme";
import Bodyset from "./component/bodyset";
import Contactme from "./component/contactme";
import Download from "./component/download";
import Links from "./component/links";
import Skills from "./component/skills";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
