import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const fetchImg = async () => {
        const res = await axios.get(
          `https://picsum.photos/v2/list?page=${page}&limit=9`,
        );
        console.log(res.data);
        setPosts((prevPost) =>
          page == 1 ? res.data : [...prevPost, ...res.data],
        );
      };
      fetchImg();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  const handlePage = () => {
    setPage(page + 1);
  };
  return (
    <PostContext.Provider value={{ posts, loading, error, handlePage }}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
