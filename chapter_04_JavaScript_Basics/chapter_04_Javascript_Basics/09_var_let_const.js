var a= 10;
let b= 20;
const c= 30;
// a = 15; // ✅ Allowed, 'a' can be reassigned
// b = 25; // ✅ Allowed, 'b' can be reassigned
// c = 35; // ❌ Error, 'c' cannot be reassigned    


var browser= "Chrome";
var browser= "Firefox"; // ✅ Allowed, 'browser' can be redeclared with var
browser= "Edge"; // ✅ Allowed, 'browser' can be reassigned
let language= "JavaScript"; 
// let language= "Python"; // ❌ Error, 'language' cannot be redeclared with let
language= "TypeScript"; // ✅ Allowed, 'language' can be reassigned
const framework= "React"; 
// const framework= "Vue"; // ❌ Error, 'framework' cannot be redeclared with const
// framework= "Angular"; // ❌ Error, 'framework' cannot be reassigned
    
var testcase= ["LoginTest", "SignupTest", "CheckoutTest"]; 
for(i=0; i<testcase.length; i++){
    console.log("Running Test: " + testcase[i]);
}
console.log("Loopcounter leaked outside loop", i );
// ✅ Allowed, 'i' is function-scoped and accessible here   


function greeting()
{
    console.log("Hello, World!");
}
greeting(); // Output: Hello, World!
greeting(); // Output: Hello, World!

