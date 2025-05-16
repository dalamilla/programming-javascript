const Euler002 = require("../src/euler-002");

describe("the sum of even Fibonacci numbers below n", () => {
  test.each`
    input      | expectedResult
    ${8}       | ${10}
    ${10}      | ${10}
    ${34}      | ${44}
    ${60}      | ${44}
    ${1000}    | ${798}
    ${100000}  | ${60696}
    ${4000000} | ${4613732}
  `("$input should return $expectedResult", ({ input, expectedResult }) => {
    expect(Euler002(input)).toBe(expectedResult);
  });
});
