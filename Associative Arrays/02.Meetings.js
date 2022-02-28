function solve(input){
let obj = {}
for(let scheduled of input){
    let [days,name]= scheduled.split(' ')
    
  
   if(obj.hasOwnProperty(days)){
    
       console.log(`Conflict on ${days}!`);
   }else {
    obj[days]=name
       console.log(`Scheduled for ${days}`);
   }    
}
Object.entries(obj).forEach((element) => {
       
    console.log(element.join(' -> '));
});

}
solve(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George'])