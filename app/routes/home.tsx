import type { Route } from "./+types/home";
import { Navigation } from "~/common/components/navigation";
import Portfolio from "~/features/portfolio/pages/portfolio";
import Introduction from "~/features/introduction/pages/introduction";
import CommonWrapper from "~/common/components/wrapper-container";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Seonwoo.dev" }, { name: "description", content: "꾸준함" }];
}

export default function Home() {
  return (
    <div className="min-h-screen min-w-[380px] overflow-overlay">
      <Navigation />
      <section>
        <Introduction />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <div className="h-[2000px]">asd</div>
      <span>호로록</span>
    </div>
  );
}
