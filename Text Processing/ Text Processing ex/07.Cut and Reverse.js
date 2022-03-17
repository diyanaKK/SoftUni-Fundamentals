function solve(text){
let firstpart=text.substring(0,text.length /2).split('').reverse().join('')
let secondpart = text.substring(text.length/2).split('').reverse().join('') 
console.log(firstpart);
console.log(secondpart);
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')