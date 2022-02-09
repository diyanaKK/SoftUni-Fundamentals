function solve(input) {
    const houses = input.shift().split("@").map(Number);
    let currentPosition = 0;
    for (iteration = 0; iteration < input.length; iteration++) {
      const [command, jumLen] = input[iteration].split(" ");
      if (jumLen) {
        currentPosition += +jumLen;
      }
      // console.log({ command, jumLen, currentPosition, houses });
      if (command === "Jump") {
        // Keep in mind that Cupid can have a larger jump length than
        // the size of the neighborhood, and if he does jump outside of it,
        // he should start from the first house again (index 0)
        if (currentPosition > houses.length - 1 || currentPosition < 0) {
          currentPosition = 0;
        }
        if (houses[currentPosition] <= 0) {
          console.log(`Place ${currentPosition} already had Valentine's day.`);
        } else {
          houses[currentPosition] -= 2;
          if (houses[currentPosition] <= 0) {
            console.log(`Place ${currentPosition} has Valentine's day.`);
          }
        }
      }
      if (command === "Love!") {
        console.log(`Cupid's last position was ${currentPosition}.`);
        break;
      }
    }
    if (houses.some((h) => h > 0)) {
      let houseFailed = houses.filter((e) => e > 0).length;
      console.log(`Cupid has failed ${houseFailed} places.`);
    } else {
      console.log(`Mission was successful.`);
    }
  }
  solve(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
//   solve(["2@4@2",
//   "Jump 2",
//   "Jump 2",
//   "Jump 8",
//   "Jump 3",
//   "Jump 1",
//   "Love!"])
  