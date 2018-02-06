module.exports = function(callback) {

    let contractAddress = '0x345ca3e014aaf5dca488057592ee47305d9b3e10';
    
    let data = [
    // the 1st 4 bytes of function signature - keccak256("run(string,bytes,address[])")
    '0x9514514b',
    // _str data var offset
    '0000000000000000000000000000000000000000000000000000000000000060',
    // _b data var offset,
    '00000000000000000000000000000000000000000000000000000000000000a0',
    // _array data var offset
    '00000000000000000000000000000000000000000000000000000000000000e0',
    // _str length is 21 which is more than real
    '0000000000000000000000000000000000000000000000000000000000000015',
    // data string "AAAA" is 4 bytes
    '4141414100000000000000000000000000000000000000000000000000000000',
    // _b length is 22 which is more than real
    '0000000000000000000000000000000000000000000000000000000000000016',
    // _b data is 3 bytes 0x42 0x43 0x44
    '4243440000000000000000000000000000000000000000000000000000000000',
    // _array length is 23 which is more than real
    '0000000000000000000000000000000000000000000000000000000000000017',
    // first _array element
    '0000000000000000000000000000000000000000000000000000000000000001',
    // second _array element
    '0000000000000000000000000000000000000000000000000000000000000002'
    ];

    // concatenate into a single byte sequence
    data = data.join("");

    web3.eth.defaultAccount = web3.eth.coinbase;

    // send transaction
    let tx = web3.eth.sendTransaction({
        "to": contractAddress,
        "data": data,
        "gas": 2000000
    });

    callback();
};