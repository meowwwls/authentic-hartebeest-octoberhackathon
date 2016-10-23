/****
  This script is just to add the enhancement of an open item being closed when
  it is clicked a second time. It is only needed if RADIO inputs are used, as checkboxes
  do this by default.
  
  The menu works perfectly fine without this addition just using HTML and CSS.
****/

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
