import PostCard from "./PostCard";

export default function PostList({ posts }: { posts: { title: string; body: string }[] }) {
  return (
    <div className="container mt-4">
      <div className="row g-4">
        {posts.map((post, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <PostCard title={post.title} body={post.body} />
          </div>
        ))}
      </div>
    </div>
  );
}
