function solve(num) {
    num = num.toString();
    let sum = 0;
    let strLen = num.length;
    for (let i = 1; i <= strLen; i++) {
        sum += Number(num[i-1]);
    }
    let result = sum.toString().includes('9')
    console.log(result ? `${num} Amazing? True` :
        `${num} Amazing? False`)

}
solve(1233)

// adding to git