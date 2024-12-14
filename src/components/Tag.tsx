import { PropsWithChildren } from "react";
import Link from "next/link";
import Text from "@/components/Text";

type TagProps = {
  href?: string;
};

const Tag = (props: PropsWithChildren<TagProps>) => {
  const { href, children } = props;
  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md bg-slate-100 p-2 text-black delay-75 ease-in-out hover:bg-slate-200"
      >
        <Text size="sm">{children}</Text>
      </Link>
    );
  }

  return (
    <div className="rounded-md bg-slate-100 p-2 text-black">
      <Text size="sm">{children}</Text>
    </div>
  );
};

export default Tag;
