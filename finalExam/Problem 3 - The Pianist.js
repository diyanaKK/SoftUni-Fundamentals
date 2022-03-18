function solve(input) {
    let num = Number(input.shift())
    let newInputWithCommands = input.splice(num)
    let collection = {}

    for (let line of input) {
        let tokens = line.split('|')
        let piece = tokens[0]
        
        let composer = tokens[1]
       
        let key = tokens[2]
        collection[piece] = [tokens[1],tokens[2]]

    }

    for (let line of newInputWithCommands) {
        let tokens = line.split('|')
        let command = tokens[0]
        let piece = tokens[1]


        if (command === 'Add') {
            let composer = tokens[2]
            let key = tokens[3]
                    if (collection.hasOwnProperty(piece)) {
                        console.log(`${piece} is already in the collection!`);
                    }else {
                        collection[piece]= [tokens[2],tokens[3]]
                        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                
            }
        }if(command === 'Remove'){
           if(collection.hasOwnProperty(piece)){
               delete collection[piece]
               console.log(`Successfully removed ${piece}!`);
           }else {
               console.log(`Invalid operation! ${piece} does not exist in the collection.`);
           }
        }
        if(command === 'ChangeKey'){
            let newKey = tokens[2]
            if(collection.hasOwnProperty(piece)){
            collection[piece][1]=newKey
                console.log(`Changed the key of ${piece} to ${newKey}!`)

            }else{
               console.log(`Invalid operation! ${piece} does not exist in the collection.`); 
            }
        }if(command === 'Stop'){
           Object.entries(collection).forEach(element => console.log(`${element[0]} -> Composer: ${element[1][0]}, Key: ${element[1][1]}`)); ;
        }

    }





}
solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
)