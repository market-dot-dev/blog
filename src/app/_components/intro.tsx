import Link from "next/link";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Link href="/" className="text-3xl font-bold tracking-tighter leading-tight md:pr-8">
        market.dev Blog
      </Link>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Updates from the team building market.dev.
      </h4>
    </section>
  );
}
