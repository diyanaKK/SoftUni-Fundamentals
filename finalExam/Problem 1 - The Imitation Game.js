function solve(input) {
    let message = input.shift()
    
    for (let i = 0; i < input.length; i++) {


        let tokens = input[i].split('|')
        let command = tokens.shift()

        if (command !== 'Decode') {

            if (command === 'Move') {
                let number = Number(tokens[0])
                
                
            }else if(command === 'Insert'){
                let index = tokens[0]
                let value = tokens[1]
                
            }
        }







    }

}
solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])