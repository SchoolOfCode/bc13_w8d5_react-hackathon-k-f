import React, { useState, useEffect } from 'react';
import './App.css';
import Input from '../Input';
import List from '../List';

const initialResults = [ {
    title: "Chicken Biriyani",
    category: "Indian",
    url: "www.indianfood.com",
    img: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe-500x500.jpg",
    source: "Indian Recipes",
  },
  {
    title: "Carbonara",
    category: "Italian",
    url: "www.italianfood.com",
    img: "https://www.simplyrecipes.com/thmb/G0WpDNn_iGeaSImHqH2TGiG8rjY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Spaghetti-Carbonara-LEAD-7-82d6bacf7f3848a4943b14712ab205ff.jpg",
    source: "Italian Recipes",
  }]
  
function App() {
  const [userInput, setUserInput] = useState('')
  const [results, setResults] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {    
    async function getResults () {
      const response = await fetch('https://ig-food-menus.herokuapp.com/best-foods')
      const data = await response.json()
      setResults(data);
      data.map(recipe => console.log(recipe.country))
    } 
    getResults()
  }, [])

  function handleChange(e) {
    setUserInput(e.target.value)
  }

  function handleClick() {
    const newResults = results.filter(recipe => recipe.country.toUpperCase().split(" ").includes(userInput.toUpperCase()) || recipe.country.toUpperCase() === userInput.toUpperCase());
    setList(newResults);
  }

  return (
    <div className="App">
      <header>
        <a href="www.google.com">Home</a>
        <a href="www.google.com">About</a>
        <a href="www.google.com">Countries</a>
      </header>
      <h1>Food Tripper</h1>
      <Input handleClick={handleClick} handleChange={handleChange}/>
      <List results={list} />
      <footer>Keira and Flavia</footer>
    </div>
  );
}

export default App;
