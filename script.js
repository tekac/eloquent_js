// Write a function min that returns 2 arguments that returns their minimum

const min = (a,b) => {
  let num = a < b ? a : b;
  return num
}

console.log(min(2,4));
console.log(min(4,2));
console.log(min(2,4) + 100);
