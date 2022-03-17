
function solve(arr){
let health = 100;
let initialCoins = 0;
let allCoins = 0;
let dungen = arr[0].split('|');
let counterRooms = 0;

for(let i = 0;i<dungen.length;i++){
   let currentRoom =dungen[i].split(' ');
   let comand = currentRoom[0].split(' ');
   let num = currentRoom[1];
if(comand === 'potion'){
    if(num+health>100){
        health=100;
    }else{
        health+=num;
        console.log(`Current health: ${num}hp`);
    }

}
}




}





solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);