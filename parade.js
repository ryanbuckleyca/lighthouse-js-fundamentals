const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']; 

function finalPosition(moves) {

  let position = [0, 0]; //x, y

  for(let move of moves) {
    if(move === "north") {
      position[1]++;
    } else if (move === "south") {
      position[1]--;
    } else if (move === "west") {
      position[0]--;
    } else if (move === "east") {
      position[0]++;
    } else {
      console.log("illegal move detected!");
    }
  }

  return(position);
}

console.log(finalPosition(moves));