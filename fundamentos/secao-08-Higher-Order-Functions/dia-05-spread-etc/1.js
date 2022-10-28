// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'manga', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'açúcar', 'suco de limão'];

const fruitSalad = (fruit, additional) => {
  const salad = [...fruit, ...additional];
  return salad;
};

console.log(fruitSalad(specialFruit, additionalItens));