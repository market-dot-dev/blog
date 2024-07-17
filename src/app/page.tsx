import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { RenderPosts } from "@/app/_components/render-posts";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";
import markdownToHtml from "@/lib/markdownToHtml";


export default async function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="md:fixed top-0 left-0 w-full md:w-2/5 h-full bg-slate-800 text-slate-50 flex flex-col justify-center p-8 lg:py-32 xl:px-32" style={{ backgroundImage: "url(/assets/blog/voronoi.png)" }}>
            <section className="flex-col flex">
              <Link href="/" className="text-xl md:text-2xl text-center md:text-left font-bold tracking-tight leading-tight md:pr-8 font-mono mb-2">
                Changelog
              </Link>
              <h4 className="text-center md:text-left text-md md:text-lg font-extralight">
                Updates from the team building Gitwallet.
              </h4>
            </section>
          </div>
          <div className="w-full md:w-3/5 ml-auto bg-slate-100 text-slate-800 overflow-y-auto p-8 md:p-16">
            {allPosts.length > 0 && <RenderPosts posts={allPosts} />}
          </div>
        </div>
      </Container>
    </main>
  );
}
