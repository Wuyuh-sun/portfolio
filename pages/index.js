import Splash from "../components/Splash.js";
import MainPage from "../components/MainPage.js";
import Footer from "../components/Footer.js";
import { useEffect, useState } from "react";
// import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, faTwitter, faFontAwesome);

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
