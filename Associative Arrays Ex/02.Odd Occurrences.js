function solve(input) {
    let list = input.toLowerCase().split(' ')

    let map = new Map
    let arr = []
    let value = 1
    for(let word of list){
         
         if(map.has(word)){
             let currentValue = map.get(word)
             currentValue++
             map.set(word,currentValue)
         }else {
             map.set(word,value)
         }
    }
   
for(let [key,value] of map.entries()){
    if(Number(value)% 2 !== 0){
arr.push(key)
    }
}
console.log(arr.join(' '));
 
}
solve('Cake IS SWEET is Soft CAKE sweet Food')