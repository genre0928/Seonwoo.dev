type HeroTypes = {
  title: string;
};

export default function Hero({ title }: HeroTypes) {
  return (
    <div className="flex gap-2 text-2xl font-bold justify-center">
      <div>icon</div>
      <div>{title}</div>
    </div>
  );
}
