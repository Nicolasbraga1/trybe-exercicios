function verifyalindromes(word) {
  const wordLength = word.split();
  const reverseWord = wordLength.reverse();
  const reverse = reverseWord.join('')
  if (word === reverse){
    console.log(true);
  } else{
    console.log(false);
  }
  return reverse
}
console.log(verifyalindromes('arara'));