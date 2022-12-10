import style from "../../styles/about.module.css";
import Image from "next/image";
import LinkImg from "../../public/img/1x/Link.png";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { aboutWrap } from "../../store/modules/aboutSlice";
import {
  locateAboutMe,
  locateMyInfo,
  locateSkills,
  locatePortfolio,
  locateMore,
  nowLocate,
} from "../../store/modules/navControllerSlice";

export default function About() {
  const wrap = useRef();
  const dispatch = useDispatch();

  function locationAboutMe(){
    dispatch(nowLocate("aboutme"))
    wrap.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }

  useEffect(()=>{
    dispatch(aboutWrap(wrap.current))
    dispatch(locateAboutMe(locationAboutMe));
  },[dispatch])
  
  return (
    <>
      <div className={style.wrap} ref={wrap}>
        <section>
          <div className={style.title_wrap}>
            <div className={style.title_wrapBox} onClick={locationAboutMe}>
              <Image src={LinkImg} width={50} height={50} alt="linkImg"/>
              <h1>About Me</h1>
            </div>
          </div>
          <div className={style.content_wrap}></div>
        </section>
      </div>
    </>
  );
}
