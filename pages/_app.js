import Head from "next/head";
import "../styles/global.css";
import { store } from "../store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>WUYUH • 웹 개발자 포트폴리오</title>
        <meta name="description" content="WUYUH - 웹 프론트엔드, 백엔드 개발자 포트폴리오 " />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="WUYUH, 우유, 웹 개발자, 프론트 엔드, 백 엔드, 풀 스택, 웹 개발자 포트폴리오, web developer, 프론트엔드 개발자, 백엔드 개발자, 풀스택 개발자, 개발자 포트폴리오, 우윤하, 신입 개발자, 신입 포트폴리오"/>
        <meta name="Reply-To" content="wjh0970@gmail.com" />
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:url" content="https://wuyuh.tk/"/>
        <meta name="twitter:title" content="WUYUH"/>
        <meta name="twitter:description" content="신입 웹 개발자 포트폴리오"/>
        <meta name="twitter:image" content="/img/giphy.gif"/>
        <meta property="og:title" content="WUYUH" />
        <meta property="og:site-name" content="WUYUH" />
        <meta property="og:description" content="신입 웹 개발자 포트폴리오" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wuyuh.tk/" />
        <meta property="og:image" content="/ogImg.png" />
        <meta property="og:article:author" content="우윤하" />
        
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
