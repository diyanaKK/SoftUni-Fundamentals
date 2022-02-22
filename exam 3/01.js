function huntingGames(input) {
    let days = Number(input[0]);
    let players = Number(input[1]);
    let groupsEnergy = Number(input[2]);
    let water = Number(input[3]);
    let food = Number(input[4]);
    let isEnergyEmpty = false

    let totalWater = days * players * water;
    let totalFood = days * players * food;

    for (i = 1; i <= days; i++) {
        let d = 5;
        groupsEnergy -= Number(input[d]);
        if (groupsEnergy <= 0) {
            break;
            isEnergyEmpty = true
        }
        if (i % 2 === 0) {
            totalWater *= 0.70;
            groupsEnergy *= 1.05;
        }
        if (i % 3 === 0) {
            let currentFood = totalFood / players;
            totalFood -= currentFood;
            groupsEnergy *= 1.1;
        }
        d++;
    }

    if (groupsEnergy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${groupsEnergy.toFixed(2)} energy!`)
    }
    if (isEnergyEmpty === true) {
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`)
    }

}
huntingGames(["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"])