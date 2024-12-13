import { PropsWithChildren } from "react";
import clsx from "clsx";

type TextProps = {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  weight?: "normal" | "bold" | "extrabold";
  color?: "gray" | "white" | "black" | "primary";
  className?: string;
  as?: React.ElementType;
};

const Text = (props: PropsWithChildren<TextProps>) => {
  const {
    size = "md",
    weight = "normal",
    color,
    as: Component = "p",
    className,
    children,
  } = props;

  const baseClasses = clsx(
    {
      "text-sm": size === "sm",
      "text-base": size === "md",
      "text-lg": size === "lg",
      "text-xl": size === "xl",
      "text-2xl": size === "2xl",
      "text-3xl": size === "3xl",
      "font-normal": weight === "normal",
      "font-bold": weight === "bold",
      "font-extrabold": weight === "extrabold",
      "text-gray-700": color === "gray",
      "text-black-700": color === "black",
      "text-white-700": color === "white",
      "text-[var(--primary)]": color === "primary", // CSS 변수 사용
    },
    className
  );

  return <Component className={baseClasses}>{children}</Component>;
};
export default Text;
