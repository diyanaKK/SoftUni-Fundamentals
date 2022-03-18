function solve(input){
    let num = Number(input.shift())
let inputWithCommands = input.splice(num)
let collection = {}
let raitingArr = []

for(let line of input){
let tokens = line.split('<->')
let plants = tokens[0]
let rarity = Number(tokens[1])
let raiting = 0
collection[plants]=rarity
collection[plants][rarity] =[raiting]
}


for(let line of inputWithCommands){
    let tokens = line.split(' - ')
  
    let [command,plants] = tokens[0].split(': ')
    
    if(command === 'Rate'){
        if(collection.hasOwnProperty(plants)){
            let raiting= Number(tokens[1])
            raitingArr.push(raiting)
            let rarity = 0
            collection[plants]=rarity
            collection[plants][rarity]=raiting
        }else{
            console.log('error');
        }
//     }if(command === 'Update'){
//         if(collection.hasOwnProperty(plants)){
//             collection[plants] = tokens[1]
//     }else{
//         console.log('error');
//     }
//     }if(command === 'Reset'){
//         if(collection.hasOwnProperty(plants)){
// collection[plants][rarity]=0
//         }
//     }if(command === 'Exhibition')
//     console.log(`Plants for the exhibition:`);
//    Object.entries(collection).forEach((element)=> console.log(`- ${element[0]}; Rarity: ${element[1][0]}; Rating: ${element[1][1]}`))
// }

    }
    }

}
solve(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Exhibition"])