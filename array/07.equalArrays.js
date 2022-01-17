function solve(arr1, arr2) {
    let isIdentical = true;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isIdentical = false;
            break;
        }
    }
    let sum = 0;
    if (isIdentical) {
        for (let unparsed of arr1) {
            sum += Number(unparsed);
            
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}



solve(['10', '20', '30'], ['10', '20', '30'])
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])








// Arrays are identical if their elements are equal. If are identical, find the sum of the first array and print the following
// message:

// `Arrays are identical. Sum: {sum}`

// If the arrays are NOT identical, find the first index where the arrays differ and print the following message:
// `Arrays are not identical. Found difference at {index} index`