function solve(text, word){
let censored = '*'.repeat(word.length)


let newText = text.replace(word, censored)

while(newText.includes(word)){
    newText = newText.replace(word, censored) 
}
console.log(newText);
}
solve('this is a town with town','town')