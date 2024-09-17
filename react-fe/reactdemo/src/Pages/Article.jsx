import React, { useEffect, useState } from 'react';
import CounterReducer from '../Reducer/CounterReducer';

const Article = () => {
  useEffect(() => {
    document.title = 'Article';
  }, []);
  return (
    <div className="con">
      <CounterReducer />
    </div>
  );
};

export default Article;
