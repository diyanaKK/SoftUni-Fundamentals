function solve(input) {
    let num = Number(input.shift())
    let inputWithCommands = input.splice(num)
    let heroes = {}

    for (let line of input) {
        let tokens = line.split(' ')
        let hero = tokens[0]
        let hP = Number(tokens[1])
        let mP = Number(tokens[2])

        if (hP > 100) {
            hP = 100
        }
        if (mP > 200) {
            mP = 200
        }

        heroes[hero] = [hP, mP]
    }
    for (let line of inputWithCommands) {
        let tokens = line.split(' - ')
        let command = tokens[0]

        if (command === 'CastSpell') {
            let hero = tokens[1]
            let mpNeed = Number(tokens[2])
            let spellName = tokens[3]

            if (heroes[hero][1] >= mpNeed) {
                heroes[hero][1] -= mpNeed
                console.log(`${hero} has successfully cast ${spellName} and now has ${heroes[hero][1]} MP!`);
            } else {
                console.log(`${hero} does not have enough MP to cast ${spellName}!`);
            }
        } if (command === 'TakeDamage') {
            let hero = tokens[1]
            let hpDamage = Number(tokens[2])
            let attacker = tokens[3]

            heroes[hero][0] -= hpDamage
            if (heroes[hero][0] > 0) {
                console.log(`${hero} was hit for ${hpDamage} HP by ${attacker} and now has ${heroes[hero][0]} HP left!`);
            } else {
                delete heroes[hero]
                console.log(`${hero} has been killed by ${attacker}!`);
            }



        } if (command === 'Recharge') {
            let hero = tokens[1]
            let amountMp = Number(tokens[2])
            let need = 200 - heroes[hero][1]
            if (amountMp + heroes[hero][1] > 200) {

                heroes[hero][1] = 200
                console.log(`${hero} recharged for ${need} MP!`);
            } else {
                heroes[hero][1] += amountMp
                console.log(`${hero} recharged for ${amountMp} MP!`)
            }
        } if (command === 'Heal') {
            let hero = tokens[1]
            let amountHp = Number(tokens[2])
            let need = 100 - heroes[hero][0]
            if (amountHp + heroes[hero][0] > 100) {
                heroes[hero][0] = 100
                console.log(`${hero} healed for ${need} HP!`)
            } else {
                heroes[hero][0] += amountHp
                console.log(`${hero} healed for ${amountHp} HP!`)
            }

        } if (command === 'End') {
            Object.entries(heroes).forEach((element) => console.log(`${element[0]}
HP: ${element[1][0]}
MP: ${element[1][1]}`))
        }
    }
}
//solve(['2', 'Solmyr 85 120', 'Kyrre 99 50', 'Heal - Solmyr - 10', 'Recharge - Solmyr - 50', 'TakeDamage - Kyrre - 66 - Orc', 'CastSpell - Kyrre - 15 - ViewEarth', 'End'])
solve(['4', 'Adela 90 150', 'SirMullich 70 40', 'Ivor 1 111', 'Tyris 94 61', 'Heal - SirMullich - 50', 'Recharge - Adela - 100', 'CastSpell - Tyris - 1000 - Fireball', 'TakeDamage - Tyris - 99 - Fireball', 'TakeDamage - Ivor - 3 - Mosquito', 'End'])