import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import { PostHeader } from "./post-header";
import { PostBody } from "./post-body";
import markdownToHtml from "@/lib/markdownToHtml";

type Props = {
  posts: Post[];
};

export function RenderPosts({ posts }: Props) {
  return (
    <section>
      <div className="flex flex-col mb-32">
        {posts.map(async (post) => {
          const contentHtml = await markdownToHtml(post.content);
          return (
            <article key={post.slug} id={post.slug} className="mb-32">
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={contentHtml} />
            </article>
          );
        })}
      </div>
    </section>
  );
}
