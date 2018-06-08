pragma solidity ^0.4.23;

contract Smith {
    function obtainDamage (uint256 value) public;
}

contract Neo {
    
    uint public health = 100;

    function() public {
        Smith(msg.sender).obtainDamage(100); // calling Smith contract
    }

    function obtainDamage(uint8 value) public {
        health -= value;
    }

}