import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div>
      <div className="mb-5">
        {/* <CoverImage slug={slug} title={title} src={coverImage} /> */}
      </div>
      <h3 className="text-2xl font-bold mb-3 tracking-tight">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="flex gap-4 text-lg mb-4">
        <DateFormatter dateString={date} />
        <Avatar name={author.name} picture={author.picture} />
      </div>

      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
