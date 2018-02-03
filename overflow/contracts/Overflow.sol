pragma solidity ^0.4.4;

contract Overflow {

  uint public umax = 2 ** 256 - 1;
  uint public umin = 0;

  function overflow() {
    umax++;
  }

  function underflow() {
    umin--;
  }

}
