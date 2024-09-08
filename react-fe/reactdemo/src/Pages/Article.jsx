import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CounterReducer from '../Reducer/CounterReducer'

const Article = () => {

  return (
   <div className="con">
      <CounterReducer/>
   </div>
  )
}

export default Article