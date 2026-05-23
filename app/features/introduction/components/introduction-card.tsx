import { Icon, type LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

type linkProps = {
  linkIcon: LucideIcon | IconType;
  linkName: string;
  linkPath: string;
};

type IntroductionCardProps = {
  icon: LucideIcon;
  title: string;
  description?: string;
  link?: linkProps[];
};

export default function IntroductionCard({
  icon: Icon,
  title,
  description,
  link,
}: IntroductionCardProps) {
  return (
    <div className="flex gap-3 min-h-16 min-w-40">
      <div className="flex justify-center items-center">
        <Icon className="size-8" />
      </div>
      <div className="flex flex-col justify-center w-full">
        <div className="text-xl font-bold w-full ">{title}</div>
        {description ? (
          <div className="text-sm whitespace-pre-line w-full min-h-8">
            {description}
          </div>
        ) : link ? (
          <div className="flex flex-col gap-1">
            {link.map((li) => (
              <a
                key={li.linkPath}
                href={li.linkPath}
                target="_blank"
                rel="noreferrer"
                className="text-sm leading-tight flex items-center gap-x-1"
              >
                <li.linkIcon className="size-4 shrink-0" />
                {li.linkName}
              </a>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
