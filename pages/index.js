import Splash from "../components/Splash.js";
import MainPage from "../components/MainPage.js";
import Footer from "../components/Footer.js";
import { useEffect, useState } from "react";
// import axios from "axios";

export default function Home() {
  const [dataMethod, setDataMethod] = useState("post");

  useEffect(() => {
    // axios({
    //   method: "get",
    //   url: "api/post?data=get",
    //   data: { data: "postData" },
    //   headers: {
    //     "Content-Type": "application/json; charset=utf-8",
    //     withCredentials: true,
    //     crossDomain: true,
    //     credentials: true,
    //   },
    // })
    //   .then((res) => {
    //     console.dir(res.data);
    //   })
    //   .catch((err) => {
    //     console.dir(err);
    //   });

    // fetch("/api/" + "hi1" + "/" + "hi2" + "/" + "hi3")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.dir(data);
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
