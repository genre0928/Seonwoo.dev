import { Settings, User } from "lucide-react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { Link } from "react-router";

export const Navigation = () => {
  return (
    <nav className="w-full h-12 flex gap-1 p-2 items-center justify-between border-primary fixed top-0 left-0 z-10">
      <Link to="/" className="flex gap-1 group">
        <Settings className="group-hover:animate-spin" />
        <div className="font-bold text-md">Seonwoo.Dev</div>
      </Link>
      <div className="flex gap-3">
        <Link to="/about">
          <div className="text-sm">About</div>
        </Link>
        <a href="#portfolio">
          <div className="text-sm">Portfolio</div>
        </a>
      </div>
      <AnimatedThemeToggler fromCenter />
    </nav>
  );
};
