function solve(input) {
    let message = input.shift()

    for (let line of input) {
        let tokens = line.split('>>>')

        let command = tokens[0]

        if (command === 'Contains') {
            let substring = tokens[1]
            if (message.includes(substring)) {
                console.log(`${message} contains ${substring}`);
            } else {
                console.log(`Substring not found!`);
            }

        }
        if (command === 'Flip') {
            let uOrl = tokens[1]
            let start = tokens[2]
            let end = tokens[3]
            let newSubstring = message.substring(start, end)
            let startOfmess = message.substring(0, start)
            let endOfmes = message.substring(end)
            if (uOrl === 'Upper') {
                newSubstring = newSubstring.toUpperCase()
                message = startOfmess + newSubstring + endOfmes

            } else {
                newSubstring = newSubstring.toLowerCase()
                message = startOfmess + newSubstring + endOfmes

            }
            console.log(message);
        }
        if (command === 'Slice') {
            let start = tokens[1]
            let end = tokens[2]
            let startOfM = message.substring(0, start)
            let endOfm = message.substring(end)
            message = startOfM + endOfm
            console.log(message);
        } if (command === 'Generate') {
            console.log(`Your activation key is: ${message}`);
        }

    }

}
solve(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])