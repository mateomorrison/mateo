import Router from "next/router";

export default function QueryApp() {
  const router = Router();
  const { id } = router.query;
  if (!id) return;
  return <h1>works!</h1>;
}
