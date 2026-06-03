function get_userstatus() {
    console.log("Getting user status...",get_userstatus);
    get_userstatus = "Active"; // This will create a global variable due to hoisting
    console.log(get_userstatus); // Output: Inside function: User is active   

}
get_userstatus(); // Output: Getting user status... [Function: get_userstatus]
console.log(get_userstatus); // Output: User is active (the function declaration has been overwritten by the assignment)