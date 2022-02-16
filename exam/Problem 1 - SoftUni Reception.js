function solve(input) {
    let e1 = Number(input[0])
    let e2 =Number(input[1])
    let e3 =Number(input[2])
    let students = Number(input[3])
    let time = 0
    let efficiency = e1+e3+e2

while(students>0){
    time++

    if(time%4!=0){
students-=efficiency
    
}
}

console.log(`Time needed: ${time}h.`);


}
solve(['3','2','5','40'])