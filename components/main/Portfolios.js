import style from "../../styles/portfolios.module.css";
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
import { useState } from "react";

export default function Portfolios() {
  const wrap = useRef();
  const dispatch = useDispatch();

  const myPadUrl = "/rb_1.jpg";
  const saUrl = "/rb_1.jpg";
  const rbUrl = "/rb_1.jpg";
  const lamahUrl = "/lamah.gif";

  const [bgState, setBgState] = useState(lamahUrl);

  function locationPortfolio() {
    dispatch(nowLocate("portfolio"));
    wrap.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  useEffect(() => {
    dispatch(locatePortfolio(locationPortfolio));
  }, [dispatch]);
  return (
    <>
      <div className={style.bg} style={{
        backgroundImage: bgState && `url('${
          require(`../../public/img/pf${bgState}`).default
            .src
        }')`,
        backgroundSize: bgState === lamahUrl ? false : "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
      }}>
        <div className={style.bg_opacity}></div>
        <div className={style.wrap} ref={wrap}>
          <section>
            <div className={style.title_wrap}>
              <div className={style.title_wrapBox} onClick={locationPortfolio}>
                <Image src={LinkImg} width={50} height={50} alt="LinkImg" />
                <h1>Portfolios</h1>
              </div>
            </div>
            <div className={style.content_wrap}>

            </div>
          </section>
        </div>
      </div>
    </>
  );
}
