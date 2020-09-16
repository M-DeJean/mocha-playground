function divide(a, b) {
    if (b === 0) {
    throw new Error("Can't divide by zero!");
    }
    return a / b;
}

module.exports = divide;