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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InfoItem from "./InfoItem";
import expData from "./exp.json";
import Timeline from "./Timeline";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Zoom } from "swiper";

export default function Myinfo() {
  const wrap = useRef();

  const expSelectState = useSelector((state) => state.expSelect.value);

  const dispatch = useDispatch();

  function locationMyInfo() {
    dispatch(nowLocate("myinfo"));
    wrap.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  useEffect(() => {
    dispatch(locateMyInfo(locationMyInfo));
  }, [dispatch]);

  useEffect(() => {
    // console.dir(expSelectState);
  }, [expSelectState]);

  return (
    <>
      <div className={style.wrap} ref={wrap}>
        <section>
          <div className={style.title_wrap}>
            <div className={style.title_wrapBox} onClick={locationMyInfo}>
              <Image src={LinkImg} width={50} height={50} alt="LinkImg" />
              <h1>My Info</h1>
            </div>
          </div>
          <div className={style.content_wrap_myinfo}>
            <InfoItem
              icon={
                <FontAwesomeIcon
                  icon="fa-solid fa-user"
                  style={{
                    width: "40px",
                    height: "40px",
                    margin: "0 30px 0 0",
                  }}
                />
              }
              title="이름"
              content="우윤하"
            />
            <InfoItem
              icon={
                <FontAwesomeIcon
                  icon="fa-solid fa-phone"
                  style={{
                    width: "40px",
                    height: "40px",
                    margin: "0 30px 0 0",
                  }}
                />
              }
              title="연락처"
              content="010-8218-0970"
            />
            <InfoItem
              icon={
                <FontAwesomeIcon
                  icon="fa-solid fa-location-dot"
                  style={{
                    width: "40px",
                    height: "40px",
                    margin: "0 30px 0 0",
                  }}
                />
              }
              title="주소"
              content="경상북도 상주시"
            />
            <InfoItem
              icon={
                <FontAwesomeIcon
                  icon="fa-solid fa-cake-candles"
                  style={{
                    width: "40px",
                    height: "40px",
                    margin: "0 30px 0 0",
                  }}
                />
              }
              title="생년월일"
              content="1995.05.10"
            />
            <InfoItem
              icon={
                <FontAwesomeIcon
                  icon="fa-solid fa-envelope"
                  style={{
                    width: "40px",
                    height: "40px",
                    margin: "0 30px 0 0",
                  }}
                />
              }
              title="이메일"
              content="wjh0970@gmail.com"
            />
            <InfoItem
              icon={
                <FontAwesomeIcon
                  icon="fa-solid fa-graduation-cap"
                  style={{
                    width: "40px",
                    height: "40px",
                    margin: "0 30px 0 0",
                  }}
                />
              }
              title="학력"
              content="경일대학교(컴퓨터공학과)"
            />
          </div>
          <hr />
          <div
            style={{
              textAlign: "center",
              margin: "50px 0 0 50px",
              fontSize: "2em",
            }}
          >
            저의 성장 과정 입니다!!
          </div>
          <div className={style.myUnivCareer}>
            <div className={style.timeline}>
              <div className={style.year2021}>2021</div>
              <div className={style.year2022}>2022</div>
              <div className={style.year2023}>2023</div>
              {expData.data.map((item, i) => {
                return (
                  <div key={i} className={style.timeline_wrap}>
                    <Timeline data={item} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={style.myCareerStateView}>
            <div className={style.myCareerStateView_header}>
              <div>
                <span className={style.title2}>{expSelectState.title2}</span>
                <br />
                <small className={style.title1}>{expSelectState.title}</small>
              </div>
              <span className={style.expDate}>{expSelectState.date}</span>
            </div>
            <div className={style.myCareerStateView_content}>
              <div className={style.intro_swiperWrap}>
                <div className={style.intro_swiper1}>
                  <Swiper
                    pagination={true}
                    // loop={true}
                    zoom={true}
                    modules={[Pagination, Zoom]}
                    className="mySwiper"
                    style={{
                      height: "100%",
                      borderRadius: "20px",
                      boxShadow: "0 3px 6px rgba(0,0,0,0.5)",
                    }}
                  >
                    {expSelectState.web.length === 0 ? (
                      <SwiperSlide
                        className={style.itemImg}
                        style={{
                          backgroundImage: `url('${
                            require(`../../public/img/sample_Img.jpg`).default
                              .src
                          }')`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "50% 0",
                        }}
                      ></SwiperSlide>
                    ) : (
                      expSelectState.web.map((item, i) => {
                        return (
                          <SwiperSlide
                            key={i}
                            className={style.itemImg}
                            style={{
                              backgroundImage: `url('${
                                require(`../../public/img/pf${item}`).default
                                  .src
                              }')`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "50% 0",
                            }}
                          ></SwiperSlide>
                        );
                      })
                    )}
                  </Swiper>
                </div>
                <div
                  className={style.intro_swiper2}
                  style={
                    {
                      // backgroundImage:`url('${require("../../public/img/pf/1/js_info.jpg").default.src}')`
                    }
                  }
                >
                  <Swiper
                    pagination={true}
                    // loop={true}
                    zoom={true}
                    modules={[Pagination, Zoom]}
                    className="mySwiper"
                    style={{
                      height: "100%",
                      borderRadius: "20px",
                      boxShadow: "0 3px 6px rgba(0,0,0,0.5)",
                    }}
                  >
                    {expSelectState.mobile.length === 0 ? (
                      <SwiperSlide
                        className={style.itemImg}
                        style={{
                          backgroundImage: `url('${
                            require(`../../public/img/sample_Img.jpg`).default
                              .src
                          }')`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "50% 0",
                        }}
                      ></SwiperSlide>
                    ) : (
                      expSelectState.mobile.map((item, i) => {
                        return (
                          <SwiperSlide
                            key={i}
                            className={style.itemImg}
                            style={{
                              backgroundImage: `url('${
                                require(`../../public/img/pf${item}`).default
                                  .src
                              }')`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "50% 0",
                            }}
                          ></SwiperSlide>
                        );
                      })
                    )}
                  </Swiper>
                </div>
              </div>

              <div className={style.contentText}>{expSelectState.content}</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
