/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
/* eslint-enable */
import App from './App.tsx';
import ResetStyle from './style/ResetStyle.ts';
import GlobalStyle from './style/GlobalStyle.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
