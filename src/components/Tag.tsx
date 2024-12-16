import { PropsWithChildren } from "react";
import Text from "@/components/Text";
import clsx from "clsx";

type TagProps = {
  variants?: "primary" | "secondary";
  hoverable?: boolean;
  size?: "sm" | "md" | "lg";
};

const Tag = (props: PropsWithChildren<TagProps>) => {
  const { variants = "primary", size = "md", hoverable, children } = props;

  const baseClasses = clsx("rounded-md p-2 text-sm font-semibold", {
    "bg-blue-100 text-blue-800": variants === "primary",
    "bg-gray-100 text-gray-800": variants === "secondary",
    "px-2 py-0.5": size === "sm",
    "px-3 py-1": size === "md",
    "px-4 py-2 ": size === "lg",
    "bg-slate-100 delay-75 ease-in-out hover:bg-slate-200": hoverable,
  });

  return (
    <div className={baseClasses}>
      <Text size="sm">{children}</Text>
    </div>
  );
};

export default Tag;
