var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var c = "sup";

function addElementToBeginningOfArray (chocolateBars, c) {
  
  return [c, ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, c){
  chocolateBars.unshift(c);
  return chocolateBars;
}
