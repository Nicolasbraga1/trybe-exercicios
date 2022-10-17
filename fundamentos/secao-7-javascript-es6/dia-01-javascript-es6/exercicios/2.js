const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
  return array;
}
oddsAndEvens.sort(function (a, b) { return a - b });
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉