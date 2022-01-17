// When the operation is complete, print on the console on two separate lines how many days the mine has operated
// and the total amount of spice extracted.

function solve(startingYield) {
    let total = 0;
    let days = 0;
    // After it has been mined for a day, the yield drops by 10,
    for (let i = startingYield; i >= 100; i -= 10) {
        //  meaning on the second day it’ll produce 10 less spice than on the first, on the third day 10 less
        // than on the second, and so on (see examples).
        // The mining crew consumes 26 spice every day at the end of their shift and an additional
        days++
        total += i;
        if (total - 26 >= 0) {
            total -= 26;
            // . Note that the workers cannot consume more spice than there is in storage.
        }
    }
    // 26 after the mine has been
    // exhausted
    if (total - 26 >= 0) {
        total -= 26;
        // . Note that the workers cannot consume more spice than there is in storage.
    }
   
    console.log(days);
    console.log(total);
}

solve(450);
solve(111);