import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './hooks/ScrollToTop';
import BasketStore from './store/BasketStore'
import UserStore from './store/UserStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
      basket: new BasketStore(),
      user: new UserStore()
      }}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Context.Provider>
);
