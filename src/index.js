import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import Header from './components/Header';
import Main from './components/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>
);


