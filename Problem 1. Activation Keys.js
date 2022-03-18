function solve(input) {
    let rawActivationKey = input.shift()

    for (let line of input) {
        let tokens = line.split('>>>')
        let command = tokens[0]
        if (command !== "Generate") {
            if (command === 'Slice') {
                let start = Number(tokens[1])
                let end = Number(tokens[2])
                let deleteCount = end - start+2
                let deletePart = rawActivationKey.slice(start, deleteCount)
                console.log(rawActivationKey);

            } if (command === 'Flip') {
                let textCase = tokens[1]
                let start = Number(tokens[2])
                let end = Number(tokens[3])
                if (textCase === 'Upper') {
                    rawActivationKey = rawActivationKey.substring(start, end).toUpperCase()
                    console.log(rawActivationKey);
                } else {
                    rawActivationKey = rawActivationKey.substring(start, end).toLowerCase()
                    console.log(rawActivationKey);
                }
            } if (command === 'Contains') {
                let item = tokens[1]
                if (rawActivationKey.includes(item)) {
                    console.log(`${rawActivationKey} contains ${item}`);
                } else {
                    console.log(`Substring not found!`);
                }
            }

        }else{
            console.log(`Your activation key is: ${rawActivationKey}`);
        }

    }


}
solve((["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"]))