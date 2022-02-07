function solve(input) {
    let elements = input.shift().split(' ')
    let indexes = input;
    function checkRange(first, second, range) {

        return !((first >= 0 && first <= range) && (second >= 0 && second <= range))
    }

    for (let i = 0; i < indexes.length; i++) {
        let tokens = indexes[i].split(' ');
        let firstIn = tokens[0];
        let secondIn = tokens[1];
        let half = (elements.length / 2);
        let add = (`-${elements[i - 1]}a`);

        if (firstIn !== 'end' && elements.length > 0) {
            if (firstIn === secondIn) {
                elements.splice(half, 0, add, add);
                console.log('Invalid input! Adding additional elements to the board');

            } else if (checkRange(firstIn, secondIn, elements.length)) {
                elements.splice(half, 0, add, add);
                console.log('Invalid input! Adding additional elements to the board');

            } else if (elements[firstIn] === elements[secondIn]) {
                console.log(`Congrats! You have found matching elements - ${elements[secondIn]}!`);

                if (firstIn < secondIn) {
                    secondIn = secondIn - 1;
                    elements.splice(firstIn, 1);
                    elements.splice(secondIn, 1);
                } else {
                    elements.splice(firstIn, 1);
                    elements.splice(secondIn, 1);
                }
            } else if (elements[firstIn] !== elements[secondIn]) {
                console.log('Try again!');
            }
        } else if (firstIn === 'end' && elements.length > 0) {
            console.log(`Sorry you lose :( 
        ${elements.join(' ')}`);
        } else if (!elements >= 0 || elements.includes('end')) {
            console.log(`You have won in ${i} turns!`);
            break;
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


