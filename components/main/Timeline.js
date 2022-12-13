import { useDispatch } from "react-redux";
import style from "../../styles/myinfo.module.css";
import { expSelectFunc } from "../../store/modules/expSelectSlice";
export default function Timeline(props) {
  // console.dir(props.data);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={style.timeline_data}
        style={{
          position: "absolute",
          left: `calc(${props.data.left} - 10px)`,
        }}
        onClick={() => {
          dispatch(expSelectFunc(props.data));
        }}
      >
        {props.data.title}
      </div>
      <div
        style={{
          width: "20px",
          height: "20px",
          transform: "translate(-50%,-50%)",
          backgroundColor: "darkslateblue",
          boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
          boxSizing: "border-box",
          // border:"1px solid rebeccapurple",
          borderRadius: "50%",
          position: "absolute",
          top: "0px",
          left: `${props.data.left}`,
          cursor: "pointer",
        }}
        onClick={() => {
          dispatch(expSelectFunc(props.data));
        }}
      ></div>
    </>
  );
}
