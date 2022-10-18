const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
const turno = (objeto, chave, valor) => {
  objeto[chave] = valor;
}
turno(lesson2, 'turno', 'noite')
console.log(lesson2);

const chaves = (obj) => Object.keys(obj);
console.log(chaves(lesson1));

const size = obj => Object.keys(obj).length;
console.log(size(lesson1));

const value = (obj) => Object.values(obj);
console.log(value(lesson1));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons)

const studentsTotal = (obj) => {
  let total = 0;

  const array = Object.keys(obj);
    
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
}
console.log(studentsTotal(allLessons));

const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 2));

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));