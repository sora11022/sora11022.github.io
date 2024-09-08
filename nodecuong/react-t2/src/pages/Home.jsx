import CounterButtons from "../CounterButtons";
import { CounterProvider } from "../context/CounterContext";
import CounterDisplay from "../CounterDisplay";
import Counter from "../components/Counter";
// import CounterReducer from "../reducer/CounterReducer";
// import PostReducer from "../reducer/PostReducer";


const Home = () => {
  return (
    <div className="main  ">
        {/* <CounterDisplay />
        <CounterButtons /> */}
      {/* <CounterReducer/> */}
      {/* <PostReducer/> */}
      <Counter/>
    </div>
  );
};

export default Home;

