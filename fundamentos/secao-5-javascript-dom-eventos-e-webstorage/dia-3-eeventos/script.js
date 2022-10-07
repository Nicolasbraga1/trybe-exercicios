function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function month() {
  const daysMonth = document.querySelector('#days');
  for (let i = 0; i < decemberDaysList.length; i += 1) {
    const day = decemberDaysList[i];
    const dayDate = document.createElement('li');
    dayDate.innerHTML = day;
    if (day === 24 || day === 31) {
      dayDate.className = 'day holiday';
      daysMonth.appendChild(dayDate);
    } else if (day === 4 || day === 11 || day === 18) {
      dayDate.className = 'day friday';
      daysMonth.appendChild(dayDate);
    } else if (day === 25) {
      dayDate.className = 'day friday holiday';
      daysMonth.appendChild(dayDate);
    } else {
      dayDate.className = 'day';
      daysMonth.appendChild(dayDate);
    }

  }
}

function holiday(botao) {
  const button = document.querySelector('.buttons-container');
  const createButton = document.createElement('button');
  const buttonId = 'btn-holiday';
  createButton.innerHTML = botao;
  buttonId.id = buttonId;
  button.appendChild(createButton);
}

function holidayColors() {
  const holidayButton = document.querySelector('#btn-holiday');
  const holiday = document.querySelectorAll('.holiday');
  const background = 'rgb(238,238,238)';
  const setNew = 'white';

  holidayButton.addEventListener('click', function () {
    for (let i = 0; i < holiday.length; i += 1) {
      if (holiday[i].style.backgroundColor === setNew) {
        holiday[i].style.backgroundColor = background;
      } else {
        holiday[i].style.backgroundColor = setNew;
      }
    }
  });
}



//funções
month();
holiday('Feriados');
holidayColors();