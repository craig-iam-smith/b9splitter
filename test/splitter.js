var Splitter = artifacts.require("./Splitter.sol");

contract('Splitter', function(accounts) {
  var owner = accounts[0];
  beforeEach(function() {
    return Splitter.new({from: owner})
    .then(function(instance) {
      contract = instance;
    });
  });
  it("should just say hello", function() {
    assert.strictEqual(true,true,"Something is wrong.");
  });

});
