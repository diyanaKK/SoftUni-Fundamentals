
function solve(arr){
let health = 100;
let initialCoins = 0;
for(let i = 0;i<arr.length;i++){
for (let element of arr) {
    if(element.includes("potion")){
health+=Number(element);
    if(health===100){
        health= 100;
        console.log(`You healed for ${Number(element)} hp.`);
        console.log(`Current health: ${health} hp.`);
        //  If the first part is &quot;potion&quot;: you are healed with the number in the second part. But your health cannot
// exceed your initial health (100). Print: &quot;You healed for {0} hp.&quot;

    }
}else if(element.includes('chest')){
    initialCoins+=Number(element)
    console.log(`You found ${Number(element)} coins.`);
}else if(health>0){
    console.log(`You slayed
        ${element}.`);
}else if(health<=0){
    console.log(`You died! Killed by ${element}.`);
    console.log(`Best room: ${i}`);

}if(i== element){
    console.log(`You've made it!, Coins: ${initialCoins}, Health: ${health}.`);

}
}
}
}





solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);