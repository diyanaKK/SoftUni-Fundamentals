function solve(arr) {
    let numbers = arr.shift().split(' ').map(Number)
    function swap(input, index_A, index_B) {
        let temp = input[index_A];
        input[index_A] = input[index_B]
        input[index_B] = temp
    }
    

    
        for (let i = 0; i < arr.length; i++) {
            let tokens = arr[i].split(' ');
            let commands = tokens[0];
            let index1 = tokens[1];
            let index2 = tokens[2];

            if (commands === 'swap') {
                swap(numbers, index1, index2);
            } else if (commands === 'multiply') {
                let result = numbers[index1] * numbers[index2]
                numbers.splice(index1,1, result)
            } else if (commands === 'decrease') {
              numbers = numbers.map((el) => el - 1)
                
            } else if (commands === 'end') {

                break;
            }
        }
    
    console.log(numbers.join(', '));
}


solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ])
