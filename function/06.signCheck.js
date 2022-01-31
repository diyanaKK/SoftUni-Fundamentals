function check(num1,num2,num3){
    let twosNum = (a,b)=>a*b;
    if(twosNum(num1,num2)*num3<0){
console.log('Negative');
    }else{
        console.log('Positive');
    }
}
check(5,12,-15)