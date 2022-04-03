function solve(input){
  let message = input.shift()
  

for(let line of input){
    let tokens = line.split(' ')
    let command = tokens[0]

if(command === 'Abjuration'){
message = message.toUpperCase()
console.log(message);

}else if(command === 'Necromancy'){
    message = message.toLowerCase()
    console.log(message);

}else if(command === 'Illusion'){
    let index = Number(tokens[1])
    let letter = tokens[2]
    if(message[index]){
        message = message.replace(message[index],letter)
        console.log('Done!');
    }else{
        console.log(`The spell was too weak.`);
    }
    
}else if(command === 'Divination'){
    let search = tokens[1]
    let replacer = tokens[2]
    if(message.includes(search)){
        message = message.split(search).join(replacer)
        console.log(message);
    }
    
}else if(command === 'Alteration'){
    let substring = tokens[1]
    if(message.includes(substring)){
        message = message.split(substring).join('')
        console.log(message);
    }
}else if(command === 'Abracadabra'){
    break;
}else{
    console.log(`The spell did not work!`);
}

}

}
solve(["A7ci0",
"Illusion 1 c",
"Illusion 4 o",
"Abjuration",
"Abracadabra"])

