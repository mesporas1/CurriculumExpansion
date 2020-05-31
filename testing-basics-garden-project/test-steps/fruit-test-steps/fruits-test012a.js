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
    You can check if a `Plant` is watered if `lastDayWatered` is strictly equal to 0.
    We want strict equality since `lastDayWatered` could be `null`.
    If we want to assert for strict equality, we can use the method `strictEqual`.
    For example, I can assert that the `numPassengers` of `myPlane` is strictly equal to zero with `assert.strictEqual(myPlane.numPassengers, 0)`.
    Write an `assert` statement checking if the `lastDayWatered` property of `myFruitTree` is strictly equal to `0`.
*/