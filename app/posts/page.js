import Image from "next/image";
import Link from "next/link";
import { allPosts } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import { ArrowRightIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { TitleText } from "@/components";

function Post() {
  return (
    <div className="container my-12 mx-auto md:px-6">
      <section className="text-center">
        <TitleText
          title={<>Artikel Kegiatan Laksamana 2023</>}
          textStyles="text-center"
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {allPosts.map((post) => (
            <article key={post._id} className="mb-12">
              <Card>
                {post.image && (
                  <div className="relative w-full h-60">
                    <Link href={post.slug}>
                      <Image
                        className=" m-0 w-full object-cover"
                        src={post.image}
                        alt={post.title}
                        fill
                      />
                    </Link>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>
                  <div className={"w-full flex bg-[#00017F] p-2 h-[10%]"}>
                    <Link href={post.slug} className="no-underline text-lg text-white pixeloid-sans">
                      {post.title}
                    </Link>
                  </div>
                  </CardTitle>
                  <CardDescription className="space-x-1 text-xs">
                    <span>{format(parseISO(post.date), "MMMM dd, yyyy")}</span>
                    <span>{` • `}</span>
                    <span>{post.readingTime.text}</span>
                    {/* <span>{` • `}</span> */}
                    {/* <span>
                      <Link
                        href={`/categories/${encodeURIComponent(
                          post.category.toLowerCase()
                        )}`}
                        className="underline underline-offset-2"
                      >
                        {post.category}
                      </Link>
                    </span> */}
                  </CardDescription>
                </CardHeader>
                {post.description && (
                  <CardContent className="text-left">{post.description}</CardContent>
                )}
                <CardFooter>
                  <Link
                    href={post.slug}
                    className="inline-flex items-center W95FA m-2 text-primary-blue py-2 px-3 option text-center border-4 bg-pink-400 border-white"
                  >
                    <span>Selengkapnya</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>
                </CardFooter>
              </Card>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Post;
