const Euler001 = require("../src/euler-001");

describe("the sum of multiples of 3 or 5 below n", () => {
  test.each`
    input    | expectedResult
    ${1000}  | ${233168}
    ${49}    | ${543}
    ${8456}  | ${16687353}
    ${19564} | ${89301183}
  `("$input should return $expectedResult", ({ input, expectedResult }) => {
    expect(Euler001(input)).toBe(expectedResult);
  });
});
