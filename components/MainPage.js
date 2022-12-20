import Nav from "./main/Nav";
import Jumbotron from "./main/Jumbotron";
import Myinfo from "./main/Myinfo";

import About from "./main/About";
import Skill from "./main/Skill";
import PortFolios from "./main/Portfolios";
import style from "../styles/mainPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useEffect } from "react";


export default function MainPage() {
  const upMoveBtn = useRef();

  return (
    <>
      {/* header semantic */}
      <Jumbotron />
      {/* nav semantic */}
      <Nav />
      {/* main semantic */}
      <main className={style.wrap}>
        {/* <About /> */}
        <Myinfo />
        <Skill />
        <PortFolios />
      </main>
    </>
  );
}
