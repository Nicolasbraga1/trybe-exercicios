let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigWord = array[0];
let smallWord = array[0];
for (index = 0; index < array.length; index += 1) {
  if (array[index].length > bigWord.length) {
    bigWord = array[index]
  }
}
for (index = 0; index < array.length; index += 1) {
  if (array[index].length < smallWord.length) {
    smallWord = array[index]
  }
}
console.log(bigWord);
console.log(smallWord);