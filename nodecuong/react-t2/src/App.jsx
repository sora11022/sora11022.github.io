import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Main from "./layout/Main";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}

        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        {/* <Route path="/login" element={<Login/>}></Route> */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
