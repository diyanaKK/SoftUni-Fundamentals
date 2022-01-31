function solve(input){
    let countOfStudents = Number(input.shift());
    let countOfLectures =Number(input.shift());
    let additionalBonus = Number(input.shift());
let countOfAttendensForEachStudent = input.map(Number);
let maxBonus = 0;
let totalBonus =0

for(let i =0;i< input.length;i++){
    let currentAttendense = Number(input[i]);
    if(currentAttendense > maxBonus){
        maxBonus= currentAttendense;
totalBonus= currentAttendense/countOfLectures *(5+additionalBonus)
    }
    
}



console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`);
console.log(`The student has attended ${maxBonus} lectures.`);



}

  solve([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])