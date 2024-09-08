import PostList from "../PostList"
import { PostProvider } from "../context/PostContext"

const Contact = () => {
  return (
    
    <div>
      <PostProvider>
        <PostList/>
      </PostProvider>
    </div>
  )
}

export default Contact