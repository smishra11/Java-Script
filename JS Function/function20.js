//Write a function for searching JavaScript arrays with a binary search.

//user defined

let nums = [-1,0,3,5,9,12];
let target = 9;

var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while(left <= right) {
    const mid = left + Math.floor((right - left) /2);

    if(nums[mid] === target) {
      return mid;
    } else if(nums[mid] < target) {
      left = mid + 1;
    } else {
      left = mid - 1;
    }
  }
  //Did not found target value
  return -1; 
};
console.log(search(nums, target));