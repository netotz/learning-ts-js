export {}

const text = await Deno.readTextFile('text.txt')
console.log(text)

await Deno.writeTextFile('text.txt', ' Again!', {'append': true})
