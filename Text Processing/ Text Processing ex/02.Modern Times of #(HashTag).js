function solve(str){
let text = str.split(' ')
let result =[]

for(let word of text){
    if(word[0]==='#'&& word.length!==1){
        let finalWord =word.substring(1)
        result.push(finalWord)
    }
}
let finalResult =[]
for(let el of result){
    let array = el.split('')
let flag = true
for (let index = 0; index < array.length; index++) {
    let currentCode = array[index].charCodeAt(0)
    if((currentCode < 97 || currentCode > 122) &&(currentCode < 65 || currentCode > 90)){
        flag = false
    }
}

if(flag){
    finalResult.push(el)
}
}
finalResult.forEach(el => console.log(el))


}
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')