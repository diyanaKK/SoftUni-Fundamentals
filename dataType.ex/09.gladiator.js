function solve(lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let total = 0;

    for (let i = 1; i <= lostFightCount; i++) {
        if (i % 2 == 0) {
            total += helmetPrice;
        }
        if (i % 3 == 0) {
            total += swordPrice
        } 
        if (i % 2 === 0 && i%3===0) {
            total += shieldPrice
        }
        if (i % 12 == 0) {
            total += armorPrice
    }
    
}
console.log(total);
}
solve(23,
12.50,
21.50,
40,
200)