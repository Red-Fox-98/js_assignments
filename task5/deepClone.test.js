const deepClone = require('./deepClone').deepClone;
const original = require('./deepClone').original;

test("deepClone", () => {
    const copy = deepClone(original);
    expect(original.address.city).toBe(copy.address.city);

    copy.address.city = 'Los Angeles';
    expect(original.address.city).not.toBe(copy.address.city);
})
