import { Icon, type LucideIcon } from "lucide-react";

type HeroTypes = {
  icon: LucideIcon;
  title: string;
};

export default function Hero({ icon: Icon, title }: HeroTypes) {
  return (
    <div className="flex gap-2 text-2xl font-bold justify-center">
      <div>
        <Icon className="size-8" />
      </div>
      <div>{title}</div>
    </div>
  );
}
