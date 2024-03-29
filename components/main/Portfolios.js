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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mypad from "./mypad.json";
import sa from "./sa.json";
import rb from "./rb.json";
import lamah from "./lamah.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";
import "swiper/css/lazy";
import { Pagination, Zoom, Navigation, Lazy } from "swiper";
import lamah_readme from "./lamah_readme.json";
import rb_readme from "./rb_readme.json";
import sa_readme from "./sa_readme.json";
import mypad_readme from "./mypad_readme.json";

export default function Portfolios() {
  const wrap = useRef();
  const title = useRef();
  const dispatch = useDispatch();

  const myPadUrl = "/mypad.png";
  const saUrl = "/sa.png";
  const rbUrl = "/rb_1.jpg";
  const lamahUrl = "/lamah.webp";

  const [bgState, setBgState] = useState(lamahUrl);

  const [projectState, setProjectState] = useState(lamah);

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

  const [projectList, setProjectList] = useState(true);
  const projectListRef = useRef();
  const backBtn = useRef();
  const projectReadMe = useRef();
  const bgRef = useRef();
  const bg_opacity = useRef();
  const content_wrap = useRef();

  const [projectStateString, setProjectStateString] = useState("Lamah");

  const [readMe, setReadMe] = useState(lamah_readme);

  const [wrapOffsetHeight, setWrapOffsetHeight] = useState();

  useEffect(() => {
    switch (projectState) {
      case lamah:
        setReadMe(lamah_readme);
        break;
      case rb:
        setReadMe(rb_readme);
        break;
      case sa:
        setReadMe(sa_readme);
        break;
      case mypad:
        setReadMe(mypad_readme);
        break;
    }
    // console.dir(readMe);
  }, [projectState, readMe]);

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  window.addEventListener("resize", (e) => {
    setInnerWidth(e.currentTarget.innerWidth);
    setInnerHeight(e.currentTarget.innerHeight);
  });

  useEffect(() => {
    async function projectListFunc() {
      projectList
        ? ((backBtn.current.style.display = "none"),
          (projectListRef.current.style.height = "100%"),
          (projectListRef.current.childNodes[0].style.height = ""),
          (projectListRef.current.childNodes[1].style.height = ""),
          (projectListRef.current.childNodes[2].style.height = ""),
          (projectListRef.current.childNodes[3].style.height = ""),
          (projectListRef.current.style.left = "0%"),
          (projectReadMe.current.style.left = "110%"),
          (projectReadMe.current.style.transition = "0.5s ease-in-out"),
          innerWidth > 599
            ? (projectReadMe.current.style.top = "-500px")
            : (projectReadMe.current.style.top = "-900px"),
          (wrap.current.style.height = "100%"),
          innerWidth > 599
            ? (bgRef.current.style.height = "900px")
            : (bgRef.current.style.height = "1200px"),
          innerWidth > 599
            ? (bg_opacity.current.style.height = "900px")
            : (bg_opacity.current.style.height = "1200px"),
          innerWidth > 599
            ? (content_wrap.current.style.height = "700px")
            : (content_wrap.current.style.height = "1000px"),
          setTimeout(() => {
            title.current.innerText = "Projects";
          }, 300))
        : ((projectListRef.current.style.left = "-110%"),
          (projectListRef.current.style.height = "0%"),
          (projectListRef.current.childNodes[0].style.height = "0px"),
          (projectListRef.current.childNodes[1].style.height = "0px"),
          (projectListRef.current.childNodes[2].style.height = "0px"),
          (projectListRef.current.childNodes[3].style.height = "0px"),
          (projectListRef.current.childNodes[0].style.marginBottom = "0px"),
          (projectListRef.current.childNodes[1].style.marginBottom = "0px"),
          (projectListRef.current.childNodes[2].style.marginBottom = "0px"),
          (projectListRef.current.childNodes[3].style.marginBottom = "0px"),
          (projectReadMe.current.style.top = "0px"),
          (projectReadMe.current.style.left = "0%"),
          innerWidth > 599
            ? (wrap.current.style.height = "100%")
            : (wrap.current.style.height = "100%"),
          innerWidth > 599
            ? (bgRef.current.style.height = "2850px")
            : (bgRef.current.style.height = "3000px"),
          innerWidth > 599
            ? (bg_opacity.current.style.height = "2850px")
            : (bg_opacity.current.style.height = "3000px"),
          innerWidth > 599
            ? (content_wrap.current.style.height = "auto")
            : (content_wrap.current.style.height = "auto"),
          setTimeout(() => {
            title.current.innerText = `${projectStateString}`;
          }, 300),
          setTimeout(() => {
            backBtn.current.style.display = "block";
            // projectReadMe.current.style.transition = "none";
          }, 500));
    }
    projectListFunc();
  }, [
    projectList,
    projectStateString,
    wrapOffsetHeight,
    innerWidth,
    innerHeight,
  ]);

  useEffect(() => {
    // console.log(innerWidth);
  }, [innerWidth]);

  const observer = new IntersectionObserver((e) => {
    e.forEach((item) => {
      if (item.isIntersecting) {
        dispatch(nowLocate("portfolio"));
      }
    });
  });

  useEffect(() => {
    observer.observe(bgRef.current);
  }, []);
  return (
    <section
      style={{
        width: "100%",
      }}
    >
      <div
        ref={bgRef}
        className={style.bg}
        style={{
          backgroundImage:
            bgState &&
            `url('${require(`../../public/img/pf${bgState}`).default.src}')`,
          backgroundSize: bgState === lamahUrl ? false : "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
        }}
      >
        <div ref={bg_opacity} className={style.bg_opacity}></div>
        <div className={style.wrap} ref={wrap}>
          <div className={style.title_wrap}>
            <div className={style.title_wrapBox} onClick={locationPortfolio}>
              <Image src={LinkImg} width={50} height={50} alt="LinkImg" />
              <h1 ref={title}>Projects</h1>
            </div>
          </div>
          <div ref={content_wrap} className={style.content_wrap}>
            <div ref={projectListRef} className={style.projectList}>
              <div
                className={style.LAMAH}
                onClick={() => {
                  setBgState(lamahUrl);
                  setProjectList(false);
                  setProjectState(lamah);
                  setProjectStateString("Lamah");

                  locationPortfolio();
                }}
              >
                <Image
                  src={require("../../public/img/pf/team1.png")}
                  width={150}
                  height={300}
                  loading="lazy"
                  alt="portfolioImg"
                />
              </div>
              <div
                className={style.ROOMBOOK}
                onClick={() => {
                  setBgState(rbUrl);
                  setProjectList(false);
                  setProjectState(rb);
                  setProjectStateString("ROOMBOOK");

                  locationPortfolio();
                }}
              >
                <Image
                  src={require("../../public/img/pf/rb.png")}
                  layout="fill"
                  loading="lazy"
                  alt="portfolioImg"
                />
              </div>
              <div
                className={style.SA}
                onClick={() => {
                  setBgState(saUrl);
                  setProjectList(false);
                  setProjectState(sa);
                  setProjectStateString("Smoke Area");

                  locationPortfolio();
                }}
              >
                <Image
                  src={require("../../public/img/pf/sa.png")}
                  layout="fill"
                  loading="lazy"
                  alt="portfolioImg"
                />
              </div>
              <div
                className={style.MYPAD}
                onClick={() => {
                  setBgState(myPadUrl);
                  setProjectList(false);
                  setProjectState(mypad);
                  setProjectStateString("My Pad");

                  locationPortfolio();
                }}
              >
                <Image
                  src={require("../../public/img/pf/mypad.png")}
                  layout="fill"
                  loading="lazy"
                  alt="portfolioImg"
                />
              </div>
            </div>
            <article ref={projectReadMe} className={style.projectReadMe}>
              <div className={style.swiperWrap}>
                <Swiper
                  navigation={true}
                  pagination={true}
                  loop={true}
                  zoom={true}
                  lazy={true}
                  modules={[Lazy, Pagination, Zoom, Navigation]}
                  className="mySwiper"
                  style={{
                    height: "100%",
                    borderRadius: "30px",
                    boxShadow: "0 3px 6px rgba(0,0,0,0.5)",
                    "--swiper-navigation-color": "#1c1c24",
                    "--swiper-pagination-color": "#FFB300",
                  }}
                >
                  {projectState &&
                    projectState.map((item, i) => {
                      // console.dir(item);
                      return (
                        <SwiperSlide
                          key={i}
                          style={{
                            backgroundImage: `url('${
                              require(`../../public/img/projectsImg${item}`)
                                .default.src
                            }')`,
                            backgroundSize:
                              // projectState === lamah && innerWidth > 599
                              //   ? "250px 540px"
                              //   : innerWidth < 599
                              //   ? "100px 200px"
                              //   : "cover",

                              projectState === lamah && innerWidth > 599
                                ? "250px 540px"
                                : projectState === lamah && innerWidth <= 599
                                ? "100px 200px"
                                : "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "50% 0",
                          }}
                        ></SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>

              <div className={style.ReadMe_contentWrap}>
                <div className={style.ReadMe_title}>
                  <h2>
                    <FontAwesomeIcon
                      icon="fa-solid fa-tag"
                      size="1x"
                      color="#ffb300"
                    />
                    &nbsp;&nbsp;{readMe.title}
                  </h2>
                  <small>{readMe.topic}</small>
                </div>
                <hr />
                <div className={style.ReadMe_Summary_title}>
                  <h2>
                    <FontAwesomeIcon icon="fa-solid fa-paperclip" size="1x" />
                    &nbsp;&nbsp;Summary
                  </h2>
                </div>
                <br />
                <div className={style.ReadMe_Summary_content}>
                  {readMe.Contents}
                </div>
                <br />
                <div className={style.ReadMe_function}>
                  주요 기능
                  <ul>
                    {readMe.function.map((item, i) => {
                      return <li key={i}>&nbsp;&nbsp;&nbsp; ✅ {item}</li>;
                    })}
                  </ul>
                </div>
                <br />
                <div className={style.ReadMe_devBg}>
                  <h2>💡 Background</h2>
                  <br />
                  <div>{readMe.devBg}</div>
                </div>
                <br />
                <div className={style.ReadMe_feeling}>
                  <h2>🍞 Feeling</h2>
                  <br />
                  <div>{readMe.feeling}</div>
                </div>
                <br />
                <div className={style.ReadMe_stack}>
                  <h2>🛠️ Stack</h2>
                  <br />
                  <ul>
                    <li>Front_end : {readMe.front}</li>
                    <li>Back_end : {readMe.back}</li>
                    <li>DB : {readMe.database}</li>
                  </ul>
                </div>
                <br />
                <div className={style.ReadMe_repository}>
                  <h2>🗂️ Repository</h2>
                  <br />
                  <ul>
                    {readMe.github.length === 1 ? (
                      <>
                        <li>
                          Source :{" "}
                          <a
                            href={readMe.github[0]}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {readMe.github[0]}
                          </a>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          Front :{" "}
                          <a
                            href={readMe.github[0]}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {readMe.github[0]}
                          </a>
                        </li>
                        <li>
                          back :{" "}
                          <a
                            href={readMe.github[1]}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {readMe.github[1]}
                          </a>
                        </li>
                      </>
                    )}
                    {readMe.url !== "" ? (
                      <>
                        <li>
                          Deploy URL :{" "}
                          <a href={readMe.url} target="_blank" rel="noreferrer">
                            {readMe.url}
                          </a>
                        </li>
                      </>
                    ) : (
                      false
                    )}
                  </ul>
                </div>
              </div>
            </article>
          </div>

          <div
            ref={backBtn}
            className={style.backBtn}
            style={{
              display: "none",
            }}
            onClick={() => {
              setProjectList(true);
              locationPortfolio();
            }}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-angle-left"
              style={{
                width: "20px",
                height: "40px",
                position: "relative",
                left: "13px",
                top: "5px",
                // transfrom:"translate(-50%,-50%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
