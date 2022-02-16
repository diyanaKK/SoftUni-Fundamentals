function convertObj(jsonStr){

    let person = JSON.parse(jsonStr)
    let personKey = Object.keys(person)
    for(let keys of personKey ){
        console.log(`${keys}: ${person[keys]}`);
    }
}
convertObj('{"name":"George","lastName":"Jones","hairColor":"Brown"}')