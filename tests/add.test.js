const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test("should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("should generate greeting from a name", () => {
  const resultName = generateGreeting("Gabriel");
  expect(resultName).toBe("Hello Gabriel!");
});

test("should generate greeting from no name", () => {
  const resultName = generateGreeting();
  expect(resultName).toBe("Hello Anonymous!");
});
