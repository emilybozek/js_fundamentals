
const conditionalSum = function(array, condition) {
  var sum = 0
  for (let i = 0; i < array.length; i++) {
    if (condition === "even" && array[i] % 2 == 0) {
        sum += array[i];
      } else if (condition === "odd" && array[i] % 2 !== 0) {
        sum += array[i];
        }
      }
      return sum;
    }

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

