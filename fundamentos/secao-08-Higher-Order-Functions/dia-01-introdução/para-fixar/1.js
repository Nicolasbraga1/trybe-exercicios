const wakey = () => 'Acordando!!';
const coffee = () => 'Bora tomar café!!';
const sleepy = () => 'Partiu dormir!!';
const doingThings = (function1) => {
  const result = function1();
  console.log(result);
};
doingThings(wakey);