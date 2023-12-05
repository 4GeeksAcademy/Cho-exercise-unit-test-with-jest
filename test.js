const {
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound,
  sum,
  oneEuroIs,
} = require("./app.js");

test("adds 14 + 9 to equal 23", function () {
  let total = sum(14, 9);
  const expected = 23;
  expect(total).toBe(expected);
});

test("One euro should be 1.07 dollars", function () {
  const dollars = fromEuroToDollar(3.5);
  const expected = 3.5 * 1.07;
  expect(dollars).toBe(expected);
});

test("One dollar should be 156.5 yen", function () {
  const yen = fromDollarToYen(1);
  const expected = (1 / oneEuroIs["USD"]) * oneEuroIs["JPY"];
  expect(yen).toBe(expected);
});

test("One Yen should be 0.00557 GDP", function () {
  const pound = fromYenToPound(1);
  const expected = (1 / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
  expect(pound).toBe(expected);
});
