function solve(input) {
    let list = input.shift().split(', ')
    let num = Number(input.shift())

if(num >=0 && num <=50){ 
    for (let i = num; i <= num; i++) {
        for (let k = 0; k < input.length; k++) {
            let tokens = input[k].split(', ');
            let command = tokens[0]


            if (command === 'Add') {
                let card = tokens[1]
                if (list.includes(card)) {
                    console.log(`Card is already in the deck`);
                } else {
                    list.push(card)
                    console.log(`Card successfully added`);
                }

            } else if (command == 'Remove') {
                let card = tokens[1]
                if (list.includes(card)) {
                    let index = list.indexOf(card)
                    list.splice(index, 1)
                    console.log(`Card successfully removed`);
                } else {
                    console.log(`Card not found`);
                }

            } else if (command === 'Remove At') {
                let index = Number(tokens[1])
                if (list[index]) {
                    if( list.includes(list[index])){
                        list.splice(index, 1)
                        console.log(`Card successfully removed`);
                    }else{
                        console.log(`Card not found`);
                    }    
                } else {
                    console.log(`Index out of range`);
                }

            } else if (command === 'Insert') {
                let index = Number(tokens[1])
                let cardName = tokens[2]
                if (list[index]) {
                    if (list.includes(cardName)) {
                        console.log(`Card is already added`);
                    }else{
                        list.splice(index, 0, cardName)
                        console.log(`Card successfully added`);
                    }    
                } else {
                    console.log(`Index out of range`);
                }

            }
        }
        
    }
    console.log(list.join(', '));
}else{
    console.log(list.join(', '))
}


}
solve(["Jack of Spades, Ace of Clubs, Jack of Clubs",
"51",
"Insert, -1, Queen of Spades",
"Remove At, 1"])
