function highestIndex(index) {
  let biggie = 0;
  for (let number in index) {
    if (index[biggie] < index[number]) {
      biggie = number;
    }
  }
  return biggie;
}
console.log(highestIndex([8, 15, 30, 1, 5, 88, 1111, 90,]));