import Hero from "~/common/components/hero";
import PortfolioCard from "../components/portfolio-card";
import IntroductionCard from "~/features/introduction/components/introduction-card";
import { User, Cake, School, Mail, PhoneIcon } from "lucide-react";
import WrapperContainer from "~/common/components/wrapper-container";
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
      icon: Cake,
      title: "생년월일",
      description: "1993.08.25",
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
    <div className="bg-mauve-800 h-96 pt-12">
      <WrapperContainer>
        <div className="space-y-5">
          <Hero title="About me" />
          <div className="grid grid-cols-2 gap-y-3 gap-x-1 justify-items-center">
            {userInfomation.map((info) => {
              return (
                <IntroductionCard
                  icon={info.icon}
                  title={info.title}
                  description={info.description}
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
