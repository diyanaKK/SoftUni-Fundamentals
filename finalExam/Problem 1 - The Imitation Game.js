function solve(input) {
    let message = input.shift()

    for (let line of input) {
        let tokens = line.split('|')
        let comand = tokens[0]

        if (comand === 'Move') {
            let numOfLetters = Number(tokens[1])
            let end = message.substring(0, numOfLetters)
            let start = message.substring(numOfLetters)
            message = start + end
        }
        if (comand === 'Insert') {
            let index = Number(tokens[1])
            let value = tokens[2]
            let start = message.substring(0, index)
            let end = message.substring(index)
            message = start + value + end
        }
        if (comand === 'ChangeAll') {
            let search = tokens[1]
            let substring = tokens[2]
            message = message.split(search).join(substring)
        } if (comand === 'Decode') {
            console.log(`The decrypted message is: ${message}`);
        }
    }
}
solve([
    'owyouh',
    'Move|2',
    'Move|100',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
])