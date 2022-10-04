import Link from "next/link";

export default function rootHome() {
  return (
    <>
      <h1>관리자 페이지입니다.</h1>
      <ul>
      <li>
          <Link href="/root/about">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href="/root/skill">
            <a>skill</a>
          </Link>
        </li>
        
        <li>
          <Link href="/root/portfolio">
            <a>portfolio</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
