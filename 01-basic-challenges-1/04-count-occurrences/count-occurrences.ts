export default function countOccurrences(str: string, charecter: string) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === charecter) {
      count++;
    }
  }
  return count;
}
