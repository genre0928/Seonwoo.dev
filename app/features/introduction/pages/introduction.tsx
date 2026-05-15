import CommonWrapper from "~/common/components/wrapper-container";
import { Button } from "~/common/components/ui/button";
import WrapperContainer from "~/common/components/wrapper-container";

export default function Introduction() {
  return (
    <div className="relative h-[80vh]">
      <img
        src="/public/image/aboutme.jpg"
        className="object-cover w-full h-full"
      ></img>
      <WrapperContainer>
        <div className="absolute  text-center inset-0 top-1/3 space-y-3">
          <div className="font-bold text-2xl">
            <div>김선우</div>
            <div>프론트엔드 포트폴리오</div>
          </div>
          <div className="text-md">문제를 코드로 풀어가고자 하는 개발자</div>
          <Button>
            <a href="#portfolio">바로가기 ↓</a>
          </Button>
        </div>
      </WrapperContainer>
    </div>
  );
}
