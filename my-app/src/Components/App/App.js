import React, { useState } from 'react';
import './App.css';
import Input from '../Input';
import List from '../List';
import ListItem from '../ListItem';



function App() {
  const [userInput, setUserInput] = useState('')


  function handleChange(e) {
    const newInput = e.target.value
    setUserInput(newInput)
  }

  function handleClick() {
   
  }

  return (
    <div className="App">
      <header>
        <a href="www.google.com">Home</a>
        <a href="www.google.com">About</a>
        <a href="www.google.com">Countries</a>
      </header>
      <h1>Food Tripper</h1>
      <Input />
      <List />
      <ListItem />
      <footer>Keira and Flavia</footer>
    </div>
  );
}

export default App;
