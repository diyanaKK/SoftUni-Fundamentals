function solve(input) {
    let regexForNum = /\d+/gm
    let regexForEmojis = /([:|*]{2})([A-Z][a-z]{2,})\1/gm
    let arrayForEmWithoutSimbol = []
    let sum = 0
    let obj = {}
    let coolness = []
    let emojisMatch
    let coolTresholds
    let count = 0
    for (let line of input) {
        let matches = line.match(regexForNum).map((element) => element.split('')).flat()
        matches = matches.map(Number)
        coolTresholds = matches.reduce((sum, num) => sum * num)
        console.log(`Cool threshold: ${coolTresholds}`);
        emojisMatch = line.match(regexForEmojis)
        if (emojisMatch) {

            emojisMatch.forEach(element => {
                return arrayForEmWithoutSimbol.push(element.substring(2, element.length - 2))
            });
        
        for (let i = 0; i < arrayForEmWithoutSimbol.length; i++) {
            count++
            sum = arrayForEmWithoutSimbol[i].split('').map(x => x.charCodeAt(0))
                .reduce((a, b) => a + b)
            coolness.push(sum)
        }
                console.log(`${count} emojis found in the text. The cool ones are:`);
                coolness.forEach((sum) => {
                    let index = coolness.indexOf(sum)
                    obj[emojisMatch[index]] = sum
                })
                Object.entries(obj).forEach((element) => {

                    if (element[1] > coolTresholds) {
                        console.log(`${element[0]}`);
                    }
                })
            
        
    }
    }


}
 solve(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])
// solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])