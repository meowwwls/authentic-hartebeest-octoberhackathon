// this script is just to add the enhancement of the open item being closed if it is clicked while open
var list = document.getElementById('menu');
var lastClicked = '';

list.addEventListener('click', function(event) {
  var tClass = event.target.classList; // storing for easy access since it's referenced so much
  if (event.target.nodeName === 'INPUT') {
    // if we clicked on the same item twice in a row, it's open; uncheck it
    if (tClass.contains('open') && event.target === lastClicked) {
      event.target.checked = false;
      tClass.remove('open');
  } else if (!tClass.contains('open')) { // add class of open if it's not already there
    tClass.add('open');
  }
  // current element = lastClicked so we can check it against the next element clicked
  lastClicked = event.target;
  }
}, false);
