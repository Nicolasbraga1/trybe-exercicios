const factorial = (N) => {
  let resultado = 1;
  for (let index = 2; index < N; index += 1) {
    resultado *= index;

  }
  return resultado
}
const resu = factorial(8);
console.log(`Esse é o fatorial ${resu}`);