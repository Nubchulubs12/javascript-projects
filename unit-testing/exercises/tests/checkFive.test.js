const checkFive = require("../checkFive");

describe("checkFive", function() {

    test("descriptive feedback...", function() {
    let output = checkFive(2)
    expect(output).toEqual("2 is less than 5.")
});
test("descriptive feedback...", function() {
    let output = checkFive(6)
    expect(output).toEqual("6 is greater than 5.")
});
test("descriptive feedback...", function() {
    let output = checkFive(5)
    expect(output).toEqual("5 is equal to 5.")
});
});