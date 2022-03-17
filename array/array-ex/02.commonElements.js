function solve(arr1,arr2){
    let arrFirst = arr1.length;
    let arrSecond = arr2.length;
for (let i = 0;i< arrFirst;i++) {
    for(let k =0 ;k<arrSecond;k++){
        if(arr1[i]=== arr2[k]){
            console.log(arr1[i])
        }
    }
}
}




solve(['Hey','hello',2,4,'Peter','e'],['Petar',10,'hey',4,'hello','2'])