const submit = document.getElementById('submit');
submit.addEventListener('click', submitb);
function submitb(event){
  event.preventDefault()
}
function clearFields() {
  const input = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < input.length; index += 1) {
    const userInput = input[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
}
const picker = new Pikaday({
  field: document.getElementById('date'),
  format: 'D/M/YYYY',
  toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});
  window.onload = function () {
  const clear = document.querySelector('#reset');
  clear.addEventListener('click', clearFields);
  const submit = document.querySelector('#submit');
  submit.addEventListener('click', submitb);
};