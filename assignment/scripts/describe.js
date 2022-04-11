// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//----------------------
// COLIN'S DESCRIPTION:
//
//    REFERENCE LINE: `let number = 1;`
// We use the word `let` to signal to Javascript that the next word will be a variable and that
// the stored value should be allowed to be changed at any time moving forward.
//
// For concise understanding, we name the variable `number` as that best describes the type of
// information and/or usage of that variable in later coding.
//
// Finally, we set a value to the variable space `number`. In this instance, we are assigning
// an integer of 1 (one) to the variable `number`.
//
//
//    REFERENCE LINE: `number++;`
// By calling the variable `number` and following it with the built-in funciton `++`, we are signalling
// to Javascript that the number value should be auto-incremented by a value of one (1).
//
// This feature works for both integers and for floats. However, an error will raise if the variable
// was set to a string such as 'abc' as strings can not be subjected to addition.
//
//
//    REFERENCE LINES: `if (number >= 2) {
//                        console.log('yes');
//                      }`
// The `if` statement signals to Javascript that the it will need to examine the contents in the following
// parenthesis and the results of that examination should ONLY return either a value of `true` or `false`.
//
// Within the parenthesis in this code, the variable `number` which was assigned the integer of one (1)
// above will be checked against an integer value of 2 (two). The `>=` symbols in the middle are a
// mathematical expression to test the value on the left of it against the right of it.
//
// In this scenario the `>=` symbol means 'greater-than-or-equal-to', and it is checking if variable `number`
// which is 1 (one) is greater-than or equal-to the number 2, which it is not.
//
// The code within the brackets (the `{}` symbols) immediately following the parenthesis is ONLY ran if
// and only if the result within the parenthesis is `true`. As this code within the parenthesis gives a
// value of `faLse`, Javascript will proceed to any code following the adjacent closing bracket (the `}` bracket).
//----------------------

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// 
//----------------------
// COLIN'S DESCRIPTION:
//
//    REFERENCE LINE: `let name = 'Dane';`
// Similar to above, the `let name` text is signaling to Javascript to allocate memory space for a variable
// that will be referenced by the term `name`. Futhermore, by setting the variable `name` to the value
// 'Dane', Javascript will parse that input, automatically detect that the variable is a string (not a float
// int, bool, etc.).
//
//
//    REFERENCE LINES: `if (name === 'Mary') {
//                        console.log('Hi, Mary!');
//                      } else {
//                        console.log('How do you do?');
//                      }`
// An `if` statement is signaled meaning the following return value calculated in the subsequent parenthesis
// MUST be either `true` or `false`. Once a `true` value is found, the code within the following brackets is
// executed and then the if-else block is exited automatically. Therefore, no other code will run after
// the first instance of a `true` code-block segment.
//
// Within the parenthesis, we check the string we assigned to the `name` variable is the same as the string
// 'Mary'. This equality check uses a strict check (meaning we use === instead of ==). Strict equality means
// the values must match AND the type MUST be the same.
//
//    EXAMPLES:
//        123 == '123'  // returns `true` because '123' can safely be converted to an integer automatically
//        123 === '123' // returns 'false' because one is an integer and one is a string, no automatic conversation is allowed
//        1 === 1.0 // returns 'true' even though one is an integer and one is a float because the bit representations are the same
//
// Since the logic within the parethesis is `false`, Javascript will skip over ALL the code contained
// within the brackets `{}` immediately following the parenthesis. The code `Hi, Mary!` will NOT be
// logged to console.
//
// Instead, Javascript will continue with any code immediately following the closing bracket symbol, which
// is an `else` statement in this example. Because `else` is treated the similarily as a `true` logic statement
// within an if-else block, the code contained in the following brackets will be run.
//
// In this scenario, the console will log a message of `How do you do?`

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// 
//----------------------
// COLIN'S DESCRIPTION:
//
//    REFERENCE LINE: `let secret`
// Javascript registers a memory address for a variable referenced by the name `secret`; HOWEVER since no
// value was provided, the value automatically assigned to `secret` is `undefined`. Because it is assigned,
// the value can now freely be correctly changed as neccesary.
//
//
//    REFERENCE LINE: `let code = 123;`
// Javascript assigns an editable variable named `code` to an integer value of 123.
//
//
//    REFERENCE LINE: `if(code === 123) {
//                       secret = 'super';
//                       code = code * 2;
//                     }
// The `if` block tests the truthiness (meaning whether it is `true` or `false`) of the expression contained
// in the parenthesis. As `code` is a valid, defined variable with a value of `123` and we are strictly checking
// if that variable is equal to a statically-typed value of `123`, this will give a value of `true`.
// 
// Because this is `true`, the code within the following brackets will now execute.
//
// The variable `secret`, which was once set as `undefined`, is now changed to a string value of `super`.
//
// The variable `code` is also updated. In Javascript, the code to the RIGHT of an equal-sign (`=`) is always
// executed first BEFORE it is assigned to a variable. Therefore, the math equation to the right of the equal-sign
// will be conducted first, which means 123 multiplied by 2 equals 246. With that calculation fully completed,
// Javascript can now assign that value to the variable listed on the LEFT of the equal-sign.
//
// Because `code` is already set as a variable, Javascript simply over-writes any existing value for `code` with
// the value it calculated on the RIGHT of the equal-sign. Therefore `code` now has a value of 246.
//
//
//    REFERENCE LINE: `if (code > 250) {
//                       secret = 'duper'
//                     }`
// Because this code-block begins with the `if` keyword, this if-else block is treated independently of any
// other if-else block, whether they are siblings or nested within.
//
// Once again, we need to evalute the statement within the parenthesis; this time checking if `code` is
// greater-than the integer 250.
//
// From the existing code above, we know that `code` is currently equal to the value of '246', which is
// not greater-than 250; this will give a value of `false` and the following code within the brackets
// will NOT be executed. Javascript will now move to any code immediately following that bracket-pair.
//
//
//    REFERENCE LINE: `console.log(secret)`
//
// In this scenario, the conole will log a message of: `super`

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//
//----------------------
// COLIN'S DESCRIPTION:
// 
//    REFERENCE LINES: `let isStudent = true;
//                      let age = 34;
//                      let zip = 55407;`
// Javascript is setting all these values are variables, meaning they can be modified with later code.
//
// `isStudent` is a boolean
// `age` and `zip` are both integers
//
//
//    REFERENCE LINES: `if (isStudent === true && zip > 80000 ) {
//                        console.log(`You're a student on the West Coast!`);
//                      } else if (isStudent === false || age < 30) {
//                        console.log('What are your hobbies?');
//                      } else if (isStudent === true) {
//                        console.log('Welcome to Prime!');
//                      } else {
//                        console.log('How about the weather?')
//                      }`
// The `if` statement signals to Javascript that it will examine logical statements, if a `true` statement is
// found it will execute the code that immediately follows, and then exit the block without examining any
// of the other statements.
//
// This method is considered 'lazy' (which is a good thing here) as it only runs until it finds the
// first `true` statement and does not run any further. This saves on run-time and performance within the
// code, specifically if the code block is repeatedly called upon.
//
// The first line evaluates BOTH is `isStudent` is `true` (which this is true) AND if the `zip` is greater-than
// 80000 (which is false). Because we require BOTH of these statements to be `true` due to the usage of the `&&`
// sign, this check is false and the subsequent code is skipped.
//
// Javascript then moves to the next code after the brackets, which is an `else if` checking if `isStudent` is `false`
// (the `isStudent` variable was set to `true`, so this statement is `false`) OR if the `age` variable is
// less-than 30 (`age` was set to 34, so this statement is false). An `OR` statement (signalled by `||`) only
// need a single `true` statement for the whole statement to be true, but in this case none were found. Javascript
// skips any code in the brackets and moves on.
//
// Another `else if` statement is encountered where the line `isStudent === true`. Because `isStudent` is set
// to `true`, this statement becomes `true === true`, which simplifies to `true`.
//
// Because this `if` block found the first true logical statement, it will execute the following code contained
// in the brackets. In this case, it will produce the console statement of `Welcome to Prime!`
//
// Now that the first `true` statement has been achieved within this if-else block, no other `else if` or `else`
// statements will be executed within that block.


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne set to wrong value. Should be `colorOne = 'blue'
let colorOne = 'red';

// FIX - colorTwo set to wrong value. Should be `colorOne = 'red'
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  // FIX - colorTwo also needs to be set to purple. Should be `colorTwo = 'purple'
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// (optional) FIX - strictly set `time` constant does not allow for future-compliant code
// RECOMMENDATION - use `let time = 4`; allows for time to be variable
const time = 4;

// FIX - change `||` to `&&`
// request was for both variables to be met, not just a singular one
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - `if ( age <= minAge) {`
// The output messages are currently opposite, so this is the quickest fix
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

