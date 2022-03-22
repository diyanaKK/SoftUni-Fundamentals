function solve(input) {
    let num = Number(input.shift())
    let inputWithCommands = input.splice(num)
    let collection = {}

    for (let line of input) {
        let tokens = line.split('<->')
        let plant = tokens[0]
        let rarity = Number(tokens[1])
        if (collection.hasOwnProperty(plant)) {
            collection[plant] = rarity
        } else {
            collection[plant] = [rarity, []]
        }
    }
    for (let line of inputWithCommands) {
        let tokens = line.split(': ')
        let command = tokens[0]

        if (command === 'Rate') {
            let [plant, rating] = tokens[1].split(' - ')
            if (collection.hasOwnProperty(plant)) {
                collection[plant][1].push(Number(rating))
            } else {
                console.log(`error`);
            }
        } if (command === 'Update') {
            let [plant, newRarity] = tokens[1].split(' - ')
            if (collection.hasOwnProperty(plant)) {
                collection[plant][0] = Number(newRarity)
            } else {
                console.log(`error`);
            }
        } if (command === 'Reset') {
            let plant = tokens[1]
            if (collection.hasOwnProperty(plant)) {
                collection[plant][1] = []
            } else {
                console.log(`error`);
            }
        } if (command === 'Exhibition') {
            console.log(`Plants for the exhibition:`);
            Object.entries(collection).forEach((element) => {
                let average = 0
                if (element[1][1].length > 0) {
                 average = element[1][1].reduce((sum, el) => sum + el)
                    average = average / element[1][1].length
                }


                console.log(`- ${element[0]}; Rarity: ${element[1][0]}; Rating: ${average.toFixed(2)}`)
            })

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
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])

// solve((["2",
// "Candelabra<->10",
// "Oahu<->10",
// "Rate: Oahu - 7",
// "Rate: Candelabra - 6",
// "Exhibition"]))