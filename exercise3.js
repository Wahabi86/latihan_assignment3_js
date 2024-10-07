// I Gusti Ngurah Abi Praja Andika
function sumArray(arr, int) {
  const saveNums = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === int) {
        saveNums.push([arr[i], arr[j]]);
      }
    }
  }
  return saveNums;
}

console.log(sumArray([2, 1, 4, 3], 5));
console.log(sumArray([1, 8, 10, 3], 11));
