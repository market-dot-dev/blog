import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const isVideo = src.toLowerCase().endsWith('.mp4');

  const media = isVideo ? (
    <video
      src={src}
      title={`Cover Video for ${title}`}
      autoPlay
      muted
      playsInline
      loop
      className={cn("shadow-sm mx-auto w-full max-w-[800px] rounded-xl", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
    />
  ) : (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm mx-auto rounded-xl", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={800}
      height={500}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {media}
        </Link>
      ) : (
        media
      )}
    </div>
  );
};

export default CoverImage;
