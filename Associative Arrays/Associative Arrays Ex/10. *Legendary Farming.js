function solve(input) {
    let kingdoms = {
        shards: 'Shadowmourne',
        fragments: 'Valanyr',
        motes: 'Dragonwrath'
    }
    let obj = {
        Shadowmourne: 0,
        Valanyr: 0,
        Dragonwrath: 0
    }
    let objForNoneMaterial = {
        shards: 0,
        fragments: 0,
        motes: 0
    }

    let objForMaterials = {
        shards: 0,
        fragments: 0,
        motes: 0
    }
    let junk = {}

    let newInput = input.split(' ')
    for (let i = 0; i < newInput.length; i += 2) {
        let material = newInput[i + 1].toLowerCase();
        let value = Number(newInput[i]);
        let toAddInKingdom = kingdoms[material];


        if (toAddInKingdom) {

            objForMaterials[material] += value
            obj[toAddInKingdom] += value;

            if (obj[toAddInKingdom] >= 250) {
                objForMaterials[material] -= 250
                console.log(`${toAddInKingdom} obtained!`);

                break;
            }

        } else {
            if(!junk.hasOwnProperty(material)){
                junk[material] =value
            }else{ 
                junk[material]+= Number(value)
            }
            

        }

    }
    let keys = Object.keys(objForNoneMaterial).forEach((element) => {
        if (!objForMaterials.hasOwnProperty(element)) {
            objForMaterials[element] = 0
        }
    })

    Object.entries(objForMaterials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).forEach(([material, quantity]) => {
        console.log(`${material}: ${quantity}`);
    });



    Object.entries(junk).sort((a, b) =>a[0].localeCompare(b[0])).forEach(([material, quantity]) => {
        
        console.log(`${material}: ${quantity}`);
    });
}




 
  solve('123 silver 19 silver 100 silver 100 silver')