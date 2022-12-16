import Link from "next/link";
import Image from "next/image";
import DecoImg from "../../public/img/1x/decoImg1.png";
import BoatImg from "../../public/img/boat-unscreen.gif";

import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "../../styles/jumbotron.module.css";
import About from "./About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Jumbotron() {
  const splashLoadingState = useSelector((state) => state.splash.value);
  const aboutWrapState = useSelector((state)=>state.about.value);

  const wrapRef = useRef();
  const ImgRef = useRef();
  const h2Ref = useRef();
  const h1Ref = useRef();
  const h4Ref = useRef();
  const upMoveBtn = useRef();

  useEffect(() => {
    if (splashLoadingState === 0) {
      setTimeout(() => {
        h2Ref.current.style.top = "0";
        h2Ref.current.style.opacity = "1";
      }, 500);
      setTimeout(() => {
        h1Ref.current.style.top = "0";
        h1Ref.current.style.opacity = "1";
      }, 1500);
      setTimeout(() => {
        h4Ref.current.style.top = "0";
        h4Ref.current.style.opacity = "1";
      }, 2500);
    }
  }, [splashLoadingState]);

  function downWheelClick(){
    aboutWrapState.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  function scrollTop(){
    wrapRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    // console.log("up!")
  }

  useEffect(() => {
    document.body.addEventListener("scroll", () => {
      document.body.scrollTop > 800
        ? (upMoveBtn.current.style.display = "flex")
        : (upMoveBtn.current.style.display = "none");
    });
  }, []);
  return (
    <>
      <header ref={wrapRef} className={style.wrap}>
        <Image src={DecoImg} width={500} height={500} alt="DecoImg"/>
        <div ref={ImgRef} className={style.boatWrap}>
          {/* 배1 */}
          <Image src={BoatImg} width={500} height={500} alt="BoatImg"/>
          {/* 배2 */}
          <Image src={BoatImg} width={500} height={500} alt="BoatImg"/>
        </div>
        <header className={style.Header}>
          <div className={style.Header_wrap}>
            <h2 ref={h2Ref}>안녕하세요!</h2>
            <h1 ref={h1Ref}>웹 개발자 우윤하입니다 :)</h1>
            <h4 ref={h4Ref}>WEB FE/BE Developer</h4>
          </div>
        </header>
        <div className={style.downWheel}  onClick={downWheelClick}/>
      </header>

      <About />
      {/* 물결효과 */}
      <div className={style.custom_shape_divider_top_1664111356}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".4"
            className={style.shape_fill}
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className={style.shape_fill}
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className={style.shape_fill}
          ></path>
        </svg>
      </div>
      <div
        ref={upMoveBtn}
        className={style.upMoveBtn}
        style={{
          display: "none",
        }}
        onClick={scrollTop}
      >
        <FontAwesomeIcon icon="fa-solid fa-arrow-up" size="1x" />
      </div>
    </>
  );
}
