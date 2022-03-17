
    function theBiscuitFactory(input) {
        let biscuitsPerDay = Number(input.shift());
        let workers = Number(input.shift());
        let competingFactory = Number(input.shift());
        let totalBiscuitsPerDay =0;
        let biscuitsPerMonth = 0;
        let diffBetweenFac = 0;
        let diffByPercent = 0;

        for (let i = 1; i <=30; i++) {
          totalBiscuitsPerDay = workers * biscuitsPerDay;

          if (i % 3 === 0) {
            totalBiscuitsPerDay = Math.floor(workers * (biscuitsPerDay * 0.75));
          }
          biscuitsPerMonth += totalBiscuitsPerDay;
        }
       
        diffBetweenFac = Math.abs(biscuitsPerMonth - competingFactory);
        diffByPercent = Math.abs((diffBetweenFac / competingFactory) * 100);
       
        console.log(`You have produced ${biscuitsPerMonth} biscuits for the past month.`);
        if (biscuitsPerMonth >= competingFactory) {
          console.log(`You produce ${diffByPercent.toFixed(2)} percent more biscuits.`);
        } else {
          console.log(`You produce ${diffByPercent.toFixed(2)} percent less biscuits.`);
        }
      }

      theBiscuitFactory(["-1",
      "0",
      "10"])