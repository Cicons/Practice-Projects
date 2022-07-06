let nums = [2, 5, 4];

let result = [];

// get the sum of these numbers

// let result = 0;

// // for(let i = 0; i < nums.length; i++) {
// //   result += nums[i];
// // }

// // nums.map((e) => {})
// // nums.filter((e) => {})
// // nums.forEach((e) => {})
// // nums.reduce((n, e) => {}, 0)

// nums.forEach((x) => { result += x });

/*
let result = nums.reduce((total, num) => {
  return total + num;
}, 0);
*/

// result = nums.reduce((TransformStreamDefaultController, num))

/*
return an array, where each element is equal to the product of all OTHER elements in the original array

let input =  [1, 2, 3]
let output = [6, 3, 2] // [2*3, 1*3, 1*2]

let input = [10, 5]
let output = [5, 10] // [5*, 10*]

let input = [2, 3, 4]
let output = [3*4, 2*4, 2*3] = [12, 8, 6]

let input = [5, 9, 1, 3, 6]
let output = [9*1*3*6, 5*1*3*6, ...]
*/

/*
for(let i = 0; i < nums.length; i++) {
  let temp = 1;
  for(let n = 0; n < nums.length; n++) {
    if(i != n) {
      temp *= nums[n];
    }
  }
  result.push(temp);
}
*/

result =  nums.map((x, i) => {
  return nums.reduce((temp, num, n) => {
    if(i != n) {
      return temp * nums[n];
    }
    else { return temp };
  }, 1)
});

console.log(result);
