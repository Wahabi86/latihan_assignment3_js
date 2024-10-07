// I Gusti Ngurah Abi Praja Andika
function threeStepsAB(text) {
  const charA = [];
  const charB = [];

  // untuk mencari karakter a dan b dalam string
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "a") {
      charA.push(i);
    }
    if (text[i] === "b") {
      charB.push(i);
    }
  }

  // untuk mengecek jarak antara a dan b
  for (const indexA of charA) {
    for (const indexB of charB) {
      if (text[indexA + 4] === "b") {
        return true;
      }
      if (text[indexB + 4] === "a") {
        return true;
      }
    }
  }
  return false;
}

console.log(threeStepsAB("lane borrowed"));
console.log(threeStepsAB("i am sick"));
console.log(threeStepsAB("you are boring"));
console.log(threeStepsAB("barbarian"));
console.log(threeStepsAB("bacon and meat"));
