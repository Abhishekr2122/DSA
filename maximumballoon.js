// Expected output :- 5

const price = 50;

const balloonPrices = [10, 50, 8, 7, 6, 11, 13];

const sortedArr = balloonPrices.sort(function (a, b) {
  return a - b;
});

let res = 0;
let sum = 0;

for (let i = 0; i < sortedArr.length; i++) {
  sum += sortedArr[i];
  if (sum > price) {
    break;
  }

  if (sum <= price) {
    res++;
  }
}

console.log(res);
// Final output :- 5
