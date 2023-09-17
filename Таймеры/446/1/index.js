let start = document.querySelector('#start');
let timerRunning = false;

start.addEventListener('click', function() {
  if (!timerRunning) {
    let i = 0;
  
    setInterval(function() {
      console.log(++i);
    }, 1000);
  
    timerRunning = true;
  }
});