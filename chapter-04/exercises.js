////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
//  check if equal off the bat and return empty array if so
  if (start === end || step < 0){
    return [];
  } 

  if(step === undefined){
    let output = [start];
    // console.log(output);
    for (let i = 1; i < end; i++ ){
      start +=1
      output[i] = start;
      // console.log(output);
    }
    return output;
  } else {
    let output = [start];
    // console.log(output);
    for (let i = 1; start < end; i++ ){
      start +=step
      output[i] = start;
      // console.log(output);
    }
    return output;
  }

}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array, total=0) {
  if(array.length === 0){
    return total;
  }

  total += array[0];

  return sum(array.slice(1), total);
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  outputArray = [];

  for (let i = 0; i < array.length; i++){
    outputArray.unshift(array[i]);
  }
  return outputArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {

  for(let i = 0; i < Math.floor(array.length /2); i++){
    let tempElem = array[i];
    array[i] = array[array.length -1 -i];
    array[array.length -1 -i] = tempElem;
  }
return array;

// TESTS DIDN"T LIKE THIS VIABLE SOLUTION
  //   tempArray = [];
//   for (let i = 0; i < array.length; i++){
//     tempArray.unshift(array[i]);
//   }
//   console.log("Newly loaded temArray: " + tempArray);
//   console.log("Post 1st loop array: "+ array);

//   array = [];
//   console.log("Post clear array: "+ array);
//   for (let i = 0; i < tempArray.length; i++){
//     array.push(tempArray[i]);
//   }
//   console.log("newly reloaded array: " + array);
//  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let rest = null;

  for (let i = array.length -1; i >= 0; i--){
    rest = {value: array[i], rest: rest}
  }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, array=[]) {
// base
if(list.rest === null) {
  array.push(list.value);
  return array;
}
// recursion
array.push(list.value);
return listToArray(list.rest, array);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*Add the helper functions prepend, which takes an element and a list 
and creates a new list that adds the element to the front of the input
list,
*/
function prepend(element, list) {
  // console.log(list);
  // console.log(element);

  // decompile the list into an array
let tempArray = listToArray(list);
// console.log(tempArray);

// insert the new element at the beginning of the array
tempArray.unshift(element);
// console.log(tempArray);

// recompile the list
list = arrayToList(tempArray);
return list;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*nth, which takes a list and a number and returns the element at the 
given position in the list (with zero referring to the first element) 
or undefined when there is no such element.
*/

function nth(list, outputInd) {
  console.log(outputInd);
  
  // decompile the list
  tempArray = listToArray(list);
  console.log(tempArray);
  
  // check if the array includes an element at the given index
  // If the index is less than the array, it's there (you don't)
  // need to see the exact one until you access it. 
  if(outputInd < tempArray.length){
    // console.log(tempArray[outputElem])
    return tempArray[outputInd];
    // else return undefined
  } else {
    return undefined;
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
//  check if they're BOTH not objs, use default comparison
  if(typeof x !== "object" && typeof y !== "object"){
  return x === y;
 }
// if one OR the other isn't an object reurn false
 if (typeof x !== "object" || typeof y !== "object"){
  return false;
 }

//  convert keys to array for easy comparison
 let xKeys = Object.keys(x);
 let yKeys = Object.keys(y);
//  quick check sees if they aren't same length, we know 
// they're notequal
 if(xKeys.length !== yKeys.length){
  return false;
 }
// we now know both have equal length, so we iterate thru either
// array...
 for (let i = 0; i < xKeys.length; i++){
  // if the iterated key is NOT in the other array ORRRR
  // we run deepEqual recursively checking...
  // the original x OBJECT using the iterated key from the xKeya
  // array to retrieve the value from the object. we compare this..
  // to the same iterated key on the Y OBJECT. If no match, it's false 
  if(!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
    return false;
  }
 }
// otherwise it's true.
 return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};