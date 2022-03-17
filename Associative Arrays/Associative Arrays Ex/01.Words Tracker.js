function solve(input){
let currentWords = input.shift().split(' ')
let map = new Map
let value = 0
for(let word of currentWords){
    map.set(word,value)
}

for(let word of input){
    if(map.has(word)){
        let currentValue = map.get(word)
        currentValue++
        map.set(word,currentValue)
    }
}

let sortedArray = Array.from(map).sort((a, b) => b[1] - a[1])

    sortedArray.forEach((element) => {

        console.log(`${element[0]} - ${element[1]}`);
    });



}
solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])