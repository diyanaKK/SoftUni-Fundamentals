function solve(text){
text = text.split('')
let words = []
text.forEach(element => {
    if(element.charCodeAt(0)>= 65 && element.charCodeAt(0)<=90 ){
        words.push(element)
    }else if(element.charCodeAt(0)>=97 && element.charCodeAt(0)<=122){
        words[words.length -1]+=element
    }
});
console.log(words.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')