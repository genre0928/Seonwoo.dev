import { Icon, type LucideIcon } from "lucide-react";

type IntroductionCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function IntroductionCard({
  icon: Icon,
  title,
  description,
}: IntroductionCardProps) {
  return (
    <div className="flex gap-3 min-h-16 min-w-40">
      <div className="flex justify-center items-center">
        <Icon className="size-8" />
      </div>
      <div className="flex flex-col justify-center w-full">
        <div className="text-xl font-bold w-full ">{title}</div>
        <div className="text-sm whitespace-pre-line w-full min-h-8">
          {description}
        </div>
      </div>
    </div>
  );
}
