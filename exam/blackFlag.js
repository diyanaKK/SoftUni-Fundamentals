function solve (days,plunderForDay,expectedPlunder){
    let totalPlunder = days *plunderForDay;
    let precentage= 0.3;
    for(let i = 1 ; i<=days;i++){
        if(i % 3 === 0){
            totalPlunder+=plunderForDay/2;
        }else if(i % 5 === 0){
            totalPlunder-= totalPlunder *0.3;
        }
    }
    


if(totalPlunder>= expectedPlunder){
    console.log(`Ahoy! ${totalPlunder} plunder gained.`);
}

   
}

solve(10,20,380)