import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../styles/myinfo.module.css";

export default function InfoItem(props) {
  return (
    <>
      <div style={{
        width:"300px",
        height:"100px"
      }}>
        <div className={style.InfoItem_wrap}>
          {props.icon}
          <div className={style.InfoItem_wrap_div}>
            <div>{props.title}</div>
            <div>{props.content}</div>
          </div>
        </div>
      </div>
    </>
  );
}
