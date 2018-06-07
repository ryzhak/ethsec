# Short address attack

## Description

Attacker generates a special address with zero bytes on the end and asks victim to send tokens there. If transaction is sent "as is" then address takes bytes from value and value shifts left adding zeros to the right. So instead of 1 token victim transfers 100 tokens.

### What to do:

1. run `truffle compile`
2. open Ganache and run `truffle migrate`
3. set attacker address(ending with "00") and contract addresses in `run.js`
4. run `truffle exec run.js`. Check that 100 tokens were sent instead of 1.