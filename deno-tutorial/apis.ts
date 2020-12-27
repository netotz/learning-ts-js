export {}

const response = await fetch('https://swapi.dev/api/films/')
const json = await response.json()

console.log(json)