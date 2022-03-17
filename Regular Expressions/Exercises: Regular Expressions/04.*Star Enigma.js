function solve(input) {
    let countOfMessage = input.shift()
    let regex = /[star]/ig;
    let arrayFromNewSymbols = []
    let countForA = 0
    let countForD = 0
    let attacked = []
    let destroyed = []


    for (let line of input) {
        let count = 0
        let match = line.match(regex)
            .forEach(element => {
                count++

            });
        for (let ch of line) {
            let asciCodeForCh = ch.charCodeAt(0)
            asciCodeForCh -= count
            let newSymbol = String.fromCharCode(asciCodeForCh)
            arrayFromNewSymbols.push(newSymbol)
        }

    }
    let regex2 = /@([A-Za-z]+).*?\:(\d+).*?\!(A|D)!\->(\d+)/g
    let newString = arrayFromNewSymbols.join('')
     let finalMatch = regex2.exec(newString)
// първо трябва да проверя дали планетата е атакувана или разрушена ,да преброя колко пъти и да вкарвам планетите 
// в два масива и от там сортирам по азбучен ред планетите и печатам
    // while(finalMatch!== null) {
    //     let [_, name, population, nameAttack, countOfSoldiers] = finalMatch
    //     if (nameAttack === 'D') {
    //         countForD++
    //         console.log(name);
    //     } else if (nameAttack === "A") {
    //         countForA++
    //         console.log(name);
    //     }   
console.log(`Attacked planets: ${countForA}"
"-> ${name}"
"Destroyed planets: ${countForD}"
"-> ${name}`);


}
solve(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'])
// solve(['2',
// 'STCDoghudd4=63333$D$0A53333',
// 'EHfsytsnhf?8555&I&2C9555SR'])