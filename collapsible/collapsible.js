 var list = document.getElementById('menu');
 
 // the open class is not used to add styles, just keep track of whether the item is open or closed
list.addEventListener('click', function(event) {
  if (event.target.nodeName === 'INPUT') {
    if (event.target.classList.contains('open')) {
      event.target.checked = false;
  }
    // if it was open when we clicked it, remove the open class; otherwise add the open class
    event.target.classList.toggle('open');
  }
}, false);
