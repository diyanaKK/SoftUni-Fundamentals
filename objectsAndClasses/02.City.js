function printer(obj) {
let cityKeys = Object.keys(obj)

for(let keys of cityKeys){
    console.log(`${keys} -> ${obj[keys]}`);
}
}
printer({
    name: 'Plovdiv',
    area: 389,
    population: 1162358,
    country: 'Bulgaria',
    postCode: 4000
})