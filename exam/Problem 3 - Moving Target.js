function solve(input) {
    let targets = input.shift().split(' ');
    let commandsWithValues = input;

    for (let i = 0; i < commandsWithValues.length; i++) {
        let tokens = commandsWithValues[i].split(' ');
        let command = tokens[0];
        let indexShoot = Number(tokens[1]);
        let value = Number(tokens[2]);

        if (command === 'Shoot') {
            if (indexShoot >= 0 && indexShoot <= targets.length - 1) {
                targets.map((element, index) => {
                    if (index === indexShoot) {
                        targets[index] -= value
                        if (targets[index] <= 0) {
                            targets.splice(index, 1)
                        }
                    }
                })

            }
        } else if (command === 'Add') {
            if (indexShoot >= 0 && indexShoot <= targets.length - 1) {
                if (value >= 0) {
                    targets.splice(indexShoot, 0, value);
                }

            } else {
                console.log("Invalid placement!");
            }
        } else if (command === 'Strike') {
            if (indexShoot >= 0 && indexShoot <= targets.length - 1) {
                let rToRemoveEnd = indexShoot + value;
                let lToRemoveStart = indexShoot - value;
                let removeCount = (value*2)+1
                if (rToRemoveEnd < 0 || rToRemoveEnd > targets.length - 1) {
                    console.log("Strike missed!");
                } else if (lToRemoveStart < 0 || lToRemoveStart> targets.length - 1) {
                    console.log("Strike missed!");
                } else {
                    targets.splice(lToRemoveStart,removeCount)
                }


            }
        } else if (command === 'End') {
            console.log(targets.join('|'));
            break;
        }
    }

}
solve(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])