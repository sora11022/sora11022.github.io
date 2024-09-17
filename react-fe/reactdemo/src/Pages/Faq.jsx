import React from 'react';
import Counter from '../components/Counter/Counter';

const Faq = () => {
  useEffect(() => {
    document.title = 'Faq';
  }, []);
  return <Counter />;
};

export default Faq;
