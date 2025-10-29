/**
 * SOLUTIONS for Exercise 2: Generics
 */

// ============================================================================
// Challenge 1: Generic function
// ============================================================================
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Usage:
const firstNumber = getFirstElement([1, 2, 3]); // number | undefined
const firstName = getFirstElement(["a", "b", "c"]); // string | undefined

// ============================================================================
// Challenge 2: Generic interface
// ============================================================================
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Usage examples:
interface UserData {
  id: number;
  name: string;
}

interface ProductData {
  id: number;
  name: string;
}

const userResponse: ApiResponse<UserData> = {
  data: { id: 1, name: "John" },
  status: 200,
  message: "Success",
};

const productsResponse: ApiResponse<ProductData[]> = {
  data: [{ id: 1, name: "Laptop" }],
  status: 200,
  message: "Success",
};

// ============================================================================
// Challenge 3: Generic constraints
// ============================================================================
interface HasId {
  id: number | string;
}

function getId<T extends HasId>(obj: T): T["id"] {
  return obj.id;
}

// Usage:
const userId = getId({ id: 1, name: "John" }); // number
const productId = getId({ id: "abc", name: "Product" }); // string

// ============================================================================
// Challenge 4: Multiple type parameters
// ============================================================================
function pair<T, U>(first: T, second: U): { first: T; second: U } {
  return { first, second };
}

// Usage:
const result = pair("hello", 42); // { first: string, second: number }
const result2 = pair(true, [1, 2, 3]); // { first: boolean, second: number[] }

// ============================================================================
// Challenge 5: Generic class
// ============================================================================
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

// Usage:
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); // 2

const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");

// ============================================================================
// BONUS Challenge: Generic with default type
// ============================================================================
interface Container<T = string> {
  value: T;
  label: string;
}

// Usage:
const stringContainer: Container = { value: "hello", label: "Greeting" }; // T defaults to string
const numberContainer: Container<number> = { value: 42, label: "Answer" };

export { getFirstElement, ApiResponse, getId, pair, Stack, Container };
