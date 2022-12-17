module.exports = function sqrt(number) {
  return sqrt_recursive(number, 0, number)
}

function sqrt_recursive(number, min_interval, max_interval) {
  // write your code here
  let mid_number = Math.floor((min_interval + max_interval) / 2);
  if ((mid_number * mid_number) === number) {
    return mid_number
  }
  if ((mid_number * mid_number) > number) {
    return sqrt_recursive(number, min_interval, mid_number - 1)
  }

  if ((mid_number * mid_number) < number) {
    return sqrt_recursive(number, mid_number + 1, max_interval)
  }
}


//console.log(sqrt(25))
//console.log(sqrt(7056))
