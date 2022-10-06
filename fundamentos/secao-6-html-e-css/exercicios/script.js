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
window.onload = function () {
  const clear = document.querySelector('#reset');
  clear.addEventListener('click', clearFields);
  const submit = document.querySelector('#submit');
  submit.addEventListener('click', submitb);
};