function TimerStarter() {
  let counter = document.getElementById("counter");
  let count = parseInt(counter.textContent);
  
  let timer = setInterval(function() {
    count++;
    counter.textContent = count;
  }, 1000);
}
