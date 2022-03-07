function solve(input) {
    let obj = {}
    for (let line of input) {
        let [companyName,id] = line.split(' -> ')
        if (!obj.hasOwnProperty(companyName)) {
            obj[companyName] = []
            
        }
        if (!obj[companyName].includes(id)) {
            obj[companyName].push(id)
            
        }


    }
    let entries = Object.entries(obj)

    entries.sort().forEach(([key,value])=>{
        let arr = []
        arr.push(value)
    
         console.log(`${key}\n-- ${value.join('\n-- ')}`);
    })

   
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])