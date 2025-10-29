/**
 * Exercise 3: Advanced Types
 *
 * Goal: Master union types, intersection types, type guards, and more
 */

// ============================================================================
// Challenge 1: Union types
// ============================================================================
// TODO: Create a type that can be either a string or number

// Your code here:
// type StringOrNumber = ...

// TODO: Create a function that formats this type appropriately
// If it's a number, add "$" prefix
// If it's a string, return as-is

// Your code here:
// function formatValue(value: StringOrNumber): string {
//   // Your code here
// }

// ============================================================================
// Challenge 2: Type guards
// ============================================================================
// TODO: Create two interfaces: Dog and Cat
// Dog has: name, breed, bark()
// Cat has: name, breed, meow()

// Your code here:
// interface Dog { ... }
// interface Cat { ... }

// TODO: Create a type guard function that checks if an animal is a Dog

// Your code here:
// function isDog(animal: Dog | Cat): animal is Dog {
//   // Your code here
// }

// TODO: Create a function that makes the animal make a sound
// function makeSound(animal: Dog | Cat) {
//   if (isDog(animal)) {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

// ============================================================================
// Challenge 3: Intersection types
// ============================================================================
// TODO: Create two types:
// - Timestamped: { createdAt: Date, updatedAt: Date }
// - Identifiable: { id: string }

// Your code here:
// type Timestamped = { ... }
// type Identifiable = { ... }

// TODO: Create a User type that combines both using intersection
// and adds: name, email

// Your code here:
// type User = ...

// ============================================================================
// Challenge 4: Discriminated unions
// ============================================================================
// TODO: Create a payment system with discriminated unions:
// - CreditCardPayment: { type: "credit", cardNumber: string, cvv: string }
// - PayPalPayment: { type: "paypal", email: string }
// - CashPayment: { type: "cash", amount: number }

// Your code here:
// type CreditCardPayment = { ... }
// type PayPalPayment = { ... }
// type CashPayment = { ... }
// type Payment = ...

// TODO: Create a function that processes the payment differently based on type
// function processPayment(payment: Payment): string {
//   switch (payment.type) {
//     // Your code here
//   }
// }

// ============================================================================
// Challenge 5: Literal types
// ============================================================================
// TODO: Create a type for HTTP methods that only allows:
// "GET" | "POST" | "PUT" | "DELETE" | "PATCH"

// Your code here:
// type HttpMethod = ...

// TODO: Create a type for status that only allows specific status codes:
// 200 | 201 | 400 | 401 | 403 | 404 | 500

// Your code here:
// type StatusCode = ...

// TODO: Create a Request type that uses these
// type Request = {
//   method: HttpMethod;
//   url: string;
//   status: StatusCode;
// }

// ============================================================================
// Challenge 6: typeof and keyof
// ============================================================================
// TODO: Given this object, create a type from it

// @ts-expect-error - This is used in the exercise
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
} as const;

// Your code here:
// type Config = typeof config;
// type ConfigKey = keyof typeof config;

// TODO: Create a function that gets a value from config using keyof
// function getConfigValue(key: ConfigKey) {
//   return config[key];
// }

// ============================================================================
// BONUS Challenge: Conditional types
// ============================================================================
// TODO: Create a conditional type that:
// - If T is a string, returns string[]
// - Otherwise returns T

// Your code here:
// type Arrayify<T> = T extends string ? string[] : T;

// Test:
// type Test1 = Arrayify<string>; // should be string[]
// type Test2 = Arrayify<number>; // should be number

export {};
