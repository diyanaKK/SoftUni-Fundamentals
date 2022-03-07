function sortObjKeysAscending(obj) {
    return Object.keys(obj).sort().reduce(function (result, key) {
        result[key] = obj[key];
        return result;
    }, {});
}

function sortObjKeysDescending(obj) {
    return Object.keys(obj).sort().reverse().reduce(function (result, key) {
        result[key] = obj[key];
        return result;
    }, {});
}

function sortObjEntriesAscending(obj) {
    return Object.entries(obj).sort((a,b)=> a[1].localeCompare(b[1])).reduce(function (result, key) {
        result[key[0]] = key[1];
        return result;
    }, {}); 
}

function sortObjEntriesDescending(obj) {
    return Object.entries(obj).sort((a,b)=> a[1].localeCompare(b[1])).reverse().reduce(function (result, key) {
        result[key[0]] = key[1];
        return result;
    }, {}); 
}
// Object.entries(gladiators[gladiator]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).forEach(([tech,skill])=>{
var data = {
    'States': ['NSW', 'VIC'],
    'Countries': ['GBR', 'AUS'],
    'Capitals': ['SYD', 'MEL'],
    'Wisconsin': 'me'
}

let entries = {
    'States': 'NSW',
    'Countries': 'AUS',
    'Capitals':  'MEL',
    'Wisconsin': 're'
}
console.log(sortObjKeysAscending(data));
console.log(sortObjKeysDescending(data));
console.log(sortObjEntriesAscending(entries));
console.log(sortObjEntriesDescending(entries));
