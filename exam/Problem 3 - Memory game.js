function solve(input) {
    let elements = input.shift().split(' ')
    let indexes = input


    for (let i = 0; i < indexes.length; i++) {
        let tokens = indexes[i].split(' ');
        let firstIn = tokens[0];
        let secondIn = tokens[1];
        for (let j = 0; j < elements.length; j++) {
            let numMove = elements[j]
            if (firstIn === secondIn || checkRange(firstIn || secondIn > elements.length) || checking(firstIn || secondIn < elements.length)) {
                if (elements.length % 2 === 0) {
                    let half = (elements.legth / 2) - 1;
                    let add = (`-${elements[j-1]}a`);
                    elements.splice(half,0,add);
                    console.log('Invalid input! Adding additional elements to the board');
                }
            }else if(elements[firstIn]=== elements[secondIn]){
                elements.splice(firstIn,1);
                elements.splice(secondIn+1,1);
                console.log(`Congrats! You have found matching elements - ${elements[firstIn]}!`);
            }else if(elements[firstIn]!== elements[secondIn]){
                console.log('Try again!');
            }else if (firstIn=== 'end' && elements.icludes(elements[firstIn]=== elements[secondIn])){
                console.log(`Sorry you lose :(
                    ${elements}`);
            }else if(!elements.icludes(elements[firstIn]=== elements[secondIn] && elements.icludes('end'))){
              console.log(`You have won in ${j-1} turns!`);  
            }


        }
    }

    }

solve( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]
    )


function checkRange(a, b) {

    return a > b
}

function checking(a, b) {
    return a < b
}