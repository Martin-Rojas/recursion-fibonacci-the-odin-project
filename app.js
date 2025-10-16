const fibs = (arrLenght) => {
  let fibsArr = [0, 1];
  let fibsNum = 0;
  let num1 = 0;
  let num2 = 1;

  if (arrLenght === 0) return [];
  if (arrLenght === 1) return [0];

  for (let index = 2; index < arrLenght; index++) {
    fibsNum = num1 + num2;
    fibsArr.push(fibsNum);
    num1 = num2;
    num2 = fibsNum;
  }
  return fibsArr;
};

// console.log(fibs(8) + " =====8");
// console.log(fibs(4) + " ===4");
// console.log(fibs(1) + " ===1");
// console.log(fibs(2) + " ===2");

const fibsRec = (n) => {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const seq = fibsRec(n - 1);

  seq.push(seq[seq.length - 1] + seq[seq.length - 2]);

  return seq;
};

console.log(fibsRec(8));
