import React from 'react';
import './App.css';
import ToDoList, { Item } from "./components/ToDoList";

const initialList:Item[] = [
  {
    task: "Pick up Milk",
    priority: 1,
  },
  {
    task: "Buy Eggs",
    priority: 2,
  },
  {
    task: "Buy Bread",
    priority: 3,
  },
];

function App() {
  return (
    <div className="App">
      <br />
      <ToDoList items={initialList} />
    </div>
  );
}

export default App;
