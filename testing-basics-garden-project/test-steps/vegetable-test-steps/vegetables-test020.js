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
    });
});

/*
    We can check if vegetable has been added to `myVegetablePlant` by checking the `numVegetables` property.
    Write an `assert` statement checking if the `numVegetables` property of `myVegetablePlant` is equal to `1`.
*/