function solve(input) {
    let treasureChest = input.shift().split('|')



    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ')
        let command = tokens.shift()


        if (command !== "Yohoho!") {

            if (command === 'Loot') {
                let items = tokens
                items.forEach(element => {
                    if (!treasureChest.includes(element)) {
                        treasureChest.unshift(element)
                    }
                })
            } else if (command === 'Drop') {
                let index = Number(tokens)
                if (treasureChest[index]) {
                    treasureChest.push(treasureChest[index])
                    treasureChest.splice(index, 1);
                }
            } else if (command === 'Steal') {
                let count = Number(tokens)
                let steal = treasureChest.splice(-count)
                console.log(steal.join(', '));
            }
        } else {
            break;
        }

    }
    let sum = treasureChest.reduce((a, b) => {
        return Number(a + b.length)
    }, 0)
    if (sum > 0) {
        console.log(`Average treasure gain: ${(sum / treasureChest.length).toFixed(2)} pirate credits.`);
    } else {
        console.log(`Failed treasure hunt.`);
    }

}
solve(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])