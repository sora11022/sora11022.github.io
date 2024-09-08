import React, { useContext } from 'react'
import { PostContext } from './context/PostContext'

const PostList = () => {

    const { posts, loading, error} = useContext(PostContext)    
    
    if(loading) return <p>Loading ...</p>
    if(error) return <p className='text-red-500'>{error.message}</p>

  return (
    <ul>
        {
            posts.map(post => (
                <li key={post.id}>
                    <p>{post.id}</p>
                    <p>{post.title}</p>
                </li>   
            ))
        }

    </ul>
  )
}

export default PostList