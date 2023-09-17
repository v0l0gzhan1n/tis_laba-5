let startButton = document.querySelector('#start');

startButton.addEventListener('click', function() {
  let number = 100;

  function countdown() {
    console.log(number);
    number--;

    if (number === 0) {
      clearInterval(timerId);
    }
  }

  let timerId = setInterval(countdown, 1000);
});
