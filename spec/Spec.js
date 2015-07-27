var code = require('../main.js');


describe("Hello World", function() {
  it("says 'hello, world!' when ran", function() {
    expect(code.outputHelloWorld()).toEqual("Hello, world!");
  });
});

describe('Tax Calculator', function(){

  it('should tax 10% on the first $10', function() {
    expect(code.calculate(1)).toEqual(0.1);
    expect(code.calculate(10)).toEqual(1);
  });

  it('should tax 7% on the second $10', function(){
    expect(code.calculate(15)).toEqual(1.35);
  });

    it('should tax 5% on the third $10', function(){
    expect(code.calculate(25)).toEqual(1.95);
  });

    it('should tax 3% on everything over $30', function(){
    expect(code.calculate(40)).toEqual(2.50);
  });

});

describe("Find Leap Year", function(){

  it ("returns true if given year is divisible by 4.", function (){
    expect(code.findLeap(2004)).toBe(true);
    expect(code.findLeap(1248)).toBe(true);
  });

  it ("returns false if given year divible by 100 and 4.", function (){
    expect(code.findLeap(2000)).toBe(false);
    expect(code.findLeap(1600)).toBe(false);
  });

});


describe ("Change to upper", function () {
  it ("returns strings in an array in all uppercase.", function() {
    expect(code.arrayToUpper(["bob", "joe", "jamal"])).toEqual(["BOB", "JOE", "JAMAL"]);
  });

});



