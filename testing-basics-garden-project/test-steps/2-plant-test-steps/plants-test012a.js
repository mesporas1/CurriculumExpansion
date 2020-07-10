import { Plant } from "../src/Plant";
const chai = require("chai");
const assert = chai.assert;

describe("Plant Tests", function () {
    let myPlant;

    beforeEach(() => {
        myPlant = new Plant("Sunflower");
    });

    it("should be a plant", function () {
        assert.instanceOf(myPlant, Plant);
    });

    it("should be given a name", function () {
        assert.equal(myPlant.name, "Sunflower");
    });

    it("should be watered", function () {
        myPlant.water();
    });
});

/*
    You can check if a `Plant` is watered if `lastDayWatered` is strictly equal to 0.
    We want strict equality since `lastDayWatered` could be `null`.
    Write an `assert` statement checking if the `lastDayWatered` property of `myPlant` is strictly equal to `0`.
*/