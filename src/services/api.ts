import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Definir la estructura del post
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// Especificar que `getPosts` devuelve una promesa con un array de `Post`
export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get<Post[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
