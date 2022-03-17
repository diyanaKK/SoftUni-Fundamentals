function solve(arr) {
    let isGoing = [];
    let notGoing = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i].includes('not')) {
            const personNotGoing = arr[i].split(' ')[0];


            if (isGoing.includes(personNotGoing)) {
                let index = isGoing.indexOf(personNotGoing)
                isGoing.splice(index, 1)
                notGoing.push(personNotGoing);

            } else {
                console.log(`${personNotGoing} is not in the list!`);
            }

        }
        else {
            const personGoing = arr[i].split(' ')[0];
           
                if (isGoing.includes(personGoing)) {
                    console.log(`${personGoing} is already in the list!`);
                } else {
                    isGoing.push(personGoing);

                }

        }
    }
    
   console.log(isGoing.join('\n'));
}
solve(['Allie is going!',

    'George is going!',

    'John is not going!',

    'George is not going!'])




solve(['Tom is going!',

    'Annie is going!',

    'Tom is going!',

    'Garry is going!',

    'Jerry is going!']);