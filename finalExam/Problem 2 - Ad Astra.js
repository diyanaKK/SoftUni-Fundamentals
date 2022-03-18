function solve(input){
let regex = /(#|\|)(?<item>[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g
let totalCal = 0
let days = 0
let arr = []
let validData
while((validData = regex.exec(input)) !== null){
    let item = validData.groups['item']
    let date = validData.groups['date']
    let calories = validData.groups['calories']
    arr.push(`Item: ${item}, Best before: ${date}, Nutrition: ${calories}`);

    totalCal+=Number(calories)
}
days = Math.floor(totalCal / 2000)
console.log(`You have food to last you for: ${days} days!`);
arr.forEach(element =>console.log(element))

}
// solve([
//     '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
//     ])
    solve([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]

    )