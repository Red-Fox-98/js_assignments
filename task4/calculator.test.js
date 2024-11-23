const calculator = require("./calculator");

test('add a = 5 b = 4 to equal 9', () => {
    expect(new calculator().add(5,4)).toBe(9);
});

test('add a = 5 b = 4 to equal 1', () => {
    expect(new calculator().subtract(5,4)).toBe(1);
});

test('add a = 5 b = 4 to equal 20', () => {
    expect(new calculator().multiply(5,4)).toBe(20);
});

test('add a = 20 b = 4 to equal 5', () => {
    expect(new calculator().divide(20,4)).toBe(5);
});

test('add a = 20 b = 0 to equal Error', () => {
    expect(new calculator().divide(20,0)).toBe('Error');
});
