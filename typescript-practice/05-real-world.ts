/**
 * Exercise 5: Real-World Dashboard Examples
 *
 * Goal: Apply TypeScript to practical dashboard scenarios
 */

// ============================================================================
// Challenge 1: Dashboard Widget System
// ============================================================================
// TODO: Create a type-safe widget system for your dashboard
// Each widget has a common base but different data types

// Your code here:
// interface BaseWidget {
//   id: string;
//   title: string;
//   position: { x: number; y: number };
//   size: { width: number; height: number };
// }

// TODO: Create specific widget types:
// - ChartWidget: extends BaseWidget, has chartData: number[], chartType: "line" | "bar" | "pie"
// - TableWidget: extends BaseWidget, has rows: any[], columns: string[]
// - StatWidget: extends BaseWidget, has value: number, change: number, trend: "up" | "down"

// Your code here:
// interface ChartWidget extends BaseWidget { ... }
// interface TableWidget extends BaseWidget { ... }
// interface StatWidget extends BaseWidget { ... }

// TODO: Create a union type for all widgets
// type Widget = ChartWidget | TableWidget | StatWidget;

// TODO: Create a function that renders the appropriate widget
// function renderWidget(widget: Widget) {
//   switch (widget.???) { // How do you discriminate?
//     // Your code here
//   }
// }

// ============================================================================
// Challenge 2: API Response Handler
// ============================================================================
// TODO: Create a type-safe API response handler

// Your code here:
// type ApiSuccess<T> = {
//   success: true;
//   data: T;
//   timestamp: Date;
// }

// type ApiError = {
//   success: false;
//   error: string;
//   code: number;
//   timestamp: Date;
// }

// type ApiResponse<T> = ApiSuccess<T> | ApiError;

// TODO: Create a function that handles the response safely
// async function handleApiResponse<T>(
//   promise: Promise<ApiResponse<T>>
// ): Promise<T> {
//   const response = await promise;
//   // Your code here - extract data or throw error
// }

// ============================================================================
// Challenge 3: Form Validation
// ============================================================================
// TODO: Create a type-safe form validation system

// @ts-expect-error - Used in exercise below
interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

// TODO: Create a validation result type
// type ValidationResult<T> = {
//   [K in keyof T]?: string; // error message for each field
// }

// TODO: Create a validator function
// function validateLoginForm(form: LoginForm): ValidationResult<LoginForm> {
//   const errors: ValidationResult<LoginForm> = {};
//
//   // Your validation logic here
//   // if (!form.email.includes('@')) {
//   //   errors.email = "Invalid email";
//   // }
//
//   return errors;
// }

// ============================================================================
// Challenge 4: State Management
// ============================================================================
// TODO: Create a type-safe state management pattern

// Your code here:
// type DashboardState = {
//   user: { name: string; role: string } | null;
//   widgets: Widget[];
//   loading: boolean;
//   error: string | null;
// }

// TODO: Create action types
// type Action =
//   | { type: "SET_USER"; payload: { name: string; role: string } }
//   | { type: "SET_LOADING"; payload: boolean }
//   | { type: "SET_ERROR"; payload: string }
//   | { type: "ADD_WIDGET"; payload: Widget }
//   | { type: "REMOVE_WIDGET"; payload: string };

// TODO: Create a reducer function
// function dashboardReducer(state: DashboardState, action: Action): DashboardState {
//   switch (action.type) {
//     // Your code here
//     default:
//       return state;
//   }
// }

// ============================================================================
// Challenge 5: Data Fetching Hooks Type
// ============================================================================
// TODO: Create types for a custom data fetching hook

// Your code here:
// type UseDataResult<T> = {
//   data: T | null;
//   loading: boolean;
//   error: Error | null;
//   refetch: () => void;
// }

// TODO: Create the hook signature (just the type, not implementation)
// function useData<T>(url: string): UseDataResult<T> {
//   // Implementation would go here
//   return {} as UseDataResult<T>;
// }

// ============================================================================
// Challenge 6: Protected Routes
// ============================================================================
// TODO: Create a type-safe permission system

// Your code here:
// type Permission = "read" | "write" | "delete" | "admin";
// type Role = "user" | "moderator" | "admin";

// type RolePermissions = {
//   [K in Role]: Permission[];
// }

// const rolePermissions: RolePermissions = {
//   user: ["read"],
//   moderator: ["read", "write"],
//   admin: ["read", "write", "delete", "admin"]
// };

// TODO: Create a function that checks permissions
// function hasPermission(role: Role, permission: Permission): boolean {
//   return rolePermissions[role].includes(permission);
// }

// ============================================================================
// BONUS Challenge: Advanced Pattern - Builder Pattern
// ============================================================================
// TODO: Create a type-safe builder for creating dashboard configurations

// Your code here:
// class DashboardBuilder {
//   private config: Partial<{
//     title: string;
//     theme: "light" | "dark";
//     widgets: Widget[];
//     refreshInterval: number;
//   }> = {};

//   setTitle(title: string): this {
//     this.config.title = title;
//     return this;
//   }

//   // Add more builder methods

//   build(): Required<typeof this.config> {
//     // Validate all required fields are set
//     if (!this.config.title) throw new Error("Title is required");
//     // ...
//     return this.config as Required<typeof this.config>;
//   }
// }

// Usage:
// const dashboard = new DashboardBuilder()
//   .setTitle("My Dashboard")
//   .setTheme("dark")
//   .build();

export {};
