function solve(input) {
    let message = input.shift()

for(let line of input){
    let tokens = line.split('|')
   let command = tokens[0]

   if(command === "Move"){
       let numberOfLetters = Number(tokens[1])
       let end = message.split('').splice(0,numberOfLetters)
       let start = message.split('').splice(numberOfLetters)
       message = start.join('')+end.join('')   
   }if(command === 'Insert'){
       let repl = message.split('')
       let index = Number(tokens[1])
       let value = tokens[2]
       repl[index-1]+=value
       message = repl.join('')
      
   }if(command === 'ChangeAll'){
       let serch = tokens[1]
       let replace = tokens[2]
       message.split(serch).join(replace)
   }if(command === 'Decode'){
       console.log(`The decrypted message is: ${message}`);
   }
}

}
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
  ])