let elem1 = document.querySelector('#elem');
let elem2 = document.querySelector('#elem');
let elem3 = document.querySelector('#elem');

elem1.addEventListener('click', func1);
elem2.addEventListener('click', func2);
elem3.addEventListener('click', func3);

function func1() {
   alert('1');
}
function func2() {
   alert('2');
}
function func3() {
   alert('3');
}
