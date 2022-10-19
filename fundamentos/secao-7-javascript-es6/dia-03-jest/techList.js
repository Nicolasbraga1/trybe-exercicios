const techList = (array, names) => {
  if (array.length === 0) return 'Vazio!';

  const sortedArray = array.sort();
  const technologyList = [];

  for (let index = 0; index < sortedArray.length; index += 1) {
    technologyList.push({
      tech: sortedArray[index],
      names,
    });
  }

  return technologyList;
}
module.exports = techList;