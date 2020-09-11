/*eslint-disable*/

// let prompt=require("prompt-sync")();
/**
 * check for emptyness of object 
 * 
 */

describe("isEmpty", function() {
    it("returns true for an empty object", function() {
      assert.isTrue(isEmpty({}));
    });
  
    it("returns false if a property exists", function() {
      assert.isFalse(isEmpty({
        anything: false
      }));
    });
  });


  ///////////////////

  describe("Accumulator", function() {

    beforeEach(function() {
      sinon.stub(window, "prompt")
    });
  
    afterEach(function() {
      prompt.restore();
    });
  
    it("initial value is the argument of the constructor", function() {
      let accumulator = new Accumulator(1);
  
      assert.equal(accumulator.value, 1);
    });
  
    it("after reading 0, the value is 1", function() {
      let accumulator = new Accumulator(1);
      prompt.returns("0");
      accumulator.read();
      assert.equal(accumulator.value, 1);
    });
  
    it("after reading 1, the value is 2", function() {
      let accumulator = new Accumulator(1);
      prompt.returns("1");
      accumulator.read();
      assert.equal(accumulator.value, 2);
    });
  });


  
  describe("the sum is?", function() {
    calculator.value1=2
    calculator.value1=3
    calculator.sum=5
    
      it("5", function() {
        assert.equal(5, calculator.sum);
        
      });
    
   
    });
   
    describe("the multiplication is?", function() {
      calculator.value1=2
      calculator.value1=3
      calculator.multiply=6
      
        it("6", function() {
          assert.equal(6, calculator.multiply);
          
        });
      
    
      });