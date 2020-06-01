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

    });
});

/*
    Now, we can write an assert statement to verify the name of `myFruitTree` is equal to `"Strawberry"`.
    For example, if I create a `myPlane` variable and initialize the name of `myPlane` to `"B737"`,
    I can check if the name of`myPlane` is equal to `"B737"` with `assert.equal(myPlane.name, "B737")`
    Write an assert statement checking if the name of `myFruitTree` is equal to `"Strawberry"` in our new test case.
*/