import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router.query);
  const [title, id] = router.query.params;
  return <h4>{title}</h4>;
}
