var assert = require("assert");
var greet = require("../greet");

describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal('Hello, Andrew', greet('Andrew'));
    });
    it('should greet Karen correctly', function(){

        assert.equal('Hello, Karen', greet('Karen'));
    });
});
