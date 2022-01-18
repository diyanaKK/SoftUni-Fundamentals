function solve(input) {
    for (let index = 1; index < input.length; index++) {
        if (input.split().reverse().join() === index) {
            console.log(`User ${input[0]} logged in.`);
        } else {
            console.log(`Incorrect password. Try again.`);
        } if (index === input.length - 1) {
            console.log(`User ${input} blocked!`);
        }
    }

}
solve('Acer', 'login', 'go', 'let me in', 'recA')