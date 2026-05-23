import Hero from "~/common/components/hero";
import PortfolioCard from "../components/portfolio-card";
import IntroductionCard from "~/features/introduction/components/introduction-card";
import {
  Home,
  User,
  Cake,
  School,
  Mail,
  PhoneIcon,
  LinkIcon,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import WrapperContainer from "~/common/components/wrapper-container";
import { SiVelog } from "react-icons/si";
export default function Portfolio() {
  const userInfomation = [
    {
      icon: User,
      title: "이름",
      description: "김선우",
    },
    {
      icon: Cake,
      title: "생년월일",
      description: "1993.08.25",
    },
    {
      icon: School,
      title: "학력",
      description: "부경대학교\n자원경제학부 졸업",
    },
    {
      icon: Home,
      title: "홈페이지",
      link: [
        {
          linkIcon: FaGithub,
          linkName: "깃허브",
          linkPath: "https://github.com/genre0928",
        },
        {
          linkIcon: SiVelog,
          linkName: "벨로그",
          linkPath: "https://velog.io/@sseunu",
        },
      ],
    },
    {
      icon: Mail,
      title: "이메일",
      description: "1993.08.25",
    },
    {
      icon: PhoneIcon,
      title: "연락처",
      description: "010-5519-4908",
    },
  ];
  return (
    <div className="bg-mauve-800 h-[80vh] pt-12">
      <WrapperContainer>
        <div className="space-y-5">
          <Hero icon={LinkIcon} title="About me" />
          <div className="grid grid-cols-2 gap-y-3 gap-x-5 justify-items-center">
            {userInfomation.map((info) => {
              return (
                <IntroductionCard
                  icon={info.icon}
                  title={info.title}
                  description={info.description}
                  link={info.link}
                />
              );
            })}
          </div>
          <PortfolioCard />
        </div>
      </WrapperContainer>
    </div>
  );
}
