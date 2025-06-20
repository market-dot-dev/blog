import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="text-center text-balance mb-4 md:mb-8">
        <DateFormatter dateString={date} />
      </div>

      <div className="mb-8 md:mb-16 sm:mx-0">
        {coverImage && (
          <CoverImage title={title} src={coverImage} />
        )}
      </div>
      
    </>
  );
}
