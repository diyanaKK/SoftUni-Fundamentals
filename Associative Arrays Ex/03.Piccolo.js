function solve(input){
let carsIn = []
let carsOut = []
cars =[]

for(let line of input){
    let tokens = line.split(', ')
    let command = tokens[0]
    let carNumber = tokens[1]

if(command === 'IN'){
    carsIn.push(carNumber)
cars.push(carNumber)
}else if(command === 'OUT'){
    let index = carsIn.indexOf(carNumber)
    carsIn.splice(index,1)
    carsOut.unshift(carNumber)
    if(carsIn.length -1 ===0){
        console.log(`Parking Lot is Empty`);
    }
}
}
 let sorted =carsIn.sort()
console.log(sorted.join('\n'));


}
solve(['OUT, CA2844AA',
'OUT, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])