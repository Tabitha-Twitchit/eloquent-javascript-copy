////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
  return num1 > num2 ? num2 : num1;
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
// base
if(num === 0){
  return true;
} else if (num === 1){
  return false;
}

// recursion
if(num > 0){
  return isEven(num - 2);
} else if (num < 0){
  return isEven(num + 2);
}
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
  let charCount = 0;

  for (let i = 0; i <string.length; i++){
    if(string[i] === char){
      charCount++;
    }
  }
  return charCount;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  console.log(string);
  let bCount = 0;

  for (let i = 0; i < string.length; i++){
    if(string[i] === "B"){
      bCount++; 
    }
  }
  console.log(bCount);
  return bCount;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};