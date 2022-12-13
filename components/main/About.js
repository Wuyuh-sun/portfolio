import style from "../../styles/about.module.css";
import Image from "next/image";
import LinkImg from "../../public/img/1x/Link.png";
import orcaUnscreen from "../../public/img/orca-solo-unscreen.gif";
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

  function locationAboutMe() {
    dispatch(nowLocate("aboutme"));
    wrap.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  useEffect(() => {
    dispatch(aboutWrap(wrap.current));
    dispatch(locateAboutMe(locationAboutMe));
  }, [dispatch]);

  return (
    <>
      <div className={style.section}>
        <div className={style.wrap} ref={wrap}>
          <section>
            <div className={style.title_wrap}>
              <div className={style.title_wrapBox} >
                {/* <Image src={LinkImg} width={50} height={50} alt="linkImg" /> */}
                <h1 onClick={locationAboutMe}>반갑습니다 저는!</h1>
                {/* <Image
                  src={orcaUnscreen}
                  width={300}
                  height={233}
                  alt="orcaUnscreen"
                /> */}
              </div>
            </div>
            <div className={style.content_wrap}>
              <div>
                천천히 그리고 꾸준히 공부하는걸 좋아하는 <strong>우윤하</strong>입니다.
                <br />
                경험을 중요시하고 그 경험을 바탕으로 미래를 그립니다.
              </div>

              <div>
                &quot;Form Follow Function&quot;이라는 디자인 원칙이 있습니다.
                <br />
                &quot;형태는 기능을 따른다&quot;라는 의미를 가지고 있는 말로
                제가 좋아하는 문구입니다.
                <br />
                저는 이 문구가 단순히 UI와 같은 디자인에만 적용되지 않는다고
                생각합니다.
                <br />
                물을 마실 때에는 위에서 아래로 마시듯 사용자가 상식선에서
                편리함을 느낄 수 있도록
                <br />
                시스템을 개발하고자 하는 의지가 저의 장점입니다.
              </div>

              <div>
                저는 무언가가 완성된 후에 뿌듯함을 느낄 때 재미를 느낍니다.
                <br />
                이 뿌듯함의 정도가 올라 갈 수록 더 큰 재미를 느끼기에 더 잘하고
                싶어 호기심이 생깁니다.
                <br />
                호기심이 있을 때 발전과 영감이 생기고
                <br />이 영감은 또 다른 호기심을 낳아 끊임없이 발전할 수 있는
                계기가 된다 생각합니다.
              </div>

              <div>
                계속해서 발전하며 즐겁게 일하는 것이
                <br />
                저의 목표입니다 :)
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
