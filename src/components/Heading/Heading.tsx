import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  children: React.ReactNode;
  className?: string;
};

const sizeStyles = {
  xl: "text-4xl leading-tight md:text-5xl md:leading-tight",
  lg: "text-3xl leading-tight md:text-4xl md:leading-tight",
  md: "text-2xl leading-tight md:text-3xl md:leading-tight",
  sm: "text-xl leading-tight md:text-2xl md:leading-tight",
  xs: "text-lg leading-tight md:text-xl md:leading-tight",
};

export function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: HeadingProps) {
  return (
    <Comp className={clsx("font-sans uppercase", sizeStyles[size], className)}>
      {children}
    </Comp>
  );
}
