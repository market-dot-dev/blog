import Container from "@/app/_components/container";
import { RenderPosts } from "@/app/_components/render-posts";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";


export default async function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <div className="flex flex-col md:flex-row">
          <div className="md:fixed top-0 left-0 w-full md:w-2/5 h-full bg-slate-800 text-slate-50 flex flex-col justify-center p-8 lg:py-16 xl:px-16" style={{ backgroundImage: "url(/assets/blog/voronoi.png)" }}>
            <section className="flex-col flex">
              <div className="flex items-center mx-auto md:container"> {/* Add md:justify-start class */}
                <div className="h-50px">
                  <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                    <circle fill="none" stroke="#22c55e" strokeWidth="2" cx="20" cy="25" r="13"> {/* Fix strokeWidth attribute */}
                      {/* <animate attributeName="opacity" dur="3s" values="0;1;0" repeatCount="indefinite" begin="0.1" /> */}
                    </circle>

                    <circle fill="#22c55e" stroke="none" cx="20" cy="25" r="10">
                    <animate attributeName="opacity" dur="1.4s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
                    </circle>
                  </svg>
                </div>

                <div className="flex items-center">
                  <Link href="/" className="text-xl md:text-2xl text-center md:text-left font-bold align-center tracking-tight leading-tight md:pr-8">
                   Changelog
                  </Link>
                </div>
              </div>
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
