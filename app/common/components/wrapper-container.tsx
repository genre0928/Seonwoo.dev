import { cn } from "~/lib/utils";

type WrapperContainerProps = {
  children: React.ReactNode;
  px?: string;
};

export default function WrapperContainer({
  children,
  px,
}: WrapperContainerProps) {
  return (
    <div
      className={cn("px-10 md:px-20 lg:px-200")}
      style={px ? { paddingInline: `${px}px` } : undefined}
    >
      {children}
    </div>
  );
}
