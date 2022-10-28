
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const all = {
  ...user,
  ...jobInfos,
};

const {name, age, nationality, profession, squad, squadInitials} = all;

console.log(`Olá, meu nome é ${name}, tenho ${age} anos, sou ${nationality} e trabalho como ${profession} na ${squad} também conhecida como ${squadInitials}.`);