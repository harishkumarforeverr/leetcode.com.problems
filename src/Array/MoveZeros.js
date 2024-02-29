const arr = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];
// expected output L [4,2,4,3,5,1,0,0,0,0]
let leftArr = [];
let rightArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    rightArr.push(arr[i]);
  } else {
    leftArr.push(arr[i]);
  }
}
let j = 0;
for (let i = 0; i < leftArr.length; i++, j++) {
  arr[j] = leftArr[i];
}
for (let i = 0; i < rightArr.length; i++, j++) {
  arr[j] = rightArr[i];
}
