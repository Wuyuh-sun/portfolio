import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../styles/footer.module.css";
import {
  locateAboutMe,
  locateMyInfo,
  locateSkills,
  locatePortfolio,
  locateMore,
  nowLocate,
} from "../store/modules/navControllerSlice";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";


export default function Footer() {
  const wrap = useRef();
  const dispatch = useDispatch();

  function locationFooter() {
    dispatch(nowLocate("more"));
    wrap.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }
  useEffect(() => {
    dispatch(locateMore(locationFooter));
  }, [dispatch]);

  const observer = new IntersectionObserver((e) => {
    e.forEach((item) => {
      if (item.isIntersecting) {
        dispatch(nowLocate("more"));
      }
    });
  });

  useEffect(() => {
    observer.observe(wrap.current);
  }, []);

  return (
    <>
      <div ref={wrap} className={style.footerWrap}>
        <div className={style.absoluteWrap}>
          <h1>Contact Me</h1>
        </div>
        <div className={style.waveWrap}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fillOpacity="1"
              d="M0,32L48,32C96,32,192,32,288,32C384,32,480,32,576,42.7C672,53,768,75,864,112C960,149,1056,203,1152,218.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className={style.wrap}>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=wjh0970@gmail.com&tf=cm"
            target="_blank"
            rel="noreferrer"
          >
            wjh0970@gmail.com
          </a>
          <br />
          <small>아무 내용도 좋아요!! 확인하는 데로 답을 드리겠습니다!</small>
          <div className={style.footer}>
            <div>
              <a
                href="https://www.instagram.com/ha_10ve/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon="fa-brands fa-instagram"
                  size="3x"
                  color="white"
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100006044080826"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon="fa-brands fa-facebook"
                  size="3x"
                  color="white"
                />
              </a>
              <a
                href="https://github.com/Wuyuh-sun"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon="fa-brands fa-github"
                  size="3x"
                  color="white"
                />
              </a>
            </div>
            <div>
              <small>© 2022 WUYUH. All rights reserved.</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
