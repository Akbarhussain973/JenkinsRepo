const { add, subtract, multiply, divide } = require('./calculator');

test('adds two numbers correctly', () => {
    expect(add(5, 3)).toBe(8);
});

test('subtracts two numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('multiplies two numbers correctly', () => {
    expect(multiply(5, 3)).toBe(15);
});

test('divides two numbers correctly', () => {
    expect(divide(6, 3)).toBe(2);
});

test('throws error when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
});
