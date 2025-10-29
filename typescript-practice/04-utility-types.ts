/**
 * Exercise 4: Utility Types
 *
 * Goal: Master TypeScript's built-in utility types
 */

// Base types for exercises
// @ts-expect-error - Used in exercises below
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user" | "guest";
  createdAt: Date;
  lastLogin?: Date;
}

// @ts-expect-error - Used in exercises below
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
  category: string;
}

// ============================================================================
// Challenge 1: Partial<T>
// ============================================================================
// TODO: Create a function that updates a user with partial data
// Use Partial<User> to allow updating any subset of properties

// Your code here:
// function updateUser(id: number, updates: ???): User {
//   // Imagine this fetches and updates the user
//   return {} as User;
// }

// Should work:
// updateUser(1, { name: "John" });
// updateUser(1, { email: "john@example.com", role: "admin" });

// ============================================================================
// Challenge 2: Required<T>
// ============================================================================
// TODO: Create a type where all User properties are required (including lastLogin)

// Your code here:
// type RequiredUser = ???

// ============================================================================
// Challenge 3: Readonly<T>
// ============================================================================
// TODO: Create a readonly version of Product that can't be modified after creation

// Your code here:
// type ReadonlyProduct = ???

// TODO: Create a function that returns a readonly product
// function createProduct(data: Product): ??? {
//   return data;
// }

// ============================================================================
// Challenge 4: Pick<T, K>
// ============================================================================
// TODO: Create a type that only has id and name from User

// Your code here:
// type UserPreview = ???

// TODO: Create a function that returns a user preview
// function getUserPreview(user: User): ??? {
//   return { id: user.id, name: user.name };
// }

// ============================================================================
// Challenge 5: Omit<T, K>
// ============================================================================
// TODO: Create a type for user registration (User without id and createdAt)

// Your code here:
// type UserRegistration = ???

// TODO: Create a register function
// function registerUser(data: ???): User {
//   return {
//     ...data,
//     id: Math.random(),
//     createdAt: new Date()
//   };
// }

// ============================================================================
// Challenge 6: Record<K, T>
// ============================================================================
// TODO: Create a type for a dictionary of products indexed by their ID

// Your code here:
// type ProductMap = ???

// TODO: Create a type for role permissions
// Keys: "admin" | "user" | "guest"
// Values: string[] (array of permission names)

// Your code here:
// type RolePermissions = ???

// ============================================================================
// Challenge 7: Exclude<T, U> and Extract<T, U>
// ============================================================================
// TODO: Create a type that excludes "guest" from user roles

// @ts-expect-error - Used in exercise below
type UserRole = "admin" | "user" | "guest" | "moderator";

// Your code here:
// type ActiveRole = ???

// TODO: Create a type that only includes "admin" and "moderator" from UserRole

// Your code here:
// type PrivilegedRole = ???

// ============================================================================
// Challenge 8: NonNullable<T>
// ============================================================================
// TODO: Create a function that returns a user or null
// Then create another function that guarantees a non-null user

// Your code here:
// function findUser(id: number): User | null | undefined {
//   return null;
// }

// function getUser(id: number): ??? {
//   const user = findUser(id);
//   if (!user) throw new Error("User not found");
//   return user;
// }

// ============================================================================
// Challenge 9: ReturnType<T>
// ============================================================================
// TODO: Extract the return type of this function

// @ts-expect-error - Used in exercise below
function fetchUserData() {
  return {
    user: { id: 1, name: "John" },
    token: "abc123",
    expiresIn: 3600,
  };
}

// Your code here:
// type FetchUserDataResult = ???

// ============================================================================
// Challenge 10: Parameters<T>
// ============================================================================
// TODO: Extract the parameters type of this function

// @ts-expect-error - Used in exercise below
function createUser(name: string, email: string, age?: number) {
  return { name, email, age };
}

// Your code here:
// type CreateUserParams = ???

// ============================================================================
// BONUS Challenge: Combining utility types
// ============================================================================
// TODO: Create a type for updating a product that:
// - Makes all fields optional (Partial)
// - Excludes the 'id' field (Omit)
// - Makes it readonly (Readonly)

// Your code here:
// type ProductUpdate = ???

// TODO: Create a type for a user DTO (Data Transfer Object) that:
// - Picks only public fields (id, name, email, role)
// - Makes them all readonly

// Your code here:
// type UserDTO = ???

export {};
