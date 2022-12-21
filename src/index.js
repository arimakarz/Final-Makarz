import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { CartContextProvider } from './contexts/CartContext';

const firebaseConfig = {
  apiKey: "AIzaSyDtzKYfJIFdpsXjPniBEALxmha0bhDOnVE",
  authDomain: "milanlibros-8e7fc.firebaseapp.com",
  projectId: "milanlibros-8e7fc",
  storageBucket: "milanlibros-8e7fc.appspot.com",
  messagingSenderId: "976403324359",
  appId: "1:976403324359:web:5bc0d134c25bb843020de2",
  measurementId: "G-JG3KE2138H"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
