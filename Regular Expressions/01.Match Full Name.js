function solve(input){
let regexp = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
let maatches = input.match(regexp)
console.log(maatches.join(' '));

}
solve('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov')