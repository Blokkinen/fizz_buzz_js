describe("Number", function() {
  var number;

  beforeEach(function() {
    number = new Input({number: 15});
  });

  it("returns '1' if the number = 1", function() {
    expect(fizzbuzz(1)).toEqual(1);
  });

  it("returns 'fizz' if the number is divisible by 3", function() {
    expect(fizz(3)).toEqual(3);
  });

  it("returns 'buzz' if the number is divisible by 5", function() {
    expect(buzz(5)).toEqual(5);
  });

});
