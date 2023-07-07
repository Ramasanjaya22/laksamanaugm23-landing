import Link from "next/link";
import React from "react";

const ArticleSection = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Latest articles
        </h2>

        <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
          <div className="mb-6 lg:mb-0">
            <div
              className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg"
                className="w-full"
                alt="Louvre"
              />
              <Link href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
              </Link>
            </div>

            <h5 className="mb-3 text-lg font-bold">Welcome to California</h5>
            <div className="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500">
              Travels
            </div>
            <p className="mb-6 text-neutral-500 dark:text-neutral-300">
              <small>
                Published <u>13.01.2022</u> by
                <Link href="#!">Anna Maria Doe</Link>
              </small>
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
              vulputate. Ut vulputate est non quam dignissim elementum. Donec a
              ullamcorper diam.
            </p>
          </div>

          <div className="mb-6 lg:mb-0">
            <div
              className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/032.jpg"
                className="w-full"
                alt="Louvre"
              />
              <Link href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
              </Link>
            </div>

            <h5 className="mb-3 text-lg font-bold">Exhibition in Paris</h5>
            <div className="mb-3 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="mr-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 ```jsx
            008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                />
              </svg>
              Art
            </div>
            <p className="mb-6 text-neutral-500 dark:text-neutral-300">
              <small>
                Published <u>12.01.2022</u> by
                <Link href="#!">Halley Frank</Link>
              </small>
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
              orci, nec ornare metus semper sed. Integer volutpat ornare erat
              sit amet rutrum.
            </p>
          </div>
          <div className="mb-6 lg:mb-0">
            <div
              className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/032.jpg"
                className="w-full"
                alt="Louvre"
              />
              <Link href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
              </Link>
            </div>

            <h5 className="mb-3 text-lg font-bold">Exhibition in Paris</h5>
            <div className="mb-3 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="mr-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 ```jsx
            008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                />
              </svg>
              Art
            </div>
            <p className="mb-6 text-neutral-500 dark:text-neutral-300">
              <small>
                Published <u>12.01.2022</u> by
                <Link href="#!">Halley Frank</Link>
              </small>
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
              orci, nec ornare metus semper sed. Integer volutpat ornare erat
              sit amet rutrum.
            </p>
          </div>
          <div className="mb-6 lg:mb-0">
            <div
              className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/032.jpg"
                className="w-full"
                alt="Louvre"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
              </a>
            </div>

            <h5 className="mb-3 text-lg font-bold">Exhibition in Paris</h5>
            <div className="mb-3 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="mr-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 ```jsx
            008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                />
              </svg>
              Art
            </div>
            <p className="mb-6 text-neutral-500 dark:text-neutral-300">
              <small>
                Published <u>12.01.2022</u> by
                <a href="#!">Halley Frank</a>
              </small>
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
              orci, nec ornare metus semper sed. Integer volutpat ornare erat
              sit amet rutrum.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleSection;
