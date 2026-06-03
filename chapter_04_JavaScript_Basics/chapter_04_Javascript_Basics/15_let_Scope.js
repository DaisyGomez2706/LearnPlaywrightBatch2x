let a=10;
console.log(a); // Output: 10

function printHello() {
    console.log( "Hello, World!");
    let a= 20;      
    console.log(a); // Output: 20
    if (true) {
        let a= 30;
        console.log(a); // Output: 30
    }
     // Output: 20 (let is block-scoped, so this 'a' is the same as the one declared in the function)

}
console.log("printHello: " + a);
printHello(); 

console.log(a); // Output: 10 (global 'a' is unchanged) 