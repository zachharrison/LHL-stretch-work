const countdownGenerator = function (x) {
  return function() {
    if(x === 0){
      console.log(`Blast Off!`);
    } else if(x < 0) {
      console.log(`Rockets already gone, bub!`)
    } else {
      console.log(`T-minus ${x}...`);
    }
    x--;
  }
};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!