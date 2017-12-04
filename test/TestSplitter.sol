pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Splitter.sol";

contract TestSplitter {

  function testNothing() {
    Splitter(DeployedAddresses.Splitter());

    uint expected = 10000;

    Assert.equal(10000, expected, "test doesn't run");
  }

}
