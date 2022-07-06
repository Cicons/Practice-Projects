/*
rotate an array n to the right

input = [1, 2, 3]
n = 1
output = [2, 3, 1]


input = [1, 2, 3]
n = 2
output = [3, 1, 2]


input = [1, 2, 3]
n = 3
output = [1, 2, 3]


input = [1, 2, 3]
n = 4
output = [2, 3, 1]
*/

let rotate = (array, n) => {
  const len = array.length;
  let result = Array(len).fill(0);

  for(let i = 0; i < len; i++) {
    result[(i+n) % len] = array[i];
  }

  return result;
}

let test = [1, 2, 3, 4, 5];
console.log(rotate(test, 1001));
