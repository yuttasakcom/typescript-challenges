import getSum from "./get-sum";

describe("getSum", () => {
  test("Calculating the sum of two numbers", () => {
    const answer = 12;
    const num1 = 5;
    const num2 = 7;

    const result = getSum(num1, num2);

    expect(result).toBe(answer);
  });
});
