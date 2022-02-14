function solve(input) {
    let treasureChest = input.shift().split('|')
    let stolen = 0

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ')
        let command = tokens.shift();
        let item = tokens

        if (command === 'Loot') {
            
            item.forEach(element => {
                if (!treasureChest.includes(element)) {
                    treasureChest.unshift(element)
                }
            })

        } else if (command === 'Drop') {

            if (treasureChest[item]) {
                treasureChest.push(treasureChest[item])
                treasureChest.splice(item, 1);    
            }
        } else if (command === 'Steal') {

             treasureChest.reverse()
            
            if(Number(item) > treasureChest.length && Number(item)>0){
                treasureChest.reverse()
                console.log(`${treasureChest.join(', ')}`);
                treasureChest=[]

            }else if(Number(item) <treasureChest.length && Number(item)>0){
              stolen=  treasureChest.splice(0,item)
              stolen.reverse()
                console.log(`${stolen.join(', ')}`);
            }

        }else if(command === 'Yohoho!'){
            break;
        }

    }

let sum = treasureChest.reduce((a,b)=>{
    return Number(a+b.length)
        },0)
if(sum >0){
    console.log(`Average treasure gain: ${(sum/treasureChest.length).toFixed(2)} pirate credits.`);
}else{
    console.log(`Failed treasure hunt.`);
}

}
solve(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])
