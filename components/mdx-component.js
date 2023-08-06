import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

const mdxComponents = {
  Image,
};

function Mdx({ code }) {
  const MDXContent = useMDXComponent(code);

  return <MDXContent components={mdxComponents} />;
}

export { Mdx };
