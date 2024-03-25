function ObtainValue() {
  const verificar = document.getElementsByClassName('active');

  if (verificar.length > 0) {
    alert('Data já foi calculada!');
    return;
  }

  const date = document.getElementById('data').value;
  const transformDayjs = dayjs(date);
  const today = dayjs();

  // Ajustar o ano da data de namoro para o ano anterior ao atual
  const datingYears = today.diff(transformDayjs, 'years');
  const lastYearDate = transformDayjs.add(datingYears, 'year');

  const formatDate = transformDayjs.format('DD/MM/YYYY');

  const datingDays = today.diff(transformDayjs, 'days');

  // Calcular a diferença de meses
  const datingMonth = today.diff(lastYearDate, 'months');

  const list = document.createElement('ul');
  list.id = 'lista';

  const item1 = document.createElement('li');
  const item2 = document.createElement('li');
  const item3 = document.createElement('li');

  item1.textContent = `Que dia especial! Celebrando ${formatDate}, o início de uma jornada incrível juntos.`;
  item2.textContent = `Parabéns ao casal apaixonado! ${datingYears > 0 ? `Há ${datingYears} ano${datingYears > 1 ? 's' : ''}` : 'Desde'} que começaram esta aventura romântica, e há ${datingMonth} mês${datingMonth > 1 ? 'es' : ''} juntos. 💑❤️🌟`;
  item3.textContent = `Hoje marca ${datingDays} dia${datingDays > 1 ? 's' : ''} de amor e cumplicidade. Que esta união continue a florescer! 🌹❤️`;

  list.appendChild(item1);
  list.appendChild(item2);
  list.appendChild(item3);

  const containerDayjs = document.getElementById('dayjs');
  containerDayjs.appendChild(list);

  containerDayjs.classList.add('active');
}
