function solve(input){
let message = input.shift()

for(let line of input){
    let tokens = line.split(' ')
    let command = tokens[0]

    if(command === 'Change'){
        let char = tokens[1]
        let replace = tokens[2]
        message = message.split(char).join(replace)
        console.log(message);
    }if(command === 'Includes'){
        let substring = tokens[1]
        if(message.includes(substring)){
            console.log(`True`);
        }else{
            console.log(`False`);
        }
    }if(command === 'End'){
        let substring = tokens[1]
        if(message.endsWith(substring)){
            console.log(`True`);
        }else{
            console.log(`False`);
        }
    }if(command === 'Uppercase'){
        message = message.toUpperCase()
        console.log(message);
    }if(command === 'FindIndex'){
        let char = tokens[1]
        let index = message.indexOf(char)
        console.log(index);
    }if(command === 'Cut'){
        let start =Number(tokens[1])
        let count = Number(tokens[2])
        message = message.substring(start,start+count)
        console.log(message);
    }if(command === 'Done'){
        break;
    }
}

}
solve((["//Th1s 1s my str1ng!//",
"Change 1 i",
"Includes string",
"End my",
"Uppercase",
"FindIndex I",
"Cut 5 5",
"Done"])
)
// solve((["*S0ftUni is the B3St Plac3**",
// "Change 2 o",
// "Includes best",
// "End is",
// "Uppercase",
// "FindIndex P",
// "Cut 3 7",
// "Done"]))