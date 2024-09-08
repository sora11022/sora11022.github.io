import React, { useContext } from 'react';
import '../styles/home.scss';
import Post from '../components/Post';
import { PostContext } from '../context/PostContext';
const Home = () => {
  const { posts, loading, error, handlePage } = useContext(PostContext);
  if (loading) {
    return <p>Loading</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }
  return (
    <div className="article">
      <div className="con">
        {posts.map((item, index) => (
          <Post key={item.id}
            id={item.id}
            author={item.author}
            download_url={item.download_url}
          />
        ))}
      </div>
      <button onClick={handlePage}>More article</button>
    </div>
  );
};

export default Home;
