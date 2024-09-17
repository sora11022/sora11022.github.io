import React, { useEffect } from 'react'
import PostsLists from '../components/Counter/PostsLists'

const About = () => {
  useEffect(() => {
    document.title = "About"
  },[])
  return (
    <PostsLists/>
  )
}

export default About
