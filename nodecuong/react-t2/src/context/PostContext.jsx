import axios from "axios";
import { createContext, useEffect, useState } from "react";

const PostContext = createContext();

const PostProvider = ({children}) => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchPosts = async () => {
            try{
                const res = await axios.get("https://jsonplaceholder.typicode.com/postsa")

                setPosts(res.data)
            }catch(error){
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    },[])

    return (
        <PostContext.Provider value={{posts, loading , error }}>
            {children}
        </PostContext.Provider>
    )
}

export {PostContext, PostProvider} 