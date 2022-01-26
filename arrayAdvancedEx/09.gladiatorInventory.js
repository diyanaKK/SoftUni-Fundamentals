function solve(arr) {

    let inventory = arr.shift().split(' ')

    for (let el of arr) {
        let tokens = el.split(' ')
        let commands = tokens[0];
        let equipmentThatWeTake = tokens[1];



        if (commands === "Buy") {
            if (!inventory.includes(equipmentThatWeTake)) {
                inventory.push(equipmentThatWeTake)
            }
        } else if (commands === "Trash") {
            if (inventory.includes(equipmentThatWeTake)) {
                let index = inventory.indexOf(equipmentThatWeTake);
                inventory.splice(index, 1)
            }
        } else if (commands === "Repair") {
            if (inventory.includes(equipmentThatWeTake)) {
                let index= inventory.indexOf(equipmentThatWeTake);
                inventory.splice(index,1)
                inventory.push(equipmentThatWeTake)
            }
        } else if (commands === "Upgrade") {
            let upgrade = equipmentThatWeTake.split('-')
            if (inventory.includes(upgrade[0])) {

                let index = inventory.indexOf(upgrade[0]);
                inventory.splice(index+1, 0,upgrade.join(':'))
            }
        }




    }
    console.log(inventory.join(' '));
}

// solve(['SWORD Shield Spear',
//     'Buy Bag',
//     'Trash Shield',
//     'Repair Spear',
//     'Upgrade SWORD-Steel'])
    solve(['SWORD Shield Spear',

    'Trash Bow',
    
    'Repair Shield',
    
    'Upgrade Helmet-V']
)