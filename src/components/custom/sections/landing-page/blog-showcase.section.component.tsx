import Link from "next/link";
import Image from "next/image";

export default function BlogShowcaseSection() {
  const articles = [
    {
      id: 1,
      image:
        "https://seo-heist.s3.amazonaws.com/user_2cxTR5I0BjOLeNCnee3qUze0LUo/1af01aca-6ce1-4a3f-8e54-e945e3104889.png",
      title: "The Importance of Storytelling in Modern Branding",
      date: "2024-04-15 21:16:04.765648-05",
    },
    {
      id: 2,
      image:
        "https://seo-heist.s3.amazonaws.com/user_2cxTR5I0BjOLeNCnee3qUze0LUo/96bf3bb0-9e15-4745-b966-91d719651429.png",
      title: "How to Choose the Right Dog for Your Lifestyle",
      date: "2024-04-16 08:29:32.188999-05",
    },
    {
      id: 3,
      image:
        "https://seo-heist.s3.amazonaws.com/user_2cxTR5I0BjOLeNCnee3qUze0LUo/36292d36-cfae-4106-8d59-ace222f4bc82.png",
      title: "Top Automation Testing Suites for Seamless Software Testing",
      date: "2024-04-16 15:20:52.368844-05",
    },
  ];
  return (
    <section
      id="blog-showcase"
      className="pt-10 w-full flex flex-row justify-center"
    >
      <div className="lg:w-2/3 p-4">
        <h1 className="scroll-m-20 text-3xl md:text-4xl tracking-tight font-semibold text-center">
          Some sample blog posts
        </h1>
        <p className="text-gray-500 border-b dark:border-neutral-800 pb-4">
          Some brief description of blog posts here
        </p>
        <div className="mt-5 flex flex-col lg:flex-row gap-5">
          {articles.map((article) => (
            <Link href={"/"} key={article?.id}>
              <article className="flex flex-col space-y-2 p-4 rounded-md border dark:bg-black">
                <Image
                  src={article?.image!}
                  alt={""}
                  width={804}
                  height={452}
                  className="rounded-md border dark:border-neutral-800 bg-muted transition-colors"
                />
                <h2 className="text-md lg:text-lg font-bold">
                  {article?.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {new Date(article?.date!)?.toLocaleDateString()}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
