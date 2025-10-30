/**
 * Exercise 2: Generics
 *
 * Goal: Master generic types and functions
 */

// ============================================================================
// Challenge 1: Generic function
// ============================================================================
// TODO: Create a generic function that returns the first element of an array
// It should work with any type of array

// Your code here:
// function getFirstElement(arr) {
//   return arr[0];
// }

// Test it with:
// const firstNumber = getFirstElement([1, 2, 3]); // should be number | undefined
// const firstName = getFirstElement(["a", "b", "c"]); // should be string | undefined

// ============================================================================
// Challenge 2: Generic interface
// ============================================================================
// TODO: Create a generic ApiResponse interface that:
// - Has a data property of generic type T
// - Has a status property (number)
// - Has a message property (string)

// Your code here:
// interface ApiResponse<T> { ... }

// TODO: Use it to type these responses:
// const userResponse: ApiResponse<???> = {
//   data: { id: 1, name: "John" },
//   status: 200,
//   message: "Success"
// };

// const productsResponse: ApiResponse<???> = {
//   data: [{ id: 1, name: "Laptop" }],
//   status: 200,
//   message: "Success"
// };

// ============================================================================
// Challenge 3: Generic constraints
// ============================================================================
// TODO: Create a generic function that:
// - Takes an object with an 'id' property
// - Returns the id
// - Use a generic constraint to ensure the object has an id

// Your code here:
// function getId<T>(obj) {
//   return obj.id;
// }

// ============================================================================
// Challenge 4: Multiple type parameters
// ============================================================================
// TODO: Create a generic function that:
// - Takes two parameters of potentially different types
// - Returns an object with both values

// Your code here:
// function pair(first, second) {
//   return { first, second };
// }

// Test it:
// const result = pair("hello", 42); // should be { first: string, second: number }

// ============================================================================
// Challenge 5: Generic class
// ============================================================================
// TODO: Create a generic Stack class that:
// - Can store items of any type
// - Has push(item: T): void method
// - Has pop(): T | undefined method
// - Has peek(): T | undefined method
// - Has isEmpty(): boolean method

// Your code here:
// class Stack<T> {
//   private items: T[] = [];
//
//   // Your methods here
// }

// ============================================================================
// BONUS Challenge: Generic with default type
// ============================================================================
// TODO: Create a generic Container interface with a default type parameter
// Default should be 'string'

// Your code here:
// interface Container<T = string> { ... }

export {};
