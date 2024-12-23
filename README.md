# Type Error in TypeScript Function

This example demonstrates a common type error in TypeScript: passing an incorrect parameter type to a function.

The `calculate` function is designed to take two numbers as input and return their sum. However, in the example usage, the second argument is a string ('10'), which causes a type error.

The solution involves ensuring that all function parameters are of the correct type.  This is achieved through type checking in TypeScript.

## How to reproduce
1. Save the code in a file named `bug.ts`.
2. Compile the code using the TypeScript compiler (tsc bug.ts).
3. Observe the type error in the compiler output.

## Solution
The solution is provided in the `bugSolution.ts` file.