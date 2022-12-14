import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../styles/footer.module.css";

export default function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,32L48,32C96,32,192,32,288,32C384,32,480,32,576,42.7C672,53,768,75,864,112C960,149,1056,203,1152,218.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className={style.wrap}>
        <a
          className={style.brands}
          href="https://www.instagram.com/ha_10ve/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-instagram" size="3x" />
        </a>
        <a
          className={style.brands}
          href="https://www.facebook.com/profile.php?id=100006044080826"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-facebook" size="3x" />
        </a>
        <a
          className={style.brands}
          href="https://github.com/Wuyuh-sun"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-github" size="3x" />
        </a>
        <h1 className={style.Contacth1}>Contact Me</h1>
        <a className={style.ContactMail} href="" target="_blank" rel="noreferrer">
          wjh0970@gmail.com
        </a>
      </div>
    </>
  );
}
