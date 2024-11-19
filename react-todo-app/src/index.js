import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React 18 버전에서 드래그 앤 드랍 사용 시 발생하는 에러로 인한 <React.StrictMode></React.StrictMode> 제거
  // Invariant failed: Cannot find droppable entry with id
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
