// TODO-02: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = "42";
// Try changing to "hello", 10, null, NaN
//My solution
if (typeof userInput === "number"   ) {
    console.log("True: useInput type is",typeof userInput)
} else {
    console.log("False: userInput type is",typeof userInput)
}
// Solution
if (typeof userInput === 'number' && !isNaN(userInput)){
    console.log(`T :${userInput} <- This is Number`);
}else{
    console.log(`F :${userInput} <-This is not number /is NaN`);
}