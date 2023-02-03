function sum(number) {
  if (number > 0) {
    return number + sum(number - 1);
  }
  return number;


}


console.log(sum(4));
console.log(sum(10));



