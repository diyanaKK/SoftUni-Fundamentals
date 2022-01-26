function solve(arrNum,arrStr){
let newArr = arrNum;
for(let i = 0;i< arrStr.length;i++){
let tokens = arrStr[i].split(' ');
let comand = tokens[0];
 
if(comand === "add"){
    let index = Number(tokens[1])
newArr.splice(index,0,tokens[2])

}else if(comand === "addMany"){
    let index = Number(tokens[1]);
    tokens.splice(0,2)

    let numberToAdd = tokens.map(Number);
    newArr.splice(index,0,...numberToAdd)
}  
else if(comand === "contains"){
    
    let result = arrNum.indexOf(tokens[1])
    console.log(Number(result));
    
}else if(comand === "remove"){
    let index = Number(tokens[1]);
    newArr.splice(index,1)

}else if(comand === "shift"){
   let position = tokens[1];
   for(let i = 0;i<position;i++){
       let firstNum = newArr.shift();
       newArr.push(firstNum)
   }

}else if(comand === "SumPairs"){
    let resultArr = [];
if(newArr.length % 2 !== 0){
        arrNum.push(0)
     }
     for(let i = 0; i<newArr.length;i++){
         let sum = newArr[i]+newArr[i+1];
         resultArr.push(sum)
     }
     newArr = resultArr
 




}else if(comand === "print"){
   
    console.log(newArr);

}

}



}




    solve([2, 2, 4, 2, 4]
        ["add 1 4", "sumPairs", "print"])