function solve(input){
let message = input.shift()
for(let line of input){
    let tokens = line.split(':|:')
   let command = tokens[0]

   if(command ==='InsertSpace' ){
       let index = Number(tokens[1])
       let start = message.substring(0,index)
       let end = message.substring(index)
       message= start + ' ' + end
       console.log(message);
   }
   if(command === 'ChangeAll'){
       let substring = tokens[1]
       let replacement = tokens[2]
       if(message.includes(substring)){
           let pieces = message.split(substring)
           message= pieces.join(replacement)
       console.log(message);
       }
   }
if(command === 'Reverse'){
    let substring = tokens[1]
    if (message.includes(substring)) {
        message= message.replace(substring,'.')
        let index = message.indexOf('.')

        let start = message.substring(0,index)
        let middle = message.substring(index+1)
        
        substring = substring.split('').reverse().join('')
         
        message = start + middle + substring
        console.log(message);
    }else{
        console.log(`error`);
    }
}if(command === 'Reveal'){
    console.log(`You have a new text message: ${message}`);
}



}
}
solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])
  solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])