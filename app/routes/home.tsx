import { AnimatedThemeToggler } from "~/common/components/ui/animated-theme-toggler";
import type { Route } from "./+types/home";
import { Navigation } from "~/common/components/navigation";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Seonwoo.dev" }, { name: "description", content: "꾸준함" }];
}

export default function Home() {
  return (
    <div className="min-h-screen mx-10 my-10 bg-orange-500">
      <Navigation />
      <div>글자 색</div>
      <div className="h-[2000px]">asd</div>
      <span>호로록</span>
    </div>
  );
}
