function solve(input) {
    let destinations = input.shift()

    for (let line of input) {
        let tokens = line.split(':')
        let command = tokens[0]

        if (command === 'Add Stop') {
            let index = Number(tokens[1])
            let string = tokens[2]
            if (destinations[index]) {
                let start = destinations.substring(0, index)
                let end = destinations.substring(index)
                destinations = start + string + end
            }
                console.log(destinations);
            
        } if (command === 'Remove Stop') {
            
            let startIndex = Number(tokens[1])
            let endIndex = Number(tokens[2])
if(destinations[startIndex] && destinations[endIndex]){
            let start = destinations.substring(0, startIndex)
            let end = destinations.substring(endIndex + 1)
            destinations = start + end
}
            console.log(destinations);

        } if (command === 'Switch') {
            let oldString = tokens[1]
            let newString = tokens[2]
            if (destinations.includes(oldString)) {
                destinations = destinations.replace(oldString, newString)
            }
            console.log(destinations);
        } if (command === 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${destinations}`);
        }

    }
}
solve((["",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]))