import style from "../../styles/portfolios.module.css";
import Image from "next/image";
import LinkImg from "../../public/img/1x/Link.png";
import { useRef } from "react";

export default function Portfolios() {
  const wrap = useRef();
  return (
    <>
      <div className={style.wrap} ref={wrap}>
        <section>
          <div className={style.title_wrap}>
            <div className={style.title_wrapBox} onClick={()=>{
              wrap.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
            }}>
              <Image src={LinkImg} width={50} height={50} alt="LinkImg"/>
              <h1>About Me</h1>
            </div>
          </div>
          <div className={style.content_wrap}></div>
        </section>
      </div>
    </>
  );
}
