# Uninitialized storage pointer

## Description

All variables are stored in Storage or Memory. On contract deploy state variables are initialized with "zero" values. Memory is allocated in Storage for such variables. Complex types(arrays and structs) are only point to memory addresses. Sometimes setting such complex type variable can rewrite one of the state variables.

### What to do:

1. run `truffle compile`
2. open Ganache and run `truffle migrate`
3. set deployed contract address in `run.js`
4. run `truffle exec run.js`. You should see:

```
Old owner: 0x0000000000000000000000000000000000000000
New owner: 0x28179d1bc64ca20d08a6e8dac445943e34d44451
```

By setting struct property we also rewrite contract owner.