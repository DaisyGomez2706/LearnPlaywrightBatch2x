// ============================================================
// JAVASCRIPT KEYWORDS - RULES & EXAMPLES
// ============================================================

// -------------------------------------------------------
// RULE 1: Cannot use reserved keywords as identifiers
// -------------------------------------------------------
// var let = 5;      // ❌ SyntaxError
// var function = 10; // ❌ SyntaxError
// const return = 1;  // ❌ SyntaxError

// -------------------------------------------------------
// RULE 2: Case-sensitive
// -------------------------------------------------------
var For = 1;     // ✅ Works (different from 'for')
var If = 2;      // ✅ Works (different from 'if')
// for is the keyword, For is a valid identifier

for (var i = 0; i < 1; i++) { } // ✅ keyword
console.log(For);  // 1 - variable name, not keyword

// -------------------------------------------------------
// RULE 3: Cannot use escape sequences in keywords
// -------------------------------------------------------
// var \u0069f = 5;  // ❌ SyntaxError - \u0069f = "if"

// -------------------------------------------------------
// RULE 4: Contextually reserved keywords
// -------------------------------------------------------
// await - only a keyword inside async functions
var await = "hello"; // ✅ allowed outside async function
console.log(await);  // "hello"

async function testAwait() {
  // var await = 5;  // ❌ SyntaxError - await is keyword here
  // let result = await Promise.resolve(10); // ✅ valid usage
}

// yield - only a keyword inside generator functions
var yield = "world"; // ✅ allowed outside generator
console.log(yield);  // "world"

function* testYield() {
  // var yield = 5;  // ❌ SyntaxError - yield is keyword here
  yield 10;          // ✅ valid usage
}

// let - unrestricted outside strict mode
var let = "allowed"; // ✅ works outside strict mode
console.log(let);    // "allowed"

// -------------------------------------------------------
// RULE 5: Keywords that are NOT reserved
// -------------------------------------------------------
var async = "I am a variable";
console.log(async);  // ✅ "I am a variable"

async function fetchData() { } // ✅ 'async' used as keyword here

var from = "source";
console.log(from);   // ✅

var of = "belongs to";
console.log(of);     // ✅

var get = "retrieve";
console.log(get);    // ✅

var set = "assign";
console.log(set);    // ✅

import { PI } from "./math.js"; // ✅ 'import' is reserved
// but 'as' is not reserved:
// import { PI as piVal } from "./math.js";

// -------------------------------------------------------
// RULE 6: Literals (true, false, null) are reserved
// -------------------------------------------------------
// var true = 5;     // ❌ SyntaxError
// var false = 10;   // ❌ SyntaxError
// var null = "nope"; // ❌ SyntaxError

var truth = true;   // ✅ valid usage of literal
var lie = false;    // ✅ valid usage of literal
var empty = null;   // ✅ valid usage of literal

// -------------------------------------------------------
// RULE 7: Strict mode restrictions
// -------------------------------------------------------
function strictModeDemo() {
  "use strict";

  // var let = 5;      // ❌ SyntaxError in strict mode
  // var static = 10;  // ❌ SyntaxError in strict mode
  // var implements = 1;  // ❌ SyntaxError
  // var interface = 2;   // ❌ SyntaxError
  // var private = 3;     // ❌ SyntaxError
  // var protected = 4;   // ❌ SyntaxError
  // var public = 5;      // ❌ SyntaxError
  // var yield = 6;       // ❌ SyntaxError in strict mode

  var myLet = 7;    // ✅ valid identifier (not the keyword)
  console.log(myLet);
}
