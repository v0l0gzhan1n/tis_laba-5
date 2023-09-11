let elem = document.querySelector('#elem');
let button = document.querySelector('#button')

button.addEventListener('click', function() {
  elem.classList.add('some-class');
  alert('Установлен класс ' + elem.classList)
});
