import PostCard from "./PostCard";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={post.id}>
            <PostCard title={post.title} body={post.body} color="#4ae2c6" />
            {index < posts.length - 1 && (
              <hr className="border-t-2 border-gray-300 my-4" />
            )}
          </div>
        ))
      ) : (
        // Mensaje de "No se encontraron resultados"
        <div className="col-span-full text-center text-gray-600 text-lg font-semibold">
            🤷‍♂️ No encontramos coincidencias.
        </div>
      )}
    </div>
  );
}
