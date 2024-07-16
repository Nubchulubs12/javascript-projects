// launchcode.test.js code:
// const { default: test } = require('node:test');
const {launchcode, launchOutput} = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("check that organization has a value.", function() {
    expect(launchcode.organization).toBe("nonprofit");
  });
  test("check that executiveDirector has a value", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  test("check that percentageCoolEmployees has a value", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  // test("check that programsOffered has a value", function() {
  //   expect(launchcode.programsOffered).toBe(["Web Development", "Data Analysis", "Liftoff"]);
  // });
  test("check that programsOffered has length of 3", function() {
    expect(launchcode.programsOffered).toHaveLength(3);
  });
  
});




describe("launchOutput", function() {
  function tests(number, expected) {
    test(`returns "${expected}" for number ${number}`, function() {
      expect(launchOutput(number)).toBe(expected);
    });
  }

  tests(4, 'Launch!');
  tests(9, 'Code!');
  tests(25, 'Rocks!');
  tests(6, 'LaunchCode!');
  tests(15, 'Code Rocks!');
  tests(10, 'Launch Rocks! (CRASH!!!!)');
  tests(30, 'LaunchCode Rocks!');
  tests(7, "Rutabagas! That doesn't work.");
});

