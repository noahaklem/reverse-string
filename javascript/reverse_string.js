function reverseString(str) {
  let newString = "";
  for(let i = str.length -1; i >= 0; i--){
    newString += str[i];
  };
  return newString
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
  // 1. write a function nameed reverseString
  //   function should take in an string argument
  //   function should loop through the string
  // 2. function should return a reversed string
// And a written explanation of your solution

// set a new string equal to an empty string
// build the loop
  // set i equal to the string length
  // str[0] is the first char, so i needs to be greater than or equal to 0
  // then decrement the i counter to count down to 0
    // enter the loop where str[i] should be str[5] then str[4], etc
    // all I need to do now is concat to the newString var
// after the loop is done return the string