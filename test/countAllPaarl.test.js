
let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('countAllPaarl function', function(){

    it('should count All from Paarl', function(){
      assert.equal(countAllPaarl("CJ 123, CJ 6868, CJ 58954 , CJ 54758"),4);
    });
});
