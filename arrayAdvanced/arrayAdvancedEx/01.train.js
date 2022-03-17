function solve(input) {
    let train = input.shift().split(' ').map(Number);
    let maxCapacity= Number(input.shift());
    
    for(let command of input){
        let tokens = command.split(' ');

        if(tokens[0] === "Add"){
        let passenger = Number(tokens[1]);
        train.push(passenger);
        }else{
            let passenger = Number(tokens[0]);
            for(let i = 0;i<train.length;i++){
                if(train[i]+ passenger <=maxCapacity){
                    train[i]+=passenger;
                    break;
                }
            }
        }
    }
    console.log(train.join(' '));
    }
    solve(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);