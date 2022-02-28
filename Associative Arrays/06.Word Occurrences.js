function solve(input) {
    let map = new Map
    let value = 1
    for (let words of input) {
        if (!map.has(words)) {
            map.set(words, value)
        } else {
            let currentValue = map.get(words)
            currentValue++
            map.set(words, currentValue)
        }
    }
    let sortedArray = Array.from(map).sort((a, b) => b[1] - a[1])

    sortedArray.forEach((element) => {

        console.log(`${element[0]} -> ${element[1]} times`);
    });



}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])