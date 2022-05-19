import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const data=[
  {
    fname:"john",
    arrears:false,
    email:"john@gmail.com"
  },
  {
    fname:"john",
    arrears:false,
    email:"john@gmail.com"
  },
  {
    fname:"john",
    arrears:false,
    email:"john@gmail.com"
  }
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App studentdata={data}/>
 
);


