pragma solidity ^0.4.23;

contract Neo {
    function obtainDamage (uint256 value) public;
}

contract Smith {

    uint public health = 100;

    function doDamage(address who) public {
        Neo(who).obtainDamage(100); // calling Neo contract
    }

    function obtainDamage(uint256 value) public {
        health -= value;
    }

}