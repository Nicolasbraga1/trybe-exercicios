const maior = (frase) => {
  const array = frase.split(' ');
  let big = 0;
  let resultado = '';
  for (const palavra of array) {
    if (palavra.length > big) {
      big = palavra.length;
      resultado = palavra;
    }
  }
  return resultado;
}
console.log(maior('Vamos ver se funciona'));
