// strLength
DynamicTypesLength.deployed().then(function(instance){return instance.strLength.call();}).then(function(value){return value.toNumber();});
// bLength
DynamicTypesLength.deployed().then(function(instance){return instance.bLength.call();}).then(function(value){return value.toNumber();});
// arrayLength
DynamicTypesLength.deployed().then(function(instance){return instance.arrayLength.call();}).then(function(value){return value.toNumber();});

// str
DynamicTypesLength.deployed().then(function(instance){return instance.str.call();}).then(function(value){return value;});
// b
DynamicTypesLength.deployed().then(function(instance){return instance.b.call();}).then(function(value){return value;});