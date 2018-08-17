var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,element) {
 var newArray = [element,...array]
 return newArray
 
 
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  var newArray = array.unshift(element)
  return array
}
