function solve(sequence,bomb){
    let specialNum = bomb[0]
let bombPower = bomb[1]

   while(sequence.includes(specialNum)){
       let index = sequence.indexOf(specialNum);
       let elementsToRemove= bombPower*2+1;
       let startIndex = index-bombPower;

       if(startIndex<0){
           elementsToRemove+=startIndex;
           startIndex=0;
       }

sequence.splice(startIndex,elementsToRemove);

   }
   let sum = sequence.reduce((a,b)=>{
        return a+b
   },0)


console.log(sum);



}
solve([1, 2, 2, 4, 2, 2, 2, 9],

    [4, 2])