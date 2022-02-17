function solve(arr) {
    let obj = {}

    for (let line of arr) {
        let newLine = JSON.parse(line);
        Object.entries(newLine).forEach(([key, value]) => {
            obj[key] = value
            
            
        })
        console.log(newLine);

    }
    obj=obj.sort((a,b)=>a.key.localeCompare(b.key))




   obj.forEach((el)=> (console.log(`Term: ${obj[key]} => Definition: ${obj[value]}`))


}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)