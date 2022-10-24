const validator = (me, lottery) => me === lottery;
const result = (me, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return callback(me, number) ? 'Venha pegar seu prêmio' : 'Não foi dessa vez';
}
console.log(result(5,validator));