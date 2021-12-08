const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// While loop that prints out the contents of 'ingredients'//
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// For loop that prints out the contents of 'ingredients'//
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Any loop that prints out the contents of 'ingredients' backwards//
for (var i = 7; i >= 0; i--) {
  console.log(ingredients[i]);
}