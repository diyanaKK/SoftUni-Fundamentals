function solve(params) {
    const indexes = params.shift().split(' ')

    for (move = 0; move < params.length; move++) {
        const [firstIndex, secondIndex] = params[move].split(' ');
        const elementOne = indexes[+firstIndex];
        const elementTwo = indexes[+secondIndex];
        if (firstIndex === 'end' && indexes.length > 0) {
            console.log(`Sorry you lose :(\n${indexes.join(' ')}`);
            break
        }
        if (elementOne && elementTwo) {
            if (elementOne == elementTwo && firstIndex !== secondIndex) {
                indexes.splice(indexes.indexOf(elementOne), 1);
                indexes.splice(indexes.indexOf(elementTwo), 1);
                console.log(`Congrats! You have found matching elements - ${elementOne}!`)
            } else if (elementOne != elementTwo) {
                console.log("Try again!")
            }
        }
        else {
            const toAdd = `-${move + 1}a`
            const middle = indexes.length / 2;
            indexes.splice(middle, 0, toAdd, toAdd)
            console.log("Invalid input! Adding additional elements to the board");
        }

        if (indexes.length == 0) {
            console.log(`You have won in ${move + 1} turns!`);
            break
        }

    }

}

solve([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]

)


