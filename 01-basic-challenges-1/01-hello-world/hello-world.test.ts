import { describe, expect, test } from "@jest/globals";
import helloWorld from "./hello-world";

describe("Hello World", () => {
  test("Returning 'Hello World!' as a string", () => {
    const answer = "Hello World!";

    // Arrange
    const want = helloWorld();

    // Act

    // Assert
    expect(want).toBe(answer);
  });
});
