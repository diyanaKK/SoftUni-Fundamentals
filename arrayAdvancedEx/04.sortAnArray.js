function solve(arr){
//    let newArr = arr.sort((el)=>{
//        if(a.length == b.length){
//            if(a.localeCompare(b)){

//            }else{
//                return a.length > b.length
//            }
    
        
arr.sort(function(a, b){return a.length - b.length || a.localeCompare(b)});
        
    console.log(arr.join('\n'));
}
solve(['alpha', 'beta', 'gamma']);
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])