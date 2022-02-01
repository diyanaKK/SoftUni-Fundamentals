function solve(input) {
    let waitingPeople = input.shift();
    let stateOfLift = String(input).split(' ').map(x => Number(x));
    let spacesAvailable = 0;

    for (let i = 0; i < stateOfLift.length; i++) {
    spacesAvailable = stateOfLift[i];
    let add = 4- spacesAvailable
     if(waitingPeople=== 0){
         break;
     }
     else if(spacesAvailable< 4 && waitingPeople>4){
        waitingPeople-= add
        stateOfLift[i]+=add;
    }else if(spacesAvailable < 4 && waitingPeople <= 4 && waitingPeople > 0){
        add = waitingPeople;
        waitingPeople-=add;
        stateOfLift[i]+= add;
    }
        
    }
    let hasSpaces= stateOfLift.some((el)=> el < 4)
    if (waitingPeople <= 0 && hasSpaces) {
        console.log(`The lift has empty spots!
    ${stateOfLift.join(' ')}`);
    } else if (waitingPeople > 0 && !hasSpaces) {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!
${stateOfLift.join(' ')}`);
    }
}

solve([
    "0",
    "0 2 1 4 1"
   ])