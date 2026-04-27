import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

export const Navigation = () => {
  return (
    <nav className="w-full flex gap-5 bg-blue-500">
      <div>Seonwoo Dev</div>
      <div className="flex gap-5">
        <div>About</div>
        <div>Portpofio</div>
        <div>Skills</div>
      </div>
      <AnimatedThemeToggler fromCenter />
    </nav>
  );
};
