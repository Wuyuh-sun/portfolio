import logoImg from "../../public/img/1x/logo_black.png";
import Image from "next/image";
import style from "../../styles/nav.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  locateAboutMe,
  locateMyInfo,
  locateSkills,
  locatePortfolio,
  locateMore,
  nowLocate,
} from "../../store/modules/navControllerSlice";

export default function Nav() {
  const navController = useSelector((state) => state.navController.value);
  const dispatch = useDispatch();

  const [navState, setNavState] = useState(false);

  const img = useRef();
  const navBg = useRef();
  const [iconArr, setIconArr] = useState([]);

  useEffect(() => {
    setIconArr([
      <>
        <FontAwesomeIcon
          icon="fa-regular fa-hand"
          style={{ width: "35px", height: "35px", marginBottom: "5px" }}
          color={navController.now === "aboutme" ? "#4c94d4" : "black"}
        />
      </>,
      <>
        <FontAwesomeIcon
          icon="fa-regular fa-address-card"
          style={{ width: "35px", height: "35px", marginBottom: "5px" }}
          color={navController.now === "myinfo" ? "#4c94d4" : "black"}
        />
      </>,
      <>
        <FontAwesomeIcon
          icon="fa-solid fa-code"
          style={{ width: "35px", height: "35px", marginBottom: "5px" }}
          color={navController.now === "skills" ? "#4c94d4" : "black"}
        />
      </>,
      <>
        <FontAwesomeIcon
          icon="fa-solid fa-layer-group"
          style={{ width: "35px", height: "35px", marginBottom: "5px" }}
          color={navController.now === "portfolio" ? "#4c94d4" : "black"}
        />
      </>,
      <>
        <FontAwesomeIcon
          icon="fa-solid fa-circle-info"
          style={{ width: "35px", height: "35px", marginBottom: "5px" }}
          color={navController.now === "more" ? "#4c94d4" : "black"}
        />
      </>,
    ]);
    !navState
      ? ((img.current.style.transform = "rotate(0deg)"),
        (navBg.current.style.height = "70px"),
        (navBg.current.childNodes[0].style.opacity = "0"))
      : ((img.current.style.transform = "rotate(180deg)"),
        (navBg.current.style.height = "calc(100% - 30px)"),
        (navBg.current.childNodes[0].style.opacity = "1"));
  }, [navState, navController]);

  return ( iconArr &&
    <>
      <nav
        ref={img}
        className={style.wrap}
        onClick={() => {
          !navState ? setNavState(true) : setNavState(false);
        }}
      >
        <Image src={logoImg} width={50} height={50} alt="logoImg" />
      </nav>
      <div ref={navBg} className={style.navBg}>
        <div className={style.navBg_menuList}>
          <div
            onClick={() => {
              navController.aboutme();
              dispatch(nowLocate("aboutme"));
            }}
          >
            {iconArr[0]}
            <small
              style={{
                color: navController.now === "aboutme" ? "#4c94d4" : "black",
              }}
            >
              AboutMe
            </small>
          </div>
          <div
            onClick={() => {
              navController.myinfo();
              dispatch(nowLocate("myinfo"));
            }}
          >
            {iconArr[1]}
            <small
              style={{
                color: navController.now === "myinfo" ? "#4c94d4" : "black",
              }}
            >
              MyInfo
            </small>
          </div>
          <div
            onClick={() => {
              navController.skills();
              dispatch(nowLocate("skills"));
            }}
          >
            {iconArr[2]}
            <small
              style={{
                color: navController.now === "skills" ? "#4c94d4" : "black",
              }}
            >
              Skills
            </small>
          </div>
          <div
            onClick={() => {
              navController.portfolio();
              dispatch(nowLocate("portfolio"));
            }}
          >
            {iconArr[3]}
            <small
              style={{
                color: navController.now === "portfolio" ? "#4c94d4" : "black",
              }}
            >
              Portfolio
            </small>
          </div>
          <div
            onClick={() => {
              // navController.more();
            }}
          >
            {iconArr[4]}
            <small
              // style={{
              //   color: navController.now === "more" ? "#4c94d4" : "black",
              // }}
            >
              More
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
