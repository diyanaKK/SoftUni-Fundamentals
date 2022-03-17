function solve(input){
    let wordsForReplace =input[1]
    let text = input[0]
    let count = 0


    for(let ch of text){
        if(ch === '_'){
            count++
        }else if(ch !== '_' && count >0){
            for(let word of wordsForReplace){
                if(word.length === count){
                    let template = '_'.repeat(count)
                    text = text.replace(template,word)
                    count=0
                }
            }
        }
    }
    console.log(text);

}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])