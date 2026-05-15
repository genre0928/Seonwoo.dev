export default function PortfolioCard() {
  return (
    <div className="flex gap-2 bg-blue-500">
      <div className="flex items-center justify-center">이미지</div>
      <div>
        <div>프로젝트명</div>
        <div>활용 스킬</div>
        <div>개발 기간</div>
        <div>참여 인원 및 기여도</div>
      </div>
    </div>
  );
}
