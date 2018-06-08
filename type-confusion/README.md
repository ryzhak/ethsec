# Type confusion

## Description

There is no type check during runtime. Functions are called by signature. If signature wasn't found then fallback function would be called.

### How it works

1. Smith contract calls `doDamage` with Neo address.
2. EVM looks for signature bytes4(sha3("obtainDamage(uint256)")) == 0x7366f929 and can not find it because Neo's contract obtainDamage has signature "obtainDamage(uint8)".
3. Smith then calls Neo's fallback function and does damage to himself.