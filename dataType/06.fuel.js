function solve (distance,passenger,price){
    let fuel = (distance / 100)*7;
    fuel+=passenger * 0.1;
    let money = fuel *price;

    console.log(`Needed money for that trip is ${money}lv.`)
}
solve(260,9,2.49)