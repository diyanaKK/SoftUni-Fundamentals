function solve(input) {
    let shelf = input.shift().split('&')
    

    for (let i = 0; i < input.length; i++) {

        let tokens = input[i].split(' | ')
        let command = tokens[0]

        if (command !== 'Done') {

            if (command === 'Add Book') {
                let book = tokens[1]
                if (!shelf.includes(book)) {
                    shelf.unshift(book)
                }
            } else if (command === 'Take Book') {
                let book = tokens[1]
                if (shelf.includes(book)) {
                    let index = shelf.indexOf(book)
                    shelf.splice(index, 1)
                }
            } else if (command === 'Swap Books') {
                let book1 = tokens[1]
                let book2 = tokens[2]
                if (shelf.includes(book1) && shelf.includes(book2)) {
                    let index1 =shelf.indexOf(book1)
                    let index2 = shelf.indexOf(book2)
                    let temp = shelf[index1]
                    shelf[index1] = shelf[index2]
                     shelf[index2]= temp
                }

            } else if (command === 'Insert Book') {
                let book = tokens[1]
                if (!shelf.includes(book)) {
                    shelf.push(book)
                }

            } else if (command === 'Check Book') {
                let index = Number(tokens[1])
                if (shelf[index]) {
                    console.log(`${shelf[index]}`);
                }
            } else {
                break;
            }
        }
        
    }
    console.log(shelf.join(', '));

}
// solve(['Don Quixote&The Great Gatsby&Moby Dick',
//     'Add Book | Ulysses',
//     'Take Book | Don Quixote',
//     "Insert Book | Alice's Adventures in Wonderland",
//     'Done'])

// solve(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
//     "Add Book | Catch-22",
//     "Swap Books | Anna Karenina | Catch-22",
//     "Take Book | David Copperfield",
//     "Done"])

solve(["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"])