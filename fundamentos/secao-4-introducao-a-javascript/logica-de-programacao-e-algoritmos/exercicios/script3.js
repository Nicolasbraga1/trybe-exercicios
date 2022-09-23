let primo = 0;
for (let index = 2; index <= 50; index += 1) {
  let primoVerdadeiro = true;
  for (let divisor = 2; divisor < index; divisor += 1) {
    if (index % divisor === 0) {
      primoVerdadeiro = false;
    }
  }
  if (primoVerdadeiro) {
    primo = index;
  }
}
console.log(primo);