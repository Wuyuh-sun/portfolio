import {useRouter} from 'next/router';

export default function SubID() {
  const router = useRouter();
  return(
    <>
      <h1>{router.query.id}</h1>
      <h2>{process.env.NEXT_PUBLIC_TEST}</h2>
    </>
  )
}
