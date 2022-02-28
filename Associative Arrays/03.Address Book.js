function solve(input){

    let obj = {}
    for(let adresses of input){
        let[name,adress] = adresses.split(':')
        obj[name]=adress
        
    }
    let arr = Object.entries(obj)
    arr.sort((a,b)=>a[0].localeCompare(b[0]))
       .forEach((element) => {
       
        console.log(element.join(' -> '));
    });
    
}
solve(['Tim:Doe Crossing',
       'Bill:Nelson Place',
       'Peter:Carlyle Ave',
       'Bill:Ornery Rd'])