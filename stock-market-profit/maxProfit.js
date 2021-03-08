const prices = [45, 24, 35, 31, 40, 38, 100, 56];

// SOLUTION 1 USING BRUTE FORCE
const maxProfit = (prices) => {

  let max = -1;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > max) {
        max = prices[j] - prices[i];
      }
    }
  }

  return max;

};

// SOLUTION 2 USING DIVIDE AND CONQUER
const maxProfit2 = (prices) => {

  // BASE CASE
  if (prices.length === 1) return -1;

  // DIVIDE THE ARRAY INTO TWO 
  const half = Math.floor(prices.length / 2);
  const left = prices.slice(0, half);
  const right = prices.slice(half);

  // USE RECURSION TO FIND MAX PROFIT FOR BOTH ARRAYS
  const leftBest = maxProfit2(left);
  const rightBest = maxProfit2(right);
  const crossBest = Math.max(...right) - Math.min(...left);

  // RETURN THE LARGEST NUMBER OUT OF THE THREE
  return Math.max(leftBest, rightBest, crossBest);

};



console.log(maxProfit(prices));
console.log(maxProfit2(prices));
