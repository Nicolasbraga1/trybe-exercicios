const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  const first = names.find((names) => names.length === 5);
  return first;
};

console.log(findNameWithFiveLetters());