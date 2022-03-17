function solve(input) {
    let friends = input.shift().split(', ')
    let countBlacklisted = 0
    let countLost = 0

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ')
        let command = tokens[0];
        // let value = tokens[1]
        // let newName = tokens[2]


        if (command !== 'Report') {
            if (command === 'Blacklist') {
                let value = tokens[1] 
                let index = friends.indexOf(value)
                if (friends[index]) {
                    countBlacklisted++
                    let newValue = "Blacklisted"
                    friends.splice(index, 1, newValue)
                    console.log(`${value} was blacklisted.`);
                } else {
                    console.log(`${value} was not found.`);
                }
            } else if (command === 'Error') {
                let value= Number(tokens[1])
            
                if ( friends[value] &&friends[value] !== 'Blacklisted' && friends[value] !== 'Lost') {
                    countLost++
                    let newValue = 'Lost'
                    let name = friends[value]
                    friends[value] = newValue
                    console.log(`${name} was lost due to an error.`);
                }
            }else if (command === 'Change') {
                let value = Number(tokens[1])
                let newName = tokens[2]
                if (friends[value]) {
                    let name = friends[value]
                    friends[value] = newName
                    console.log(`${name} changed his username to ${newName}.`);
                }
            } 
        }else {
            
                console.log(`Blacklisted names: ${countBlacklisted}`);
                console.log(`Lost names: ${countLost}`);
                console.log(friends.join(' '));
            
        } 
    }
}
solve(["Mike, John, Eddie, William",
    "Error -1",
    "Error -3",
    "Change 0 Mike123",
    "Report"])

    solve(["Mike, John, Eddie",
    "Blacklist Mike",
    "Error 0",
    "Report"])
    solve(["Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report"])