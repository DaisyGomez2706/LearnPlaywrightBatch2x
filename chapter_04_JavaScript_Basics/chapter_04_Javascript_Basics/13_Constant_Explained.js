const URL="https://app.thetestingacademy.com/";

let name="Alice";
name="Bob"; // ✅ Allowed, 'name' can be reassigned
console.log(name);


{let name="Charlie"; // This 'name' is a different variable, scoped to this block
console.log("Inside block: " + name); // Output: Inside block: Charlie
}