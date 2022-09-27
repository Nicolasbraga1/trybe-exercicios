function maiorNum(primeiroNum, segundoNum, terceiroNum) {
  if (primeiroNum > segundoNum && primeiroNum > terceiroNum) {
    return primeiroNum;
  } else if (segundoNum > primeiroNum && segundoNum > terceiroNum) {
    return segundoNum;
  } else {
    return terceiroNum;
  }
}
console.log(maiorNum(2, 5 , 7));