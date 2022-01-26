function solve(arr){
   let newArr = arr.sort((a,b)=>{
       return a.length - b.length 
   })
   newArr= newArr.sort((a,b)=>{
       return  a.localeCompare(b)
   })

    console.log(newArr.join('\n'));
}
solve(['alpha', 'beta', 'gamma']);
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])