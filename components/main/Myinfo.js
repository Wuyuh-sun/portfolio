import style from "../../styles/myinfo.module.css";
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

export default function Myinfo() {
  const wrap = useRef();
  const dispatch = useDispatch();

  function locationMyInfo(){
    dispatch(nowLocate("myinfo"))
    wrap.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }

  useEffect(()=>{
    dispatch(locateMyInfo(locationMyInfo));
  },[dispatch])

  return (
    <>
      <div className={style.wrap} ref={wrap}>
        <section>
          <div className={style.title_wrap}>
            <div className={style.title_wrapBox} onClick={locationMyInfo}>
              <Image src={LinkImg} width={50} height={50} alt="LinkImg"/>
              <h1>My Info</h1>
            </div>
          </div>
          <div className={style.content_wrap}></div>
        </section>
      </div>
    </>
  );
}
