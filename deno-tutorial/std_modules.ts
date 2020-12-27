import { v4 } from 'https://deno.land/std@0.82.0/uuid/mod.ts'
import { walk, WalkEntry } from 'https://deno.land/std@0.82.0/fs/mod.ts'
import { serve } from 'https://deno.land/std@0.82.0/http/server.ts'

const uniqueId = v4.generate()
console.log(uniqueId)

let files: WalkEntry[] = []
for await (const file of walk('.')) {
    files.push(file)
}
files.forEach((file, i) => console.log(i, file))

const PORT = 4444
const server = serve({port: PORT})

console.log(`Listening on localhost:${PORT}`)
for await (const request of server) {
    console.log('Request made')
    request.respond({body: request.url})
}