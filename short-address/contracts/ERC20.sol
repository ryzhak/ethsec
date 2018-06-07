pragma solidity ^0.4.23;

contract ERC20 {

    address public who;
    uint public value;

    function transfer(address _who, uint _value) public {
        who = _who;
        value = _value;
    }

}