function solve(num){
    for(let i = 1 ; i<=num; i++){
        let sum = 0;
        let tempNum = i;
        while(tempNum>0){
            sum+=tempNum % 10;
            tempNum = Math.floor(tempNum/10)
        }
        let result = 0;
        if(sum == 7 || sum == 5 || sum == 11){
            result = "True"
        }else{
            result = "False"
        }
        console.log(`${i} -> ${result}`)
    }
}
solve(15)