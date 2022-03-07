function solve(input) {
    let gladiators = {}



    for (let line of input) {

        if (line === 'Ave Cesar') {
            let totalSkillPairPerson = {}
            Object.keys(gladiators).forEach((player) => {
                totalSkillPairPerson[player] = Object.values(gladiators[player]).reduce((points, sum) => sum + points, 0)
            })
           
            let orderSkills = Object.entries(totalSkillPairPerson).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).reduce(function (result, key) {
                result[key[0]] = key[1];
                return result;
            }, {});

            
            Object.entries(orderSkills).forEach(([gladiator, totalSkill]) => {
                console.log(`${gladiator}: ${totalSkill} skill`);
                Object.entries(gladiators[gladiator]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).forEach(([tech,skill])=>{
                    console.log(`- ${tech} <!> ${skill}`);
                });
                
            })


            break;
        }


        let battleTokens = line.split(' vs ')
        let hasBattle = battleTokens.length > 1;

        if (!hasBattle) {
            let tokens = line.split(' -> ')
            let gladiatorsName = tokens[0]
            let technique = tokens[1]
            let power = Number(tokens[2])

            if (!gladiators.hasOwnProperty(gladiatorsName)) {
                gladiators[gladiatorsName] = {}
            }
            if (!gladiators[gladiatorsName].hasOwnProperty(technique)) {
                gladiators[gladiatorsName][technique] = power
            }
            if (gladiators[gladiatorsName].hasOwnProperty(technique) && gladiators[gladiatorsName][technique] < power) {
                gladiators[gladiatorsName][technique] = power
            }

        } else if (hasBattle) {
            let player1 = battleTokens[0]
            let player2 = battleTokens[1]
            if (gladiators.hasOwnProperty(player1) && gladiators.hasOwnProperty(player2)) {
                let hasSameTech = Object.keys(gladiators[player1]).some(tech => Object.keys(gladiators[player2]).includes(tech))

                if (hasSameTech) {
                    let totalPointsPlayer1 = Object.values(gladiators[player1]).reduce((points, sum) => sum + points, 0)
                    let totalPointsPlayer2 = Object.values(gladiators[player2]).reduce((points, sum) => sum + points, 0)
                    if (totalPointsPlayer1 > totalPointsPlayer2) {
                        delete gladiators[player2]
                    } else if (totalPointsPlayer1 < totalPointsPlayer2) {
                        delete gladiators[player1]
                    }
                }
            }
        }

    }
}



// solve([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'])
solve([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
])