const {
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound,
  sum,
} = require("./app.js");

test("adds 14 + 9 to equal 23", function () {
  let total = sum(14, 9);
  expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function () {
  const dollars = fromEuroToDollar(3.5);
  const expected = 3.5 * 1.07;
  expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("One dollar should be 156.5 yen", function () {
  const yen = fromDollarToYen(1);
  const expected = 1 * 156.5;
  expect(fromDollarToYen(1)).toBe(156.5);
});

test("One Yen should be 0,00555910GDP", function () {
  const pound = fromYenToPound(1);
  const expected = 0.87 / 156.5;
  expect(fromYenToPound(156)).toBe(0.00555910543131);
});
