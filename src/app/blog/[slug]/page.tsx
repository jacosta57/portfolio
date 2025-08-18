export async function generateStaticParams() {
  return ["hello", "world"].map((slug) => ({
    slug: slug,
  }));
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default function BlogPage({ params }: Params) {
  return (
    <div className="container mt-4">
      <h1>Blog</h1>
      <p>Blog posts will be displayed here</p>
    </div>
  );
}
