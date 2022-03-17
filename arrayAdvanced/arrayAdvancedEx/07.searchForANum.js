function solve(colection,numbers){
        let numWeTake = colection.splice(0,numbers[0]);
        let numForDelete= numWeTake.splice(0,numbers[1]);
        let count = 0
        for(let i = 0;i<numWeTake.length;i++){
            if(numWeTake[i]=== numbers[2]){
              count++ 
                
            }
        }
       console.log(`Number ${numbers[2]} occurs ${count} times.`);
    
}

solve([5, 2, 3, 4, 1, 6],

    [5, 2, 3])