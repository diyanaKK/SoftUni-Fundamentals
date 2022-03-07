function solve(text, word){
let newText = text.split(' ')
count = 0

for(let line of newText){
    if(line === word){
        count++
    }
}
console.log(count);
}
solve('This is a word and it also is a sentence',
'is')