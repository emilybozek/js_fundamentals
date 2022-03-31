
 
function finalPosition (moves) {
  for (const move of moves) {

    if (move === 'north') {
      position[1] += 1;
    } else if (move === 'south') {
      position[1] -= 1;
    } else if (move === 'west') {
      position[0] -= 1;
    } else if (move === 'east') {
      position[0] += 1;
    }
  }
  return position;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']; 
const position = [0,0];