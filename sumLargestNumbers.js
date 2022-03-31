const sumLargestNumbers = (arr) => {
  let a = -Infinity,
      b = -Infinity;
  
  for (let item of arr)
    if (item > a && b > -Infinity)
      a = item;
    else if (item > b)
      b = item;
      
  return a+b;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));