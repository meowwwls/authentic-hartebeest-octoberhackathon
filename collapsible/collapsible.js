var list = document.getElementById('menu');

// the open class is not used to add styles, just keep track of whether the item is open or closed
list.addEventListener('click', function(event) {
  var input;
  if (event.target.nodeName === 'LABEL') {
    input = event.target;
    // if item is already open, close it
    if (input.classList.contains('open')) {
      input.classList.remove('open');
      input.checked = false;
    } else  {
      // otherwise this is the opening click, so add tracking 'open' class
      input.classList.add('open');
    }
  } 
}, false);
