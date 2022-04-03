function solve(input){
let regex = /(?<eggscolor>[@|#]+[a-z]{3,}[@|#]+)*(?:\W+)\/(?<amount>\d+\/*)/gm
let regex2=/[A-Za-z]+/gm
let regexForAm = /\d+/gm
for(let line of input){
    let matched = line.match(regex)
    if(matched){
        matched.forEach(element => {
            let color = element.match(regex2)
            if(color){
             let amount = element.match(regexForAm)
             console.log(`You found ${amount} ${color.join('')} eggs!`);
            }
            
        });
         
    }    
}
}
solve((['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/'])
)
solve(['#@##@r@#/8/@d@u/2pl@////10/'])
