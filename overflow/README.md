# Overflow and Underflow

## Description

Max => 0. Min => Max.

### What to do:

1. run `truffle compile`
2. open Ganache and run `truffle migrate`
3. run `truffle console`
4. run `Overflow.deployed().then(function(instance){return instance.umax.call();}).then(function(value){return value.toNumber();});`. The max value is `1.157920892373162e+77`
5. run `Overflow.deployed().then(function(instance){return instance.umin.call();}).then(function(value){return value.toNumber();});`. The min value is `0`
6. run `Overflow.deployed().then(function(instance){return instance.overflow();});`
7. run `Overflow.deployed().then(function(instance){return instance.underflow();});`
8. run `Overflow.deployed().then(function(instance){return instance.umax.call();}).then(function(value){return value.toNumber();});`. The max value is `0` now
9. run `Overflow.deployed().then(function(instance){return instance.umin.call();}).then(function(value){return value.toNumber();});`. The min value is `1.157920892373162e+77` now