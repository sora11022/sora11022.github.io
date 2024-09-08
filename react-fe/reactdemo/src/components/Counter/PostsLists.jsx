import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, deletePost, fetchPosts } from '../../postsSlice';

const PostsLists = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);
  const [newTitle, setnewTitle] = useState('');

  useEffect(() => {
    if (!loading) {
      dispatch(fetchPosts());
    }
  }, []);
  if (loading) {
    return <p>loading..</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
  };

  const handleAddPost = () => {
    const newPost = {
      id: posts.length + 1,
      title: newTitle,
    };
    dispatch(addPost(newPost));
    setnewTitle('');
  };

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.id}</p>
            <h1>{post.title}</h1>
            <button
              className="bg-blue-500"
              onClick={() => handleDeletePost(post.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setnewTitle(e.target.value)}
      />
      <button onClick={handleAddPost}>Add</button>
    </div>
  );
};

export default PostsLists;
