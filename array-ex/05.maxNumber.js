function solve(arr){
let sumL = 0;
let sumR = 0;

for(let i = 0;i<arr.length;i++){
    for(let k=0;k<i-1;k++){
     if(i-1<=0){
       sumL=0;
   }else{
       sumL+=i-1
   }
   for(let c= i+1;c<arr.length;c++){
       if(length-1<=0){
           sumR=0;
       }else{
           sumR=length-1;
       }
   }
   }

}
console.log(sumL)
}



solve([1,2,3,3])