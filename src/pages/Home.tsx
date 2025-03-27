import { useEffect, useState } from "react";
import { getPosts } from "../services/api";
import PostList from "../components/PostList";
import SearchBar from "../components/SearchBar";

// Definir la estructura de los posts
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    async function fetchData() {
      setLoading(true); // Activar estado de carga
      const data = await getPosts();
      setPosts(data);
      setFilteredPosts(data);
      setLoading(false); // Desactivar estado de carga
    }
    fetchData();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">Lista de Publicaciones</h1>
      <SearchBar onSearch={handleSearch} />

      {loading ? (
        <div className="d-flex justify-content-center mt-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        <PostList posts={filteredPosts} />
      )}
    </div>
  );
}
