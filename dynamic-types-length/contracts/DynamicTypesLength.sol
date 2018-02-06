pragma solidity ^0.4.4;

contract DynamicTypesLength {

  uint public strLength;
  uint public bLength;
  uint public arrayLength;

  string public str;
  bytes public b;
  address[] public array;

  function run(string _str, bytes _b, address[] _array) {
    strLength = bytes(_str).length;
    str = _str;

    bLength = _b.length;
    b = _b;

    arrayLength = _array.length;
    array = _array;
  }
  
}
