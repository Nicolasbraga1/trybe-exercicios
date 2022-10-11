function statu(number) {
  if (number > 0) {
    return 'positivo';
  } else if (number < 0) {
    return 'negativo';
  } else {
    return 'zero';
  }
}
console.log(statu(-1));