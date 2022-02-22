function solve(arr) {
    let obj = {}

    for (let line of arr) {
        let newLine = JSON.parse(line);
        Object.entries(newLine).forEach(([key, value]) => {
            obj[key] = value
        })      
    }


    let keys = Object.keys(obj)
    keys.sort((a,b)=>{
        let keyA = a
        let keyB = b
        return keyA.localeCompare(keyB)
    })
  for(let key of keys){
console.log(`Term: ${key} => Definition: ${obj[key]}`);
  }
}
solve([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
    ])