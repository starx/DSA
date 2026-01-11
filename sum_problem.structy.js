const sumPossible = (amount, numbers, memo = {}) => {
  if (amount < 0) return false;
  if (amount === 0) return true;
  
  if (amount in memo) return memo[amount];
  
  for (let num of numbers) {
    
    if(sumPossible(amount - num, numbers, memo) === true) {
      memo[amount] = true;
      return true;
      
    }
  }
  
  memo[amount] = false;
  return false;
};


























module.exports = {
  sumPossible
};