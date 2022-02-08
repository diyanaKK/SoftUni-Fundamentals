// function solve(input){
// let numberOfHouse = input.shift().split('@')
// let jumps = input
// for(let i =0;i<jumps.length;i++){
//     let tokens = jumps[i].split(' ');
//     let command =tokens[0];
//     let jumpsLength = tokens[1];

// if(command === 'Jump'){
//    if(numberOfHouse[jumpsLength] > 0 && jumpsLength <= numberOfHouse.length){
//      numberOfHouse.map((element, index) => {
//         if (index === jumpsLength) {
//             numberOfHouse[index] -= 2;
//         }if (numberOfHouse[index] <= 0) {
//             console.log(`Place ${numberOfHouse[jumpsLength]} has Valentine's day.`);
//         }});

//    }else if(numberOfHouse[jumpsLength] === 0 && jumpsLength <= numberOfHouse.length){
// console.log(`Place ${numberOfHouse[jumpsLength]} already had Valentine's day.`);

//    }else if(jumpsLength > numberOfHouse.length){
//        return;
//    }
// }if()


// }




// }

// solve(["10@10@10@2",
// "Jump 1",
// "Jump 2",
// "Love!"]);

// function eachHouse()