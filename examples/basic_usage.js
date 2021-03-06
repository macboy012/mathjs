// basic usage

// create an instance of math.js
var math = require('../index')();

/**
 * Helper function to output a value in the console. Value will be formatted.
 * @param {*} value
 */
function print (value) {
  var precision = 5;
  console.log(math.format(value, precision));
}

// functions and constants
console.log('functions and constants');
print(math.round(math.e, 3));           // 2.718
print(math.atan2(3, -3) / math.pi);     // 0.75
print(math.log(10000, 10));             // 4
print(math.sqrt(-4));                   // 2i
print(math.pow([[-1, 2], [3, 1]], 2));  // [[7, 0], [0, 7]]
console.log();

// expressions
console.log('expressions');
print(math.eval('1.2 * (2 + 4.5)'));    // 7.8
print(math.eval('5.08 cm in inch'));    // 2 inch
print(math.eval('sin(45 deg) ^ 2'));    // 0.5
print(math.eval('9 / 3 + 2i'));         // 3 + 2i
print(math.eval('det([-1, 2; 3, 1])')); // -7
console.log();

// chained operations
console.log('chained operations');
var a = math.select(3)
    .add(4)
    .multiply(2)
    .done();
print(a); // 14
console.log();

// mixed use of different data types in functions
console.log('mixed use of data types');
print(math.add(4, [5, 6]));                   // Number + array, [9, 10]
print(math.multiply(math.unit('5 mm'), 3));   // Unit * Number,  15 mm
print(math.subtract([2, 3, 4], 5));           // Array - Number, [-3, -2, -1]
print(math.add(math.matrix([2, 3]), [4, 5])); // Matrix + Array, [6, 8]
console.log();
