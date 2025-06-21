type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-none">
      <div
        className="prose prose-lg prose-neutral max-w-none 
                   prose-headings:text-accent-7 
                   prose-a:text-blue-600 prose-a:hover:text-blue-500
                   dark:prose-invert dark:prose-headings:text-white"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
