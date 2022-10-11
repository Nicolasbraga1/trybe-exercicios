window.onload = function () {
  const para = document.querySelector('p');
  const select = document.querySelector('select');
  select.addEventListener('change', function () {
    const selected = select.selectedOptions[0];
    document.body.style.backgroundColor = selected.value;


    localStorage.setItem('background', selected.value)
    // console.log(select.selectedOptions);
  })
  const text = document.getElementById('text');
  text.addEventListener('change', function () {
    const selecteded1 = text.selectedOptions[0];
    para.style.color = selecteded1.value;

    localStorage.setItem('text-colour', selecteded1.value);
    console.log(text.selectedOptions);
  })
  const fontTamanho = document.querySelector('input[name="font-size"]')
  fontTamanho.addEventListener('change', function () {
    const p = document.querySelector('p');
    p.style.fontSize = `${fontTamanho.value}px`;
    localStorage.setItem('size', `${fontTamanho.value}px`)
  })
  const savedBackground = localStorage.getItem('background');
  document.body.style.backgroundColor = savedBackground;
  const savedText = localStorage.getItem('text-colour');
  para.style.color = savedText;
  const size = localStorage.getItem('size');
  para.style.fontSize = size;
}