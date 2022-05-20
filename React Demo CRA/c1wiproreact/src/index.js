import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TodoComponent from './components/TodoComponent';
import CounterComponent from "./components/CounterComponent"
const data=[
  {
      title:"react",
      text:"solve react problems"
  }
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
<TodoComponent></TodoComponent>

</div>
  
);


