function solve(word, text){

let sentence = text.toLowerCase()
let wordToLower = word.toLowerCase()
let sentenceAsArray = sentence.split(' ')

if(!sentenceAsArray.includes(wordToLower)){
  console.log(`${wordToLower} not found!`);
}else {
  console.log(wordToLower);
}

}
solve('python',
'JavaScript is the best programming language')