function solve(input) {
    let vipList = []
    let regularList = []
    let index = input.indexOf('PARTY')
    let guestComming = input.splice(index)
    let comming = []
    let count = 0
    let command = guestComming.shift()


    for (let i = 0; i < input.length; i++) {
        if (!guestComming.includes(input[i])) {
            count++
            comming.push(input[i]);
        }
    }

    for (let peopleOutOfList of guestComming) {
        if (!input.includes(peopleOutOfList)) {
            let index = guestComming.indexOf(peopleOutOfList)
            guestComming.splice(index, 1)
        }
    }

    for (let guest of comming) {
        let isDigit = parseInt(guest.charAt(0));
        if (isDigit) {
            vipList.push(guest)
        } else {
            regularList.push(guest)
        }
    }
    console.log(count);
    console.log(vipList.join('\n'));
    console.log(regularList.join('\n'));


}
solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    '5662862956',
    'aufuago;'
])