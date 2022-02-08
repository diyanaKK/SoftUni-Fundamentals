function solve(input) {
    let studentsCount = input.pop()
    let studentsForHour = input.map(x => Number(x)).reduce((sum, el) => {
        return sum + el
    })
    let hour = 0;
    let totalTime = 0;
    let breaks = 0;

    
     hour = Math.ceil(studentsCount / studentsForHour)
     if(hour > 3){
         breaks = hour / 4;
         totalTime = hour + breaks;
         console.log(`Time needed: ${totalTime}h.`);
     }else if(hour< 0) {
        console.log(`Time needed: 0h.`);

     }else if(studentsCount=== 0){
        console.log(`Time needed: 0h.`);
     }else if(hour< 3 && hour > 0){
         totalTime = hour;
         console.log(`Time needed: ${totalTime}h.`);

     }
    
}
solve(['3','2','5','40'])