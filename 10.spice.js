function solve(startingYield) {
    let days = 0;
    let total = 0;
    
    for (i = startingYield; i> 100; i -= 10) {
        if (i > 100) {
            days++
            total += i
        }else{
            total-=26
        }
    }
    
    total -= 26 * days
    console.log(days)
    console.log(total)


}
solve(111)