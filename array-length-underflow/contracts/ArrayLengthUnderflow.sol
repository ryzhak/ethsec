pragma solidity ^0.4.4;

contract ArrayLengthUnderflow {

  uint[] public array;
  address public owner;

  function ArrayLengthUnderflow() {
    owner = msg.sender;
    array.push(0xaa);
  }

  function underflow() {
    array.length--;
  }

  function modify(uint index, uint value) {
    array[index] = value;
  }

  function getLength() returns (uint) {
    return array.length;
  }

  function getHash(uint index) returns (bytes32) {
    return keccak256(index);
  }

}
