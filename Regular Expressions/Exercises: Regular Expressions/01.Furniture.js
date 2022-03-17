function solve(input){
let regex = />>(?P<name>[A-Za-z]+)<<(?P<price>\d+\.?\d*)!(?P<quantity>\d)/;
let furniture =[]
let total = 0
for(let line of input){
    if(line !== 'Purchase'){
        let match = regex.exec(line)
        let[name, price, qty]= match
       
            console.log(name,price,qty)
    }
}
}
solve(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])