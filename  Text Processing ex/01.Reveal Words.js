function solve(wordsForReplace, text){
let wordsArr = wordsForReplace.split(', ')

for(let word of wordsArr){
    let template ='*'.repeat(word.length)
    text = text.replace(template,word)
}
console.log(text);

}
solve('great',
'softuni is ***** place for learning new programming languages'
)