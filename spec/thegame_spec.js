describe("Play Game", function() {
  var viktoria;

  beforeEach(function() {
    viktoria = new Player();
  });

  it("should be divisible by 15", function() {
    expect(viktoria.theRules(15)).toEqual("Fizz Buzz!");
  });

  it("should be divisible by 5", function() {
    expect(viktoria.theRules(5)).toEqual("Buzz!");
  });

  it("should be divisible by 3", function() {
    expect(viktoria.theRules(3)).toEqual("Fizz!");
  });

  it("should return only the number", function() {
    expect(viktoria.theRules(1)).toEqual(1);
  });

});
