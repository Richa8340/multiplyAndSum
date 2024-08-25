function multiplyAndSum(...args) {
    if (args.length < 2) {
        throw new Error('At least two arguments are required');
    }
    
    const [first, second, ...rest] = args;
    const product = first * second;
    const sumOfRest = rest.reduce((sum, num) => sum + num, 0);
    
    return product + sumOfRest;
}

// Usage example
console.log(multiplyAndSum(2, 3, 4, 5)); // Output: 6 + 9 = 15
console.log(multiplyAndSum(1, 2));       // Output: 2
