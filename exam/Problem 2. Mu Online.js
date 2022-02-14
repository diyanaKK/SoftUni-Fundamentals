function solve(input){
let arr = [];
arr.push(input);
let dungRoom = arr.shift().split('|')

let initialHealth =100;
let initialBitcoins = 0;
let roomCount =0

for(let i = 0; i<dungRoom.length;i++){
    let tokens = dungRoom[i].split(' ');
    let command = tokens[0];
    let num = Number(tokens[1]);
    roomCount++
    

    if(command === "potion"){
    let need = 100-initialHealth;
    if(num+initialHealth>100){
        initialHealth=100
        console.log(`You healed for ${need} hp.`);
    }else {
        console.log(`You healed for ${num} hp.`);
        
    }
        console.log(`Current health: ${initialHealth} hp.`);
    }else if(command === 'chest'){
        initialBitcoins+=num;
        console.log(`You found ${num} bitcoins.`);
    }else {
        initialHealth-=num
        
        if(initialHealth > 0){
            console.log(`You slayed ${command}.`);
            
        }else{
            console.log(`You died! Killed by ${command}.`);
            console.log(`Best room: ${roomCount}`);
            break;
        }

        
    }
    if(roomCount == dungRoom.length){
        console.log("You've made it!");
        console.log(`Bitcoins: ${initialBitcoins}`);
        console.log(`Health: ${initialHealth}`);
        break;
    }
}

}
solve("cat 0|potion 0|orc 0|chest 10")