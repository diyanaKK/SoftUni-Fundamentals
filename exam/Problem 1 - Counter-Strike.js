function solve(input) {
    let initialEnergy = Number(input.shift())
    let distance = input;
    let wonCounter = 0;
    for (let i = 0; i < distance.length; i++) {
        let energyNeed = Number(distance[i])
            if (initialEnergy >= energyNeed) {
                wonCounter++
                initialEnergy -= energyNeed;
                if(wonCounter % 3 === 0) {
                    initialEnergy += wonCounter;
                }
            } else if (initialEnergy < energyNeed) {
                console.log(`Not enough energy! Game ends with ${wonCounter} won battles and ${initialEnergy} energy`);
                break;
            }
            else if (distance[i] === "End of battle") {
                console.log(`Won battles: ${wonCounter}. Energy left: ${initialEnergy}`);
            }

        }




    }
    solve(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])