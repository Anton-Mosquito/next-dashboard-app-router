/**
 * SOLUTIONS for Exercise 1: Basic Types and Interfaces
 *
 * Compare your solutions with these reference implementations
 */

// ============================================================================
// Challenge 1: Define a User interface
// ============================================================================
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
  isActive: boolean;
}

// ============================================================================
// Challenge 2: Type a function
// ============================================================================
function greetUser(user: User): string {
  return `Hello, ${user.name}!`;
}

// ============================================================================
// Challenge 3: Array types
// ============================================================================
function sumNumbers(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Alternative syntax:
function sumNumbersAlt(numbers: Array<number>): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// ============================================================================
// Challenge 4: Object types
// ============================================================================
type Product = {
  id: number;
  name: string;
  price: number;
  category: "electronics" | "clothing" | "food";
  inStock: boolean;
};

// ============================================================================
// Challenge 5: Function types
// ============================================================================
type MathOperation = (a: number, b: number) => number;

function calculate(a: number, b: number, operation: MathOperation): number {
  return operation(a, b);
}

// Example usage:
const add: MathOperation = (a, b) => a + b;
const result = calculate(5, 3, add); // 8

// ============================================================================
// BONUS Challenge: Readonly and optional properties
// ============================================================================
interface Config {
  readonly apiUrl: string;
  timeout?: number;
  readonly retries: number;
}

// Example usage:
const config: Config = {
  apiUrl: "https://api.example.com",
  retries: 3,
};

// config.apiUrl = "new url"; // Error: Cannot assign to 'apiUrl' because it is a read-only property

export {
  User,
  greetUser,
  sumNumbers,
  sumNumbersAlt,
  Product,
  MathOperation,
  calculate,
  add,
  Config,
  config,
};
