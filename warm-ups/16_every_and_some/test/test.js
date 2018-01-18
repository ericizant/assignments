const chai = require("chai");
const assert = chai.assert;

const { every, some } = require("../index.js");

tests = [
    {
        arr: [1, 2, 3],
        cb: (num) => typeof num === "number"
    },
    {
        arr: [1, 2, "3"],
        cb: (num) => typeof num === "number"
    },
    {
        arr: [1, "2", "3"],
        cb: (num) => typeof num === "number"
    },
    {
        arr: ["1", "2", "3"],
        cb: (num) => typeof num === "number"
    }
]

describe("every and some warm-up", () => {
    it("should return true if everything is a number", () => {
        assert.isTrue(event(tests[0].arr, tests[0].cb));
    });
    it("should return false if everything is a number", () => {
        assert.isFalse(event(tests[1].arr, tests[1].cb));
    });
    it("should return true if there is a number", () => {
        assert.isTrue(event(tests[2].arr, tests[2].cb));
    });
    it("should return false if nothing is a number", () => {
        assert.isFalse(event(tests[3].arr, tests[3].cb));
    });
});
