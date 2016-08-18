describe("Play Game", function() {
  var number;

  beforeEach(function() {

    number = new Player();
  });

  it("should be divisible by 15", function() {
    number.fizzbuzz();
    expect(number.fizzbuzz).toEqual('FizzBuzz!');
  });

  it("should be divisible by 5", function() {
    number.buzz();
    expect(number.buzz).toEqual('Buzz!');
  });

  it("should be divisible by 3", function() {
    number.fizz();
    expect(number.fizz).toEqual('Fizz!');
  });

});
