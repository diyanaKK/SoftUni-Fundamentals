function solve(input){
let foodForMonth = Number(input.shift())*1000;
let hayForMonth = Number(input.shift())*1000
let coverForMonth= Number(input.shift())*1000
let pigsWeight = Number(input)*1000;


for(let i =1;i<=30;i++){
 foodForMonth-=300;
    if(i %2 ===0){
         let hayForDay=foodForMonth*0.05
         hayForMonth-=hayForDay;
    }if(i%3===0){
        coverForDay= pigsWeight/3
      coverForMonth-=coverForDay  
    }else if(foodForMonth === 0 || hayForMonth===0 || coverForMonth===0){
        break;
    }
    
}
foodForMonth=foodForMonth/1000;
hayForMonth=hayForMonth/1000;
coverForMonth= coverForMonth/1000;

if(foodForMonth <= 0 || hayForMonth <=0 || coverForMonth <=0){
    console.log('Merry must go to the pet store!');
}else {
    console.log(`Everything is fine! Puppy is happy! Food: ${foodForMonth.toFixed(2)}, Hay: ${hayForMonth.toFixed(2)}, Cover: ${coverForMonth.toFixed(2)}.`);
}






}
solve((["10", 
"5", 
"5.2", 
"1"]))