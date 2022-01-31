function solve(input) {
    let targets = input.shift().split(' ').map(Number)
    let shots = input.map(Number)
    let end = shots.pop()
    let countShots = 0
let targetL = targets.length
let shotsL = shots.length

for(let i = 0;i<shotsL;i++){
    let currentShot = Number(shots[i]);
    let currentTarget = targets[currentShot];

if(currentTarget > -1){
    targets[currentShot] = -1;
    countShots++

for(let j = 0;j<targetL;j++){
    if(targets[j]>-1){
        if(targets[j]>currentTarget){
            targets[j]-=currentTarget;
        }else{
            targets[j]+=currentTarget
        }
    }
}
}
}
    console.log(`Shot targets: ${countShots} -> ${targets.join(' ')}`);
}
solve((["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]))