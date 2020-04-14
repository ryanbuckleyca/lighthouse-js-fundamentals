/*
As humanity gets closer to living on Mars, we must start sending supplies to the red planet now, to prepare for our arrival. So Canada is going to start to send containers of maple syrup. Each container on the space ship can hold exactly 100 bottles of maple syrup. A container will only be sent if it's full.

Given a certain number of bottles, we need to determine how many containers can be filled and sent. In this challenge, we will write a function that determines how many hundreds can be made from a number.
*/

// function howManyHundreds(num) {
//   //315 should be 3
//   let times = num / 100;
//   return(times.toFixed(0)); //times.toFixed(0) rounds both up AND down...
// }

function howManyHundreds(num) {
  let count = 0;
  while(num >= 100) {
    count++;
    num -= 100;
  }
  return (count);
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);