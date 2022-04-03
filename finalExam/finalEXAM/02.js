function solve(input) {
    let num = input.shift()
    let regex = /(?<command>![A-Z][a-z]{3,}!):(?<message>\[[A-Za-z]{8,}\])/gm
    let regex2 = /[A-Za-z]/gm
    let arr = []
    let arrWithCode = []

    for (let line of input) {
        let matched = line.match(regex)
        if (matched) {
          
            matched.forEach(element => {
                let tokens = element.split(':')
                let commnad = tokens[0].split('!')
                let letter = tokens[1].match(regex2)
                arr.push(letter)
                arr = arr.flat()
            for(let letter of arr){
                let code = letter.charCodeAt()
                arrWithCode.push(code)
            }
            console.log(`${commnad[1]}: ${arrWithCode.join(' ')}`);
            
            });
            
        } else {
            console.log(`The message is invalid`);
        }
    }
    
   


}

solve((["3",
"go:[outside]",
"!drive!:YourCarToACarWash",
"!Watch!:[LordofTheRings]"])
)