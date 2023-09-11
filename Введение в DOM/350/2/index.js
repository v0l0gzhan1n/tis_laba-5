let elem = document.querySelector('#elem');
elem.addEventListener('focus', function() {
    elem.value = Math.sqrt(elem.value)
});
elem.addEventListener('blur', function() {
    elem.value = elem.value**2
});