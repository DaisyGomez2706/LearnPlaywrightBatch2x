let a=10;
let retrycount=0;
retrycount=retrycount+1;
retrycount=retrycount+1;
console.log("Retry_Count: " + retrycount); // Output: Retry_Count: 2
 

let retrycount=10;//SyntaxError: Identifier 'retrycount' has already been declared

let teststatus="Pending";

if(teststatus==="Pending")
{
    let executionTime = 120; // This variable is only accessible within this block
    console.log("Inside block: " + executionTime); // Output: Inside if block: 120
}
