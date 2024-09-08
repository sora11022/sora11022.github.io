import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CounterProvider } from "./context/CounterContext.jsx";
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <CounterProvider>
      <App />
    </CounterProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
