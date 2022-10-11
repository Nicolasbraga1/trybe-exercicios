function lowestIndex(index) {
  let small = 0;
  for (let number in index) {
    if (index[small] > index[number]) {
      small = number;
    }
  }
  return small;
}
console.log(lowestIndex([8, 15, 30, 1, 5, 88, 1111, 90,]));