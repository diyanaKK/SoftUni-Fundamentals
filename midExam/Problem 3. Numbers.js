function solve(input){
let numbers = input.split(' ').map(x => Number(x))

let averageNum = numbers.reduce((a,b)=>{
    return a+b  
})
averageNum/=numbers.length
let numGreaterThanAverage = []

for(let i =0;i<numbers.length;i++){
    if(numbers[i]>averageNum){
numGreaterThanAverage.push(numbers[i])
    }
}

numGreaterThanAverage.sort((a,b)=>{
    return b-a
})
if(numGreaterThanAverage.length > 5){

numGreaterThanAverage.splice(5)
}else if(numGreaterThanAverage<averageNum){
    console.log('No');
}



console.log(numGreaterThanAverage.join(' '));
}
solve('10 20 30 40 50');
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51');
solve('1');