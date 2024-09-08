import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PostProvider } from './context/PostContext.jsx';
import { ThemeProvider } from './context/ToggleMode.jsx';
import { Provider } from 'react-redux';
import { store } from './store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PostProvider>
      <ThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </PostProvider>
  </BrowserRouter>,
);
