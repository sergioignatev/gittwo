import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Left from './Left';
import Right from './Right';
import reportWebVitals from './reportWebVitals';
import './sass.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <div  className="App">

     <App />
   </div>
 
);
const left=ReactDOM.createRoot(document.getElementById("left"));

left.render(<Left/>)
const right=ReactDOM.createRoot(document.getElementById("right"));
right.render(<Right/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

