import { MDXRemote } from "next-mdx-remote/rsc";

type MdxProps = {
  source: string;
};

const Mdx = async (props: MdxProps) => {
  const { source } = props;

  return <MDXRemote source={source} options={{ parseFrontmatter: true }} />;
};

export default Mdx;
