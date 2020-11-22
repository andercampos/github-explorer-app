function convertStringInArray(value, string) {
  const array = [];

  for (let i = 0; i < value; i++) {
    array.push(string);
  }

  return array;
}
console.log('1)', convertStringInArray(3, 'a'));

function reverseArray(array) {
  var reverseArray = [];

  for(let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }

  return reverseArray;
}
console.log('2)', reverseArray([1,2,3,4]));

function cleanupArray(array) {
  const cleanArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      cleanArray.push(array[i]);
    }
  }
  return cleanArray;
}
console.log('3)', cleanupArray([1,2,'', undefined]));

function convertArrayToObject(array) {
  return Object.fromEntries(array);
}
console.log('4)', convertArrayToObject([['c', 2], ['d', 4]]));

function removeFromArray(array, arg1, arg2) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== arg1 && array[i] !== arg2) {
      newArray.push(array[i]);
    }
  }  
  return newArray;
}
console.log('5)', removeFromArray([5,4,3,2,5], 5,3));

function removeDuplicates(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}
console.log('6)', removeDuplicates([1,2,3,3,2,4,5,4,7,3]));

function isEqual(array1, array2) {
  return array1.toString() === array2.toString();
}
console.log('7)', isEqual([1,2,3,4],[1,2,3,4]));

function concatenateArray(args) {
  const newArray = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i] instanceof Array) {
      for (let j = 0; j < args[i].length; j++) {
        newArray.push(args[i][j]);
      }
    } else {
      newArray.push(args[i]);
    }
  }
  return newArray;
}
console.log('8)', concatenateArray([1, 2, [3], [4, 5]]));

function divideArray(array, value) {
  const newArray = [];

  for (let i = 0; i < array.length; i += value) {
    newArray.push(array.slice(i, i + value));
  }
  return newArray;
}
console.log('9)', divideArray([1, 2, 3, 4, 5], 2));

function commonValues(array, array2) {
  const commons = [];

  for (let i = 0; i < array.length; i++) {
    if (array2.indexOf(array[i]) !== -1) {
      commons.push(array[i]);
    }
  }

  return commons;
}
console.log('10)', commonValues([6, 8], [8, 9]));