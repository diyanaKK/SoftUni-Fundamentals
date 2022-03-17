function solve(input) {
    let travelRoute = input.shift().split('||')
    let fuel = Number(input.shift())
    let ammunition = Number(input)

   
for(let i = 0;i<travelRoute.length;i++){
  let tokens =travelRoute[i].split(' ')
  let command = tokens[0]
  let value = Number(tokens[1])

if(command === 'Travel'){
    fuel-=value
    if(fuel >= 0){
        console.log(`The spaceship travelled ${value} light-years.`);
    }else{
        console.log(`Mission failed.`);
        break;
    }
}else if(command === 'Enemy'){
    if(ammunition >= value){
        ammunition-=value
        console.log(`An enemy with ${value} armour is defeated.`);
    }else{
        fuel= fuel - value *2;
        if(fuel >=0){
            console.log(`An enemy with ${value} armour is outmaneuvered.`);
        }else{
            console.log(`Mission failed.`);
        break;
        }
    }
}else if(command === 'Repair'){
    fuel+=value
    ammunition+= value*2
    console.log(`Ammunitions added: ${value*2}.`);
    console.log(`Fuel added: ${value}.`);
}else if(command === 'Titan'){
    console.log(`You have reached Titan, all passengers are safe.`);
    break;
}

}





}
solve([ 'Travel 20||Enemy 0||Enemy 0||Enemy 10||Repair 15||Enemy 0||Titan', 
'60', 
'100' ])