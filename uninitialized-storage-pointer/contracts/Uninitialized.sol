pragma solidity ^0.4.23;

contract Uninitialized {

    address public owner; // stored in Storage(cell 0), init with 0x00
    uint public balance; // stored in Storage(cell 1), init with 0

    struct Billy {
        address where;
    }

    function rewriteOwner(address _where) public {
        Billy tmp; // points to Storage(cell 0)
        tmp.where = _where;
    }

    function rewriteBoth(bytes s) public {
        uint[64] copy; // points to Storage(cell 0)
        for(uint8 i = 0; i < 64; i++) {
            copy[i] = uint8(s[i]);
        }
    }

}