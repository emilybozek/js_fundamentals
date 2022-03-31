const range = function createRange(start, stop, increment) {
  for (let i = start; i <= stop; i = i + increment) {
      range.push(i);
  }
}

console.log(createRange(0, 10, 2));
console.log(createRange(10, 30, 5));
console.log(createRange(-5, 2, 3));