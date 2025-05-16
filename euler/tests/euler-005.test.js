const Euler005 = require("../src/euler-005");

describe("smallest positive number that is evenly divisible by all of the numbers from 1 to n", () => {
  test.each`
    input | expectedResult
    ${5}  | ${60}
    ${7}  | ${420}
    ${10} | ${2520}
    ${13} | ${360360}
    ${20} | ${232792560}
  `("$input should return $expectedResult", ({ input, expectedResult }) => {
    expect(Euler005(input)).toBe(expectedResult);
  });
});
