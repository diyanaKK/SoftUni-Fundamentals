function solve(input) {
    let text = (input[0] + input[1]).split('').reverse()
    let wordForReplace = input[2].split('').reverse()
    let vowel = ['a', 'e', 'o', 'u', 'i']
    let array = []
    let currentIndexForWord = 0
    for (let i = 0; i < text.length; i++) {
        if (vowel.includes(text[i])) {
            
            array.push(wordForReplace[currentIndexForWord].toUpperCase())
            currentIndexForWord++
            if (currentIndexForWord > wordForReplace.length - 1) {
                currentIndexForWord = 0
            }
        } else {
            array.push(text[i])
        }
    }
    console.log(`Your generated password is ${array.join('')}`);
    
}

solve([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
    ])