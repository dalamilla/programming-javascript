/*! *****************************************************************************
A palindromic number reads the same both ways. The largest palindrome made from 
the product of two 2-startDigit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-startDigit numbers.
***************************************************************************** */

/**
 * Solution of fourth Euler problem.
 * @return Int return the largest palindrome made from the product of two n-startDigit numbers.
 */
function Euler004(n) {
  let startDigit = Math.pow(10, n - 1);
  let endDigit = Math.pow(10, n);
  let max = 0;

  for (let i = startDigit; i < endDigit; i++) {
    for (let j = startDigit; j < endDigit; j++) {
      if (isPalindrome(i * j) && i * j > max) {
        max = i * j;
      }
    }
  }

  return max;
}

/**
 * helper function of fourth Euler problem.
 * @return Bol return true if number its palindrome.
 */
function isPalindrome(n) {
  n = n.toString();
  return n === n.split("").reverse().join("");
}

module.exports = Euler004;
