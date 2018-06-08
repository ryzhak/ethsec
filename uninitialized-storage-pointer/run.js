module.exports = function(callback) {

    let contractAddress = "0xbc65a4a7a23c06ed40a750c0a099f1b51414ccff"; // SET
    let abi = [ { "constant": false, "inputs": [ { "name": "_where", "type": "address" } ], "name": "rewriteOwner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "balance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "s", "type": "bytes" } ], "name": "rewriteBoth", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" } ];

    let Unitialized = web3.eth.contract(abi);
    let contract = Unitialized.at(contractAddress);

    let owner = contract.owner.call();
    console.log("Old owner: " + owner);

    contract.rewriteOwner(web3.eth.accounts[0], {from: web3.eth.accounts[0]}, function(err, result){
        let owner = contract.owner.call();
        console.log("New owner: " + owner);
    });

    callback();
};