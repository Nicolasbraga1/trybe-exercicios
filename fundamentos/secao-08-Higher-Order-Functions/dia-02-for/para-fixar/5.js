const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((nam) => nam === name);
};

console.log(hasName(names, 'Ana'));