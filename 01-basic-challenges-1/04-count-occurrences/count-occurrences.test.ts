import countOccurrences from "./count-occurrences";

test("Count Occurrences of a Character", () => {
  expect(countOccurrences("hello", "l")).toBe(2);
  expect(countOccurrences("programming", "m")).toBe(2);
  expect(countOccurrences("banana", "a")).toBe(3);
  expect(countOccurrences("banana", "z")).toBe(0);
});
