function solve(input){
let password = input.shift()
let arr =[]
for(let line of input){
let tokens = line.split(' ')
let command = tokens[0]

if(command === 'TakeOdd'){
for(let i =0;i<= password.length;i++){
if(i%2 !== 0){
    arr.push(password[i])
}
}
password= arr.join('')
console.log(password);
}
if(command === 'Cut'){
    let index =Number(tokens[1])
    let length = Number(tokens[2])
    let substring = password.substring(index,index+length)
    password =password.replace(substring,'')
    console.log(password);
}if(command === 'Substitute'){
    let substring = tokens[1]
    let substitute = tokens[2]
    if(password.includes(substring)){
password = password.split(substring).join(substitute)
console.log(password);
    }else{
        console.log(`Nothing to replace!`);
    }
}if(command === 'Done'){
    console.log(`Your password is: ${password}`);
}
}
}
solve(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])