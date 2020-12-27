export {}

const swapiUrl = 'https://swapi.dev/api/films/'
const response = await fetch(swapiUrl)
const json = await response.json()

console.log(json)