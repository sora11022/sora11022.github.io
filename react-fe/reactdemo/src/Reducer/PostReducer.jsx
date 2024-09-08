import { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  post: [],
  loading: true,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        post: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_ERROR':
      return {
        post: [],
        loading: false,
        error: action.payload,
      };
    case 'FETCH_INIT':
      return {
        ...state,
        loading: true,
        error: null,
      };
  }
}

function PostReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
      } catch (err) {
        dispatch({ type: 'FETCH_ERROR', payload: err.message });
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {state.loading ? (
        <p>Loading..</p>
      ) : state.error ? (
        <p>Error: {state.error}</p>
      ) : (
        <div>
          <h2>Post</h2>
          <ul>
            {state.post.map((post) => (
              <li key={post.id}>
                <h3>{post.id}</h3>
                <p>{post.title}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PostReducer;
