function sum(a, b) {
  return a + b;
}

let oneEuroIs = {
  JPY: 156.5,
  USD: 1.07,
  GBP: 0.87,
};

function fromEuroToDollar(Euros) {
  let EuroToDollar = Euros * oneEuroIs["USD"];
  return EuroToDollar;
}

function fromDollarToYen(Dollar) {
  let DollarToYen = Dollar * oneEuroIs["JPY"];
  return DollarToYen;
}

function fromYenToPound(Yen) {
  let YenToPound = Yen / oneEuroIs["GBP"];
  return YenToPound;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, sum };
