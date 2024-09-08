import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Main from './Layout/Main';
import Article from './Pages/Article';
import Faq from './Pages/Faq';
import Pricing from './Pages/Pricing';
import Login from './Pages/Login';
import Todo from './Pages/Todo';
import { useContext } from 'react';
import { ThemeContext } from './context/ToggleMode';
function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`${theme ? 'dark' : ''}`}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/article" element={<Article />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/home" element={<About />}></Route>
            <Route path="/pricing" element={<Pricing />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
