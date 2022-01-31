function solve(numbers,commands){
let newArr = [];

for(let el of commands){
    let tokens=el.split(' ');
    let command = tokens[0];

if(command === "add"){
    let index = Number(tokens[1]);
    newArr.splice(index,0,tokens[2]);
}else if(command === "addMany"){
    let index = Number(tokens[1]);
    tokens.splice(0,2);
    let numberToAdd = tokens.map(Number);
    newArr.splice(index,0,...numberToAdd)

}


}
 

}




    solve([2, 2, 4, 2, 4]
        ["add 1 4", "sumPairs", "print"])