function solve(input) {
    let vipList = []
    let regularList = []
    let index = input.indexOf('PARTY')
    let guestList = input.splice(index)
    let comming = []
    let count = 0
    let command = guestList.shift()

    const guestNotComming = input.filter(guest => !guestList.includes(guest));

    for(let peopleOutOfList of guestList){
        if(!input.includes(peopleOutOfList)){
            guestNotComming.push(peopleOutOfList)
        }
    }

   
    for (let guest of guestNotComming) {
        let isDigit = parseInt(guest.charAt(0));
        if (isDigit) {
            vipList.push(guest)
        } else {
            regularList.push(guest)
        }
    }
    console.log(guestNotComming.length);
    console.log(vipList.length >1 ? vipList.join('\n'):'');
    console.log(regularList.length >1 ? regularList.join('\n'):'');  


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