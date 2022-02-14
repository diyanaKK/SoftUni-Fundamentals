function solve(input){
    let pirateShip = input.shift().split('>')
    let warShip = input.shift().split('>')
let maxHealth = Number(input.shift())
let isDead = false

for(let i = 0;i<input.length;i++){
    let tokens = input[i].split(' ')
    let command = tokens.shift();
   

if(command === 'Retire'){
    break;
}else if(command === 'Fire'){
    let index=Number(tokens[0])
    let damage = Number(tokens[1])
    if(warShip[index]){
        warShip[index]-=damage
    }if(warShip[index]<= 0){
        isDead = true
        console.log(`You won! The enemy ship has sunken.`);
        break;
    }
}else if(command === 'Defend'){
    let startIndex = Number(tokens[0])
    let endIndex = Number(tokens[1])
    let damage = Number(tokens[2])
    if(pirateShip[startIndex] && pirateShip[endIndex] ){
        for(let j = startIndex;j<=endIndex;j++){
            pirateShip[j]-=damage
            if(pirateShip[j]<=0){
                isDead = true
                console.log(`You lost! The pirate ship has sunken.`);
                break;
            }
        }
    }
}else if(command === 'Repair'){
    let index= Number(tokens[0])
    let health = Number(tokens[1])
    if(pirateShip[index]){
        pirateShip[index]+=health
        if(pirateShip[index]>maxHealth){
            pirateShip[index] = maxHealth
        }
    }
}else if(command = 'Status'){
    let lowerSections = Number(maxHealth*0.20);
    let count =0
    
    pirateShip.forEach((el)=>{
        if(el < lowerSections){
            count++
            return count
        }
    })
    
    console.log(`${count} sections need repair.`);
}
}
if(!isDead){
    let sumPirate = pirateShip.reduce((sum,el)=>{
        sum+=Number(el)
        return sum
    },0)
    let sumWar = warShip.reduce((sum,el)=>{
        sum+=Number(el)
        return sum
    },0)
console.log(`Pirate ship status: ${sumPirate}`);
 console.log(`Warship status: ${sumWar}`);   
}


}
solve(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])