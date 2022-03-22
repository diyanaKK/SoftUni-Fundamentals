function solve(input) {
    let num = Number(input.shift())
    let inputWithCommands = input.splice(num)
    let cars = {}

    for (let line of input) {
        let tokens = line.split('|')
        let car = tokens[0]
        let mileage = Number(tokens[1])
        let fuel = Number(tokens[2])

        cars[car] = [mileage, fuel]
    }
    for (let line of inputWithCommands) {
        let tokens = line.split(' : ')
        let command = tokens[0]

        if (command === 'Drive') {
            let car = tokens[1]
            let distance = Number(tokens[2])
            let fuel = Number(tokens[3])

            if (cars[car][1] >= fuel) {
                cars[car][1] -= fuel
                cars[car][0] += distance
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if (cars[car][0] >= 100000) {
                    delete cars[car]
                    console.log(`Time to sell the ${car}!`);
                }
            } else {
                console.log(`Not enough fuel to make that ride`);
            }
        }
        if (command === 'Refuel') {
            let car = tokens[1]
            let currentFuel = Number(tokens[2])
            let need = 75 - cars[car][1]

            if (currentFuel+cars[car][1] > 75) {
             
                cars[car][1] = 75
                console.log(`${car} refueled with ${need} liters`);
            }else{
                cars[car][1]+=currentFuel
                console.log(`${car} refueled with ${currentFuel} liters`);
            }
        }
        if (command === 'Revert') {
            let car = tokens[1]
            let kilometers = Number(tokens[2])
            cars[car][0] -= kilometers
            if (cars[car][0] < 10000) {
                cars[car][0] = 10000

            } else {
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }
        if (command === 'Stop') {
            Object.entries(cars).forEach((element) => console.log(`${element[0]} -> Mileage: ${element[1][0]} kms, Fuel in the tank: ${element[1][1]} lt.`))
        }



    }


}
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])

// solve([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
// ]
// )