function solve(input) {
    function sortObjKeysAscending(obj) {
        return Object.keys(obj).sort().reduce(function (result, key) {
            result[key] = obj[key];
            return result;
        }, {});
    }

    let stop = input.indexOf('Sail')

    let input2 = input.splice(stop + 1)

    let obj = {}
    for (let line of input) {
        let tokens = line.split('||')
        if (line !== 'Sail') {
            let city = tokens[0]
            let population = Number(tokens[1])
            let gold = Number(tokens[2])

            if (obj.hasOwnProperty(city)){
                obj[city][0] += population
                obj[city][1] += gold
        
            }else {

                obj[city] = [population, gold]
            }
            
        }
    }
    for (let line of input2) {
        let tokens = line.split('=>')

        let command = tokens[0]
        if (command === 'Plunder') {
            let city = tokens[1]
            let population = Number(tokens[2])
            let gold = Number(tokens[3])
            obj[city][0] -= population
            obj[city][1] -= gold
            console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);
            if (obj[city][0] <= 0 || obj[city][1] <= 0) {
                delete obj[city]
                console.log(`${city} has been wiped off the map!`);
            }


        } if (command === 'Prosper') {
            let city = tokens[1]
            let gold = Number(tokens[2])
            if (obj[city]) {
                if (gold < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                } else {
                    obj[city][1] += gold
                    console.log(`${gold} gold added to the city treasury. ${city} now has ${obj[city][1]} gold.`);
                }
            }
        } if (command === 'End') {
            let count = 0
            Object.entries(obj).forEach((element) => {
                return count++
            })

            
            console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);
            Object.entries(obj).sort(function (a,b) {
                return b[1][1] - a[1][1] && a[0].localeCompare(b[0])
            }).forEach((element) => console.log(`${element[0]} -> Population: ${element[1][0]} citizens, Gold: ${element[1][1]} kg`))
        }

    }

}



solve(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])