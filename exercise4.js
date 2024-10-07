// I Gusti Ngurah Abi Praja Andika
function arrSum(arr) {
  let saveNums = []; //untuk menyimpan semua hasil penjumlahan
  let saveSum = 0; //untuk menempatkan hasil penjumlahan terbesar
  let results = []; // untuk menampilkan subarray

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      saveNums.push(sum);

      if (sum > saveSum) {
        saveSum = sum;
        results = arr.slice(i, j + 1);
      }
    }
  }
  return [results, saveSum];
}

console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3]));
