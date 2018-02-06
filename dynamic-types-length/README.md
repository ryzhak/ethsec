# Dynamic types length

## Description

When you manually send transaction you can set length of the dynamic types(strings, bytes, arrays).

### What to do:

1. run `truffle compile`
2. open Ganache and run `truffle migrate`
3. set `contractAddress` in `run.js` file
4. run `truffle console`
5. all length variables are 0 now
`DynamicTypesLength.deployed().then(function(instance){return instance.strLength.call();}).then(function(value){return value.toNumber();});` => 0
`DynamicTypesLength.deployed().then(function(instance){return instance.bLength.call();}).then(function(value){return value.toNumber();});` => 0
`DynamicTypesLength.deployed().then(function(instance){return instance.arrayLength.call();}).then(function(value){return value.toNumber();});` => 0
6. run `truffle execute run.js`
7. we provided invalid length value which are not equal to real
`DynamicTypesLength.deployed().then(function(instance){return instance.strLength.call();}).then(function(value){return value.toNumber();});` => 21, the value was 'AAAA' which is 4 bytes
`DynamicTypesLength.deployed().then(function(instance){return instance.bLength.call();}).then(function(value){return value.toNumber();});` => 22, the value was 0x42 0x43 0x44 which is 3 bytes
`DynamicTypesLength.deployed().then(function(instance){return instance.arrayLength.call();}).then(function(value){return value.toNumber();});` => 23, the value was array with 2 elements

## Links
- You may check how ethereum contract abi is encoded from the [docs](https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI)
- A nearly real life [example](https://github.com/Arachnid/uscc/tree/master/submissions-2017/martinswende)