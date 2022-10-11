function angles(a, b, c) {
  if (a + b + c === 180) {
    return true;
  } else if (a > 0 || b > 0 || c > 0) {
    return 'Erro, número negativo inválido'
  } else if (a + b + c !== 180) {
    return false;
  }
}
console.log(angles(50, 60, -60));