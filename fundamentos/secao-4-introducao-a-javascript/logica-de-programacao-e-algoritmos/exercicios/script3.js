let primo = 0;
for (let index = 2; index <= 50; index += 1) {
  let primoVerdadeiro = true;
  if (index % 3 === 0) {
    primoVerdadeiro = false;
  }
  if (primoVerdadeiro) {
    primo = index;
  }
}
console.log(primo);