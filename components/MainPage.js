import Nav from "./main/Nav";
import Jumbotron from "./main/Jumbotron";
import Myinfo from "./main/Myinfo";

import About from "./main/About";
import Skill from "./main/Skill";
import PortFolios from "./main/Portfolios";
import style from "../styles/mainPage.module.css";

export default function MainPage() {
  return (
    <>
      {/* header semantic */}
      <Jumbotron />
      {/* nav semantic */}
      <Nav />
      {/* main semantic */}
      <div className={style.wrap}>
        <About />
        <Myinfo />
        <Skill/>
        <PortFolios/>
      </div>
      
    </>
  );
}
