const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2e427ec750msh261926f6bab83b9p197157jsn5bfe89e022d6',
    'X-RapidAPI-Host': 'cooking-recipe2.p.rapidapi.com'
  }
}

async function myFunction () {
  const response = await fetch('https://cooking-recipe2.p.rapidapi.com/getbycat/Indian%20Desserts', options)
  const data = await response.json()
  console.log(data)
}

myFunction()
