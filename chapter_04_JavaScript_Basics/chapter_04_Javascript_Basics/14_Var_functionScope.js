let a=10;
console.log(a); // Output: 10

function printHello() {
    console.log( "Hello, World!");
    var a= 20;      
    console.log(a); // Output: 20
    if (true) {
        var a= 30;
        console.log(a); // Output: 30
    }
    console.log(a); // Output: 30 (var is function-scoped, so this 'a' is the same as the one declared in the function)

}

printHello(); 

console.log(a); // Output: 10 (global 'a' is unchanged) 