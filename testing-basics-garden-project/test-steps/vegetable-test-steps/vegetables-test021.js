import { VegetablePlant } from "../src/FruitTree";
const chai = require("chai");
const assert = chai.assert;

describe("Vegetable Plant Tests", function () {
    let myVegetablePlant;

    beforeEach(() => {
        myVegetablePlant = new VegetablePlant("Cabbage");
    });

    it("should be a vegetable plant", function () {
        assert.instanceOf(myVegetablePlant, VegetablePlant);
    });

    it("should be given a name", function () {
        assert.equal(myVegetablePlant.name, "Cabbage");
    });

    it("should be watered", function () {
        myVegetablePlant.water();
        assert.strictEqual(myVegetablePlant.lastDayWatered, 0);
    });

    it("can be neglected", function () {
        myVegetablePlant.neglect();
        assert.isAbove(myVegetablePlant.lastDayWatered, 0);
    });

    it("should wither after 3 days of being neglected", function () {
        for (let i = 0; i < 3; i++) {
            myVegetablePlant.neglect();
        }
        assert.isTrue(myVegetablePlant.withered);
    });

    it("should produce vegetables", function () {
        myVegetablePlant.addVegetable();
        assert.equal(myVegetablePlant.numVegetables, 1);
    });
});

/*
    Good! We tested if our `VegetablePlant` can produce vegetables.
    Let's test for the last requirement!
    Create a test case with the string `"should return the number of vegetables harvested"` and pass in an empty function.
*/