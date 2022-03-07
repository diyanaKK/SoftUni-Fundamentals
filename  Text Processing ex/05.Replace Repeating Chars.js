function solve(text){
let result =[]

for (let index = 0; index < text.length; index++) {
  if( text[index+1]!== text[index]){
result.push(text[index])
  }
    
}
console.log(result.join(''));
}
solve('aaaaabbbbbcdddeeeedssaa')