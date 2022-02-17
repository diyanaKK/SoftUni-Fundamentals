function solve(input){
let days = Number(input.shift())
let dailyPlunder = Number(input.shift())
let expectedPlunder = Number(input)
let totalPlunder = 0

for(let i = 1;i<=days;i++){
totalPlunder+=dailyPlunder
if(i % 3===0){
    let additionalPl = dailyPlunder/2
    totalPlunder+=additionalPl
}if(i%5===0){
    let lost = totalPlunder*0.30
    totalPlunder-=lost
}
}
if(totalPlunder >=expectedPlunder){
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
}else{
    let diff = (totalPlunder/expectedPlunder)*100
    
    console.log(`Collected only ${(diff).toFixed(2)}% of the plunder.`);
}

}
solve(["10",
"20",
"380"])