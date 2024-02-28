// let nums = [1, 2, 3, 4, 5, 6, 7];
// let k = 3;
// while (k > 0) {
//   let lastItem = nums[nums.length - 1];
//   nums.splice(0, 0, lastItem);
//   nums.splice(nums.length - 1, 1);
//   k--;
// }
// console.log(nums);
// --------------------------------------------------------
// function rotateArray(nums, k) {
//   const n = nums.length;
//   const rotated = new Array(n);
//   for (let i = 0; i < n; i++) {
//     console.log("dddddddddddddddd", i + k, (i + k) % n, n, nums[i]);
//     rotated[(i + k) % n] = nums[i];
//   }
//   return rotated;
// }

// const nums = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;
// console.log(rotateArray(nums, k));

// ---------------------------------------------------

function rotateArray(arr, k) {
  let temp = [...arr];
  for (let i = 0, n = arr.length; i < n; i++) {
    let index = (k + i) % n;
    temp[index] = arr[i];
  }
  for (let i = 0, n = arr.length; i < n; i++) {
    arr[i] = temp[i];
  }
  return arr;
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log(rotateArray(nums, k));
