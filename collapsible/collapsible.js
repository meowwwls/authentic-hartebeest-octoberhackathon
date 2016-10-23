// this script is just to add the enhancement of the open item being closed if it is clicked while open
var list = document.getElementById('menu');
var lastClicked = '';

list.addEventListener('click', function(event) {
  if (event.target.nodeName === 'INPUT') {
    // if we clicked on the same item twice in a row, it's open; uncheck it
    if (event.target.classList.contains('open') && event.target === lastClicked) {
      event.target.checked = false;
      event.target.classList.remove('open');
  } else {
    event.target.classList.add('open');
  }
  // current element = lastClicked so we can check it against the next element clicked
  lastClicked = event.target;
  }
}, false);
