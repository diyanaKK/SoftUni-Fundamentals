function solve(arr){
let numbers = arr.shift().split(' ').map(Number)
arr.pop()





for(let i =0;i<arr.length;i++){
    let tokens = arr[i].split(' ');
    let commands = tokens[0];
    let index1 = tokens[1];
    let index2 = tokens[2];


    for(let j = 0;j<numbers.length;j++){
if(commands === 'swap'){
    swap(numbers,index1,index2)
}else if(commands === 'multiply'){
    multiply(numbers[0],numbers[1])
}



    }
}

console.log(numbers);

}
solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ])

  function multiply(a,b){
    return a*b
}
function swap(input, index_A, index_B) {
    let temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}
