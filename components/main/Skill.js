import style from "../../styles/skill.module.css";
import Image from "next/image";
import LinkImg from "../../public/img/1x/Link.png";
import { useEffect, useRef } from "react";
import {
  locateAboutMe,
  locateMyInfo,
  locateSkills,
  locatePortfolio,
  locateMore,
  nowLocate,
} from "../../store/modules/navControllerSlice";
import { useDispatch } from "react-redux";
import front from "../../public/img/skill_icon/front.png";
import back from "../../public/img/skill_icon/back.png";
import tool from "../../public/img/skill_icon/tools.png";
import version from "../../public/img/skill_icon/version & devOps.png";

export default function Skill() {
  const wrap = useRef();
  const dispatch = useDispatch();

  function locationSkill() {
    dispatch(nowLocate("skills"));
    wrap.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  useEffect(() => {
    dispatch(locateSkills(locationSkill));
  }, [dispatch]);
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="steelblue" fillOpacity="1" d="M0,288L120,293.3C240,299,480,309,720,266.7C960,224,1200,128,1320,80L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      <div className={style.bg}>
        <div className={style.wrap} ref={wrap}>
          <section>
            <div className={style.title_wrap}>
              <div className={style.title_wrapBox} onClick={locationSkill}>
                <Image src={LinkImg} width={50} height={50} alt="LinkImg" />
                <h1>Skill</h1>
              </div>
            </div>
            <div className={style.content_wrap}>
              <div className={style.frontWrap}>
                <h2>Frontend</h2>
                <hr />
                <Image src={front} />
              </div>
              <div className={style.backWrap}>
                <h2>Backend</h2>
                <hr />
                <Image src={back} />
              </div>
              <div className={style.versionWrap}>
                <h2>Tools</h2>
                <hr />
                <Image src={tool} />
              </div>
              <div className={style.toolWrap}>
                <h3>Version Control &<br /> DevOps</h3>
                <hr />
                <Image src={version} />
              </div>
            </div>
          </section>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="steelblue" fillOpacity="1" d="M0,288L120,293.3C240,299,480,309,720,266.7C960,224,1200,128,1320,80L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
    </>
  );
}
