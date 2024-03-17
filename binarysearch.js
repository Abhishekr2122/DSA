const arr1 = [4, 8, 9, 12, 14, 23];
const key = 12;

let start = 0;
let end = arr1.length - 1;
let mid = Math.trunc(start + (end - start) / 2);
let res = -1;

while (start <= end) {
  if (arr1[mid] === key) {
    res = mid;
    break;
  }

  if (key > arr1[mid]) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }

  mid = Math.trunc(start + (end - start) / 2);
}

console.log(res);
