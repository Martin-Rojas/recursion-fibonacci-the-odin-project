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

// console.log(fibsRec(8));

const mergeSort = (unSortArray) => {
  if (unSortArray.length <= 1) return unSortArray;

  /* Slipt array in 2 halves*/
  const middle = Math.floor(unSortArray.length / 2);
  const leftHalf = unSortArray.slice(0, middle);
  const rightHalf = unSortArray.slice(middle);

  /* Recursive call to sort the 2 halves*/
  const leftSorted = mergeSort(leftHalf);
  const rightSorted = mergeSort(rightHalf);

  /* Merge the 2 halves*/
  return merge(leftSorted, rightSorted);
};
const merge = (left, right) => {
  /* Base case*/
  if (left.length === 0) return right;
  if (right.length === 0) return left;

  if (left[0] < right[0]) {
    return [left[0]].concat(merge(left.slice(1), right));
  } else {
    return [right[0]].concat(merge(left, right.slice(1)));
  }
};

console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([]));
