// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// const { characterScript } = require("./helpers");
// const SCRIPTS = require("./scripts");

function flatten(array) {
// console.log(array);
  return array.reduce(function(acc, current){
    acc = acc.concat(current);
    return acc;
  }, []);
}
// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(val, testFunc, updateFunc, bodyFunc) {
  // console.log(val);
    
  // //   // console.log(testFunc); // n => n > 0 || n > - 3
  //   // console.log(testFunc(i));
    if (testFunc(val) === false){
      return;
    };
    // bodyFunc(val);
    // console.log(bodyFunc); // => (){return u.invoke(l, this, b.call(arguments))}
    // 
    // console.log(updateFunc); // => n -1 || n - 2
    val = (updateFunc(val));
    
    return loop(val, testFunc, updateFunc, bodyFunc);
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  // console.log(array);
  // console.log(test);

  if(array.length === 0){
    return true;
  }


  if(test(array[0])){
    return every(array.slice(1), test);
  } else {
    return false};
  ;

  
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  // so, seeing here that both inputs begin with english, ugh
  // this is where Alex's mention of regex O believe comes in...
  // we need to get all the codes and either...
  // A) Loop all codes thru all language arrays and then track the dominant ones...BARF!!!
  // B) Loop arg string, create an average value and check that...which seems also wrong
  //    Because averaging An extremely high and low number would create a middle and be wildly wrong.
  
// so it now seems like there is an intended chaining of helper tasks:
// countBy: wants an array of nums, and a function that gives a "groupName" per array element?
      // The groupname probably iterates over the array and tells the script lang--my guess is that's our charScript function?

  // have counts for ltr, rtl, and increment them, then check values against each other
  // console.log(text);
  // console.log(SCRIPTS);

  // let textVal = text.charCodeAt(0);
  // console.log(textVal);

  // what is returned here is the entire script value for the language
  // console.log(characterScript(textVal));

  // function textScripts(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? { name: script.name, direction: script.direction} : {name: "none", direction: "placeholder"};
      
      // filter is where we are creating our array..
    }).filter(({name}) => name != "none");
    console.log(scripts);
    // console.log(script);
    

    // determines a count for instances of the name found per char
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";
  
    // reconciles name and count into a string expressing % composition
    // this needs to be interfered with to generate a name alone...
    // to then use to find the largest count's name's direction
    // let valCheck = scripts.map(({name, count}) => {
    //   return `${Math.round(count * 100 / total)}% ${name}`;
    // }).join(", ");

    // declare a temp val to assign the highest val to check against
    // let tempCountVal = 0;
    // so scripts is an array, I now want to loop the array and check 
    // each object's count value
    // ...hrrrrm but we may actually want to push the direct onto this object
    // while we are already in it... so where to do that? It will make 
    // accessign it here easier. 

    let highestCountDir = 0;
    let finalDirection = "";

    for (let script of scripts){
      if (script.count > highestCountDir){
        highestCountDir = script.count;
        finalDirection = script.direction;
      }
    }

   console.log(highestCountDir);
   console.log(finalDirection);
   return finalDirection;
    // console.log(typeof valCheck);//-> string
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};