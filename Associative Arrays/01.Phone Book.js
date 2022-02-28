function solve(arr){
let obj = {}
    for(let data of arr){
        let tokens = data.split(' ')
        let name = tokens[0]
        let phone = tokens[1]
       obj[name]=phone

    }
   Object.entries(obj).forEach((element) => {
       
       console.log(element.join(' -> '));
   });





}

solve(['Tim 0834212554',
       'Peter 0877547887',
       'Bill 0896543112',
       'Tim 0876566344'])