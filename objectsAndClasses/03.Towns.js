function solve(arr){

for(let table of arr){
    let[town, latitude, longitude] = table.split(' | ')

    let currentTownObj = {
        town:town,
        latitude: Number(latitude).toFixed(2),
        longitude: Number(longitude).toFixed(2)
    };
    console.log(currentTownObj);
}



}
solve(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625']
)