/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {};
    for (let ele of nums) {
      if (obj[ele]) {
        return true; 
      }
      obj[ele] = true; 
    }
    return false; 
  };
  
  console.log(containsDuplicate([1, 2, 3])); // Should output false
  console.log(containsDuplicate([1, 2, 2])); // Should output true
  