//JS Engine; Line By Line Execution; Hoisting;JIT Compilation;Execution Context;Call Stack;Memory Heap;Garbage Collection

// -------------------------------------------------------  
// 1. Hoisting - variable and function declarations are moved to the top of their scope
// -------------------------------------------------------
console.log(x); // Output: undefined (due to hoisting, 'x' is declared but not initialized)
var x = 10;
console.log(x); // Output: 10
