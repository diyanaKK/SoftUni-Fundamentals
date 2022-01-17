function solve(num,arr){
 let arrCont =[];
for(let i=0;i<num;i++){
    arrCont.push(arr[i])
}console.log(arrCont.reverse().join(' '));
}

solve(3,[10,20,30,40,50])