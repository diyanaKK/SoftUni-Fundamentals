function solve(input){
let regex = /(=|\/)([A-Z][A-Za-z]{2,})\1/gm
let array = []
let travelPoints = 0
let match = input.match(regex)
if(match){
match.forEach(element => {
    return array.push(element.substring(1, element.length - 1))
});


for(let destination of array){
travelPoints+=Number(destination.length)
}
}

console.log(`Destinations: ${array.join(', ')}`);
console.log(`Travel Points: ${travelPoints}`);


}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")