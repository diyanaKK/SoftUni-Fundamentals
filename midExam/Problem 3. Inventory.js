function solve(input) {
    let inventory = input.shift().split(', ');

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' - ')
        let command = tokens[0];
        let item = tokens[1];
       


        if (command === 'Collect') {
            if (!inventory.includes(item)) {
                inventory.push(item)
            }
        }else if (command === 'Drop') {
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item)
                inventory.splice(index, 1)
            }
        }else if(command === 'Combine Items'){
            let oldAndNew = item.split(':')
        let oldItem = oldAndNew[0];
        let newItem = oldAndNew[1]
        if(inventory.includes(oldItem)){
            let index = inventory.indexOf(oldItem);
            inventory.splice(index+1,0,newItem)
        }
        }else if(command ==='Renew'){
            if(inventory.includes(item)){
                let index= inventory.indexOf(item);
                inventory.splice(index,1);
                inventory.push(item)
            }
        }else if(command === 'Craft!'){
            console.log(inventory.join(', '));
            break;
        }

    }



}
solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])