function solve(arr) {
    let arrOfNumbers = arr;
    let modifiedArr = [];
    let sumOfFirstArr = 0;
    let sumOfModifiedArr = 0;

    for (let index = 0; index < arrOfNumbers.length; index++) {
        sumOfFirstArr += arrOfNumbers[index]
        if (arrOfNumbers[index] % 2 === 0) {
            arrOfNumbers[index] += index;
        } else {
            arrOfNumbers[index] -= index;
        }

        sumOfModifiedArr += arrOfNumbers[index]
        modifiedArr.push(arrOfNumbers[index]);

    }
    console.log(modifiedArr);
    console.log(sumOfFirstArr);
    console.log(sumOfModifiedArr);
}
solve([5, 15, 23, 56, 35])