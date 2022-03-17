function solve(input){
let start = input.lastIndexOf('\\')
let newString = input.substring(start+1).split('.')
let extencion = newString.pop()
let template  = newString.join('.')
// log
console.log(`File name: ${template}`)
    console.log(`File extension: ${extencion}`);
}
solve('C:\\Projects\\Data-Structures\\LinkedList.bank.cs')