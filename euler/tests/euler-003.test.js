const Euler003 = require("../src/euler-003");

describe("the largest prime factor of n", () => {
  test.each`
    input           | expectedResult
    ${2}            | ${2}
    ${3}            | ${3}
    ${5}            | ${5}
    ${7}            | ${7}
    ${8}            | ${2}
    ${13195}        | ${29}
    ${600851475143} | ${6857}
  `("$input should return $expectedResult", ({ input, expectedResult }) => {
    expect(Euler003(input)).toBe(expectedResult);
  });
});
