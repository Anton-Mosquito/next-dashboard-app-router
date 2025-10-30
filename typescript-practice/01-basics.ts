/**
 * Exercise 1: Basic Types and Interfaces
 *
 * Goal: Practice defining types, interfaces, and type annotations
 */

// ============================================================================
// Challenge 1: Define a User interface
// ============================================================================
// TODO: Create a User interface with:
// - id (number)
// - name (string)
// - email (string)
// - age (optional number)
// - isActive (boolean)

// Your code here:
// interface User { ... }

// ============================================================================
// Challenge 2: Type a function
// ============================================================================
// TODO: Add proper type annotations to this function
// It should accept a User and return a greeting string

// Your code here:
// function greetUser(user) {
//   return `Hello, ${user.name}!`;
// }

// ============================================================================
// Challenge 3: Array types
// ============================================================================
// TODO: Create a function that takes an array of numbers and returns the sum
// Use proper type annotations for parameters and return type

// Your code here:
// function sumNumbers(numbers) {
//   return numbers.reduce((acc, num) => acc + num, 0);
// }

// ============================================================================
// Challenge 4: Object types
// ============================================================================
// TODO: Define a Product type with:
// - id (number)
// - name (string)
// - price (number)
// - category (only "electronics" | "clothing" | "food")
// - inStock (boolean)

// Your code here:
// type Product = { ... }

// ============================================================================
// Challenge 5: Function types
// ============================================================================
// TODO: Define a type for a callback function that:
// - Takes two numbers as parameters
// - Returns a number

// Your code here:
// type MathOperation = ...

// TODO: Create a function that uses this callback type
// function calculate(a, b, operation) {
//   return operation(a, b);
// }

// ============================================================================
// BONUS Challenge: Readonly and optional properties
// ============================================================================
// TODO: Create a Config interface with:
// - apiUrl (readonly string)
// - timeout (optional number, default should be implied)
// - retries (readonly number)

// Your code here:
// interface Config { ... }

export {};
