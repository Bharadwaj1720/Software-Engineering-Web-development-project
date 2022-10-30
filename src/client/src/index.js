import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalState } from 'react-hooks-global-state'


const { setGlobalState, useGlobalState } = createGlobalState({
  Gusername: "Bharadwaj",
  Gstatus: "",
  Gtoken: "",
  Gdevice_id: "1"
});

export { useGlobalState, setGlobalState };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
