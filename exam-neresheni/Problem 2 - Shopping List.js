function solve(input){
let listWithProducts=input.shift().split('!');

for(let i = 0;i<input.length;i++){
    let tokens =input[i].split(' ')
    let command =tokens[0];
    let item = tokens[1];
    let newItem = tokens[2];
    let index =listWithProducts.indexOf(item);

    if(command !== "Go Shopping!"){
    if(command === 'Urgent'){
        if(!listWithProducts.includes(item)){
            listWithProducts.unshift(item);
        }
    } if(command === 'Unnecessary'){
        if(listWithProducts.includes(item)){
            listWithProducts.splice(index,1)
        }
    } if(command === 'Correct'){
        if(listWithProducts.includes(item)){
          listWithProducts.splice(index,1,newItem)
        }
    } if(command === 'Rearrange'){
        if(listWithProducts.includes(item)){
            listWithProducts.splice(index,1).push(item);   
        }
    } 
    
} else{
    break;
}
    
    
    
}
console.log(listWithProducts.join(', '));

}
solve(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])