import Splash from "../components/Splash.js";
import MainPage from "../components/MainPage.js";
import Footer from "../components/Footer.js";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    // fetch("/api/" + "hi1" + "/" + "hi2" + "/" + "hi3")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });
  }, []);
  return (
    <>
      <Splash />
      <MainPage />
      {/* footer semantic */}
      <Footer />
    </>
  );
}
