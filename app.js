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
  let DollarToEuro = Dollar / oneEuroIs["USD"];
  let EuroToYen = DollarToEuro * oneEuroIs["JPY"];
  return EuroToYen;
}

function fromYenToPound(Yen) {
  let YenToEuro = Yen / oneEuroIs["JPY"];
  let EuroToPound = YenToEuro * oneEuroIs["GBP"];
  return EuroToPound;
}

module.exports = {
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound,
  sum,
  oneEuroIs,
};
