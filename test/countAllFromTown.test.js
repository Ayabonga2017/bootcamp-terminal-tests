var assert = require("assert");
var isFromCapeTown = require("../isFromCapeTown");

describe('isFromCapeTown function', function(){
  it('should return registration that isFromCapeTown', function(){
      assert.equal(isFromCapeTown('CA 123 908'),true);
    });

    it('should return registration that isFromCapeTown', function(){
        assert.equal(isFromCapeTown('CA 656 544'),true);
      });

});
