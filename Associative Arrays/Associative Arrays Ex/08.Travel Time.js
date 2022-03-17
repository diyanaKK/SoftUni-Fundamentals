function solve(input) {
    let countries = {}

    for (let line of input) {
        let tokens = line.split(' > ')
        let country = tokens[0]
        let town = tokens[1]
        let price = Number(tokens[2])

        if (!countries.hasOwnProperty(country)){
            countries[country]={}
        }
        if (!countries[country].hasOwnProperty(town)) {
            countries[country][town] = price
        }
        if (countries[country][town] > price) {
            countries[country][town] = price
        }
    }
    
   
let keys = Object.keys(countries)
keys.sort((a,b)=>a.localeCompare(b))

for(let item of keys){
    let sortedCities = Object.entries(countries[item])
    sortedCities.sort((a,b)=> a[1] - b[1])
   
    let result = []
    for(let city of sortedCities){
        result.push(city.join(' -> '))
        
    }
    console.log(`${item} -> ${result.join(' ')}`);
}
    
    
}

solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])