function solve(input){
let wordsWithDefinition = input.shift().split(' | ')

let obj = {} 
let arrWithWord = []
for(let line of wordsWithDefinition){
    let tokens = line.split(': ')
    let word = tokens[0]
    let definition = tokens[1]

if(obj.hasOwnProperty(word)){
    obj[word].push(definition)
}else{
    obj[word]=[definition]
}

}

let command = input.pop()
for(let line of input){
    let tokens = line.split(' | ')
   for(let word of tokens){
       arrWithWord.push(word)
   }
}

let keys = Object.keys(obj)

if(command === 'Test'){
   
   for(let key of keys){
      if(arrWithWord.includes(key)){
          console.log(`${key}:`);
          Object.values(obj[key]).forEach((el)=>{
              console.log(` -${el}`);
          })
      }
   } 
}if(command === 'Hand Over'){
    console.log(keys.join(' '));
}




}
solve((["programmer: an animal, which turns coffee into code | developer: a magician",
"fish | domino",
"Hand Over"]))

 