function solve(input){
let regex =/(@|#)([A-Za-z]{2,})\1\1([A-Za-z]{2,})\1/gm
let match
let regex2 = /[A-Za-z]{2,}/gm
let array = []
for(let line of input){
  match = line.match(regex)
} 
  if(!match){
      console.log(`No word pairs found!`);
  }else{
      console.log(`${match.length} word pairs found!`);
      for(let line of match){
        let words = line.match(regex2)
        
        if(words[0]===words[1].split('').reverse().join('')){
            array.push(words.join(' <=> '))
        }
    }
  }


if(array.length == 0){
    console.log(`No mirror words!`);
}else{
console.log(`The mirror words are:`);
console.log(array.join(', '));
}


}
solve([ '##' ])
 solve([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])