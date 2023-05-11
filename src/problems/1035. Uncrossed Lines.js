/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
  let j = 0;
  let count = 0;
  for (var i = 0; i < nums1.length; i++) {
    while (j < nums2.length) {
      if (nums1[i] == nums2[j]) {
        count++;
        i++;
      }
      j++;
    }
  }
  // return count;
  console.log("countcount", count);
};

let nums1;
let nums2;
nums1 = [2, 5, 1, 2, 5];
nums2 = [10, 5, 2, 1, 5, 2];
maxUncrossedLines(nums1, nums2);
