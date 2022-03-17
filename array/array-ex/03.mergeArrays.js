function solve(arr1, arr2) {
    let thirdArr = [];
    let sum = 0;
    let arr1Length = arr1.length;
    let conArr =''

    for (let i = 0; i < arr1Length; i++) {
        if(i % 2=== 0){
            sum =  Number(arr1[i]) + Number(arr2[i]);
            thirdArr.push(sum);

        }else {
conArr= arr1[i] + arr2[i];
thirdArr.push(conArr)
        }
    }
    console.log(thirdArr.join(' - '))
}
solve(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])