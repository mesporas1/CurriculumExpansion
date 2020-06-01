import { FruitTree } from "../src/FruitTree";
const chai = require("chai");
const assert = chai.assert;

describe("Fruit Tree Tests", function () {
    let myFruitTree;

    beforeEach(() => {
        myFruitTree = new FruitTree("Strawberry");
    });

    it("should be a fruit tree", function () {
        assert.instanceOf(myFruitTree, FruitTree);
    });

    it("should be given a name", function () {
        assert.equal(myFruitTree.name, "Strawberry");
    });

    it("should be watered", function () {
        myFruitTree.water();
        assert.strictEqual(myFruitTree.lastDayWatered, 0);
    });

    it("can be neglected", function () {
        myFruitTree.neglect();
        assert.isAbove(myFruitTree.lastDayWatered, 0);
    });

    it("should wither after 3 days of being neglected", function () {
        for (let i = 0; i < 3; i++) {
            myFruitTree.neglect();
        }
        assert.isTrue(myFruitTree.withered);
    });

    it("should bear fruit", function () {
        myFruitTree.addFruit();
    });
});

/*
    We can check if fruit has been added to `myFruitTree` by checking the `numFruits` property.
    Now, we can use chai's `equal` method to check if `numFruits` is `1` after adding a fruit for the first time.
    The `equal` method is like the `strictEqual` method except it does not check for strict equality.
    Write an `assert` statement checking if the `numFruits` property of `myFruitTree` is equal to `1`.
*/