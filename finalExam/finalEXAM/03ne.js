function solve(input) {
    let collection = {}

    for (let line of input) {
        let tokens = line.split(' ')
        let command = tokens[0]
        if (command === 'Enroll') {
            let hero = tokens[1]
            if (collection.hasOwnProperty(hero)) {
                console.log(`${hero} is already enrolled.`);
            } else {
                collection[hero] = [[]]
            }
        }

        if (command === 'Learn') {
            let hero = tokens[1]
            let spell = tokens[2]
            if (collection.hasOwnProperty(hero)) {
                if (collection[hero].includes(spell)) {
                    console.log(`${hero} has already learnt ${spell}.`);
                } else {
                    collection[hero][0].push(spell)
                }
            } else {
                console.log(`${hero} doesn't exist.`);
            }
        }
        if (command === 'Unlearn') {
            let hero = tokens[1]
            let spell = tokens[2]
           if(collection.hasOwnProperty(hero)){
               if(collection[hero].includes(spell)){
                   collection[hero]=['']
               }else{
                   console.log(`${hero} doesn't know ${spell}.`);
               }

           }else{
            console.log(`${hero} doesn't exist.`);
           }


        } if (command === 'End') {
            console.log(`Heroes:`);

            Object.entries(collection).forEach((el) => {
                console.log(`== ${el[0]}: ${el[1][0].join(', ')}`);
            })
        }
    }
}
solve((["Enroll Stefan",
    "Enroll Peter",
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn Stefan ItSholdWork",
    "Learn Stefan Itork",
    "Learn John ItShouldNotWork",
    "Unlearn George Dispel",
    "Unlearn Stefan ItShouldWork",
    "End"]))
// solve((["Enroll Stefan",
// "Learn Stefan ItShouldWork",
// "Learn Stefan ItShouldWork",
// "Unlearn Stefan NotFound",
// "End"]))
// solve((["Enroll Stefan",
// "Enroll Peter",
// "Enroll John",
// "Learn Stefan Spell",
// "Learn Peter Dispel",
// "End"]))