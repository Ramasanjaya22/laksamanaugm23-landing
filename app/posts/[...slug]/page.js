import React from "react";
import Image from "next/image";
import Link from "next/link";
import { allPosts } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Mdx } from "@/components/mdx-component";

async function getPostFromParams(params) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    return null;
  }

  return post;
}

const PostPage = async ({ params }) => {
  const post = await getPostFromParams(params);
  if (!post) {
    notFound();
  }
  return (
    <div className="container w-5/6 my-12 mx-auto md:px-6">
      <article
        className="p-4 bg-[#D9D9D9] border-4 border-white text-sm lg:text-md"
        style={{ borderStyle: "outset" }}
      >
        <div
          className={"w-full bg-[#D9D9D9] h-[10%] border-b-4 border-[#A3A3A3]"}
        >
          <div className={"w-full flex bg-[#00017F] p-2 h-[10%]"}>
            <p className={"text-white text-xl text-center px-4 pixeloid-sans"}>
              ARTIKEL LAKSAMANA
            </p>
            <div
              className={
                "text-md bg-[#D9D9D9] max-h-8 max-w-8 px-1 text-center border-4 ml-auto pixeloid-sans"
              }
              style={{ borderStyle: "outset" }}
            >
              X
            </div>
          </div>
        </div>

        {post.image && (
          <div className="relative w-full h-[345px] mb-12">
            <Image
              className="w-full object-cover border-white"
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ borderStyle: "outset" }}
            />
          </div>
        )}

        <header>
          <h1 className="mb-2 text-lg lg:text-3xl font-bold text-pink-600 lg:text-center">
            {post.title}
          </h1>
          {post.description && (
            <p className="lg:text-xl mt-0 mb-6 text-gray-700">
              {post.description}
            </p>
          )}
          <p className="space-x-1 text-xs text-gray-500">
            <span>{format(parseISO(post.date), "MMMM dd, yyyy")}</span>
            <span>{` • `}</span>
            <span>{post.readingTime.text}</span>
            {/* <span>{` • `}</span> */}
            {/* <span>
              <Link
                href={`/categories/${encodeURIComponent(
                  post.category.toLowerCase()
                )}`}
              >
                {post.category}
              </Link>
            </span> */}
          </p>
        </header>
        <hr className="my-6" />
        <Mdx code={post.body.code} />
      </article>
    </div>
  );
};

export default PostPage;
