import { useState } from "react";
import PostList from "./PostList";
import SearchBar from "./SearchBar";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function PostContainer({ posts }: { posts: Post[] }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (query: string) => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.body.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <PostList posts={filteredPosts} />
    </div>
  );
}
