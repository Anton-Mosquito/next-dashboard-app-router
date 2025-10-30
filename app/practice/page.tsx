"use client";

import { useState } from "react";
import styles from "./practice.module.css";

/**
 * TypeScript Practice Page
 *
 * This page demonstrates the exercises from typescript-practice folder
 * You can import and test your solutions here!
 */

export default function PracticePage() {
  const [activeExercise, setActiveExercise] = useState<string>("basics");

  const exercises = [
    { id: "basics", name: "01. Basics", file: "01-basics.ts" },
    { id: "generics", name: "02. Generics", file: "02-generics.ts" },
    {
      id: "advanced",
      name: "03. Advanced Types",
      file: "03-advanced-types.ts",
    },
    { id: "utility", name: "04. Utility Types", file: "04-utility-types.ts" },
    { id: "realworld", name: "05. Real World", file: "05-real-world.ts" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>TypeScript Practice Exercises</h1>
        <p>Build your TypeScript skills with progressive challenges</p>
      </header>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <h2>Exercises</h2>
          <nav>
            {exercises.map((exercise) => (
              <button
                key={exercise.id}
                className={
                  activeExercise === exercise.id
                    ? styles.activeButton
                    : styles.exerciseButton
                }
                onClick={() => setActiveExercise(exercise.id)}
              >
                {exercise.name}
              </button>
            ))}
          </nav>
        </aside>

        <main className={styles.content}>
          <div className={styles.instructions}>
            <h2>How to Practice</h2>
            <ol>
              <li>
                Open the exercise file:{" "}
                <code>
                  typescript-practice/
                  {exercises.find((e) => e.id === activeExercise)?.file}
                </code>
              </li>
              <li>Read the TODO comments and implement the solutions</li>
              <li>
                Run <code>npm run lint</code> to check for TypeScript errors
              </li>
              <li>
                Fix any errors until TypeScript is happy (no red squiggles!)
              </li>
              <li>Try importing your solutions here to test them</li>
            </ol>
          </div>

          <div className={styles.tips}>
            <h3>💡 Tips</h3>
            <ul>
              <li>
                Hover over variables to see their inferred types in VS Code
              </li>
              <li>Use Ctrl+Space for autocomplete suggestions</li>
              <li>
                Read error messages carefully - they often tell you exactly what
                to fix
              </li>
              <li>
                Don&apos;t use <code>any</code> - that defeats the purpose!
              </li>
              <li>Check the official TypeScript handbook when stuck</li>
            </ul>
          </div>

          <div className={styles.playground}>
            <h3>🎮 Test Your Solutions Here</h3>
            <p>
              Import your completed exercises here and call the functions to
              test them!
            </p>
            <div className={styles.code}>
              <pre>
                <code>{`// Example:
// import { greetUser } from "@/typescript-practice/01-basics";
//
// const user = { id: 1, name: "John", email: "john@example.com", isActive: true };
// console.log(greetUser(user));`}</code>
              </pre>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
