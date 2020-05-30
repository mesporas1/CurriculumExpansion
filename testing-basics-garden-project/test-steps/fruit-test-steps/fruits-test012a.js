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
    });
});

/*
    You can check if a `Plant` is watered if `lastDayWatered` is equal to 0.
    We could use the method `equal` in this case, but we want strict equality since `lastDayWatered` could be `null`.
    If we want to assert for strict equality, we can use the method `strictEqual`.
    Write an assert statement checking if `lastDayWatered` property of `myFruitTree` is strictly equal to `0`.
*/