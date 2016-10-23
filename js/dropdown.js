// this script just gives the enhancement of dropdown dismissal when anything outside of the dropdown is clicked
var trigger = document.getElementById('dropdown-trigger');
var dropdown = document.getElementById('dropdown');

document.body.addEventListener('click', function(event) {
  // anything other than the trigger or dropdown is clicked 
  if (event.target !== trigger && event.target !== dropdown) {
    // target dummy link to remove target from the list
    window.location = "#";
  }
}, false);
