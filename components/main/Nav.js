import logoImg from "../../public/img/1x/logo_black.png";
import Image from "next/image";
import style from "../../styles/nav.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function Nav() {
  const [navState, setNavState] = useState(false);

  const img = useRef();
  const navBg = useRef();

  useEffect(() => {
    !navState
      ? (img.current.style.transform = "rotate(0deg)")
      : (img.current.style.transform = "rotate(180deg)");
  }, [navState]);

  return (
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

      </div>
    </>
  );
}
