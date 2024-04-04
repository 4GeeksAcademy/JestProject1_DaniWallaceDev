test("1 euro debe ser 1.07 dollars", function () {
    const {fromEuroToDollar} = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expectedDollarsFromEuros = 3.5 * 1.07;
    expect(dollars).toBe(expectedDollarsFromEuros);
})

test ("1 dollar debe ser 146.26 yenes", function () {
    const {fromDollarToYen} = require('./app.js');
    const yens = fromDollarToYen(12);
    const expectedYensFromDollars = 12 * 146.2616822429907;
    expect(yens).toBeCloseTo(expectedYensFromDollars,2);
})
test ("1 yen debe ser 0.0056 pounds", function () {
    const {fromYenToPound} = require('./app.js');
    const pounds = fromYenToPound(1500);
    const expectedPoundsFromYens = 1500 * 0.0055591054313099;
    expect(pounds).toBeCloseTo(expectedPoundsFromYens,2);
})