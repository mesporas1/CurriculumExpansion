import { Garden } from "../src/Garden";
import { FruitTree } from "../src/FruitTree";
const chai = require("chai");
const assert = chai.assert;

describe("Garden tests", function () {
   let myGarden;

   beforeEach(() => {
      myGarden = new Garden();
   });

   it("should be able to create a Garden", function () {
      assert.instanceOf(myGarden, Garden);
   });
   
   describe("Garden with fruit trees", function(){
      let myFruitTree = new FruitTree("Strawberry");
   
      it("should be able to add fruit trees", function () {
         myGarden.addPlant(myFruitTree);
         assert.isAbove(myGarden.fruitTrees.length, 0);
      })

      it("should not allow more than 5 fruit trees", function () {
         for (let i = 0; i < 6; i++) {
            myGarden.addPlant(myFruitTree);
         }
         assert.isAtMost(myGarden.fruitTrees.length, 5);
      });
   }); 
});

/*
  Great! If you noticed, we can add a `beforeEach` hook for our `myFruitTree` variable.
  Let's add `beforeEach` to set up the `myFruitTree` variable for each test case in the `"Garden with fruit trees"` tests
*/ 
