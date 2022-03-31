
const numberOfVowels = function(string) {
  let count = 0;
  const vowels = ['a','e','i','o','u']
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
