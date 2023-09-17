let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
  let self = this;

  setInterval(function() {
    self.value = Number(self.value) + 1;
  }, 1000);
});