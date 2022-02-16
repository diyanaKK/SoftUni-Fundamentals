function solve(arr){

    for(let singleName of arr){
        let person= {
            name:singleName,
            personNum:singleName.length
        }
        console.log(`Name: ${person.name} -- Personal Number: ${person.personNum}`);
    }
}
solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ])