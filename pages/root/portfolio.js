import style from "../../styles/root.module.css";

export default function portfolio() {
  return (
    <>
      <h1>PortFolio Data Insert</h1>

      {/* 포트폴리오 미리보기 추가 */}
      <form action="" className={style.portfolio_input}>
        <label htmlFor="title">title</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="date">date</label>
        <input type="text" name="date" id="date" />
        <label htmlFor="content">content</label>
        <textarea name="content" id="content"></textarea>
        <label htmlFor="github">github_Link</label>
        <input type="text" name="github" id="github" />
        <label htmlFor="use_skill">use_skill</label>
        <input type="text" name="use_skill" id="use_skill" />
        <label htmlFor="date">date</label>
        <input type="text" name="date" id="date" />
        <label htmlFor="ex_img">ex_img</label>
        <input type="file" name="ex_img" id="ex_img" />
        <div className={style.img_view}>
          <div>Img_view</div>
          <div></div>
        </div>

      </form>

    </>
  );
}
