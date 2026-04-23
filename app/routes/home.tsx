import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Seonwoo.dev" }, { name: "description", content: "꾸준함" }];
}

export default function Home() {
  return <div>안녕</div>;
}
