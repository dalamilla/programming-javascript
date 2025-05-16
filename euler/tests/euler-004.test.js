const Euler004 = require("../src/euler-004");

describe("the largest palindrome made from the product of two n-digit numbers", () => {
  test.each`
    input | expectedResult
    ${2}  | ${9009}
    ${3}  | ${906609}
  `("$input should return $expectedResult", ({ input, expectedResult }) => {
    expect(Euler004(input)).toBe(expectedResult);
  });
});
