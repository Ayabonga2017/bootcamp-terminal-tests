let assert = require("assert");
let isFromBellvile = require("../isFromBellvile");

describe('isFromBellvile function', function(){

    it('should return CY as registration for Bellvile', function(){
        assert.equal(true, isFromBellvile('CY 5746897546'));
    });
    // it('should fail because Bellvile startsWith CY', function(){
    //     assert.equal(false, isFromBellvile('CJ 5746897546'));
    // });
});
