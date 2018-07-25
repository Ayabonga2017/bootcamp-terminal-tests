var assert = require("assert");
var regCheck = require("../regCheck");

describe('regCheck function', function(){

    it('should return registration Code', function(){
        assert.equal(false, regCheck("'DV 23 LP GP"));
    });
    it('should return ', function(){
        assert.deepEqual(false, regCheck("5567"));
    });
});
