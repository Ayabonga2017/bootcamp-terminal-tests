
let assert = require("assert");
let countRegNumbers = require("../countRegNumbers");

describe('countRegNumbers function', function(){

    it('should return the number of registration numbers in the string', function(){
        assert.deepEqual(6, countRegNumbers("CL 876 895, CA 56397, CA 56397, CL 876 895, CA 56397, CA 56397"));
    });
    it('should return the number of registration numbers in the string', function(){
        assert.deepEqual(1, countRegNumbers("CA 345 673"));
    });
});
