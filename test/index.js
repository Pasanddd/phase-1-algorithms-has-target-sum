function hasTargetSum(arr, target) {
  const complementMap = {};

  for (let num of arr) {
      const complement = target - num;
      if (complementMap[complement]) return true;
      complementMap[num] = true;
  }

  return false;
}

// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true
console.log(hasTargetSum([1, 2, 5], 4)); // false
console.log(hasTargetSum([1, 2, 3, 4, 5], 10)); // true
console.log(hasTargetSum([], 5)); // false
console.log(hasTargetSum([1], 1)); // false
console.log(hasTargetSum([-1, 0, 1], 0)); // true

