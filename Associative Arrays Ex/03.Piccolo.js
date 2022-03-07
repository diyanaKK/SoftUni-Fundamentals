function solve(input) {
    let carsIn = []
    let carsOut = []
    cars = []

    for (let line of input) {
        let tokens = line.split(', ')
        let command = tokens[0]
        let carNumber = tokens[1]

        if (command === 'IN') {
            if (!carsIn.includes(carNumber)) {
                carsIn.push(carNumber)
            }
        } else if (command === 'OUT') {
            if (carsIn.includes(carNumber)) {
                let index = carsIn.indexOf(carNumber)
                carsIn.splice(index, 1)
                carsOut.unshift(carNumber)
                if (carsIn.length === 0) {
                    console.log(`Parking Lot is Empty`);
                }
            }
        }
    }
    let sorted = carsIn.sort()
    console.log(sorted.join('\n'));


}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])