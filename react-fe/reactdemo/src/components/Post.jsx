import React from 'react'
import '../styles/Post.scss'
const Post = ({id,author,download_url}) => {
  return (
    <div className='con_item shadow-xl'>
        <div className="con_item--imgcon" key={id}>
            <img src={download_url} alt="" />
            <div className="con_item--imgcon--text">
                <p className='author'>{author}</p>
                <p className='date'>02 May</p>
            </div>
        </div>
    </div>
  )
}

export default Post