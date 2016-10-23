document.body.addEventListener('click', function(e) {
  if (e.target.classList.contains('ripple')) {
    makeWaves(e);
  }
}, false);

function makeWaves(e) {
  var el = e.target;
  var first = el.firstElementChild;
  var oldWave;
  var wave;
  var waveColor = el.getAttribute('data-wave-color');
  // gives us our element's position on the page
  var elPos = el.getBoundingClientRect();
  // finds the largest size (height or width) of the clicked element
  var maxSize = Math.max(elPos.height, elPos.width);
  var x;
  var y;

  // if there is already a wave element within our clicked element
  if (first && first.classList.contains('wave')) {
    oldWave = first;
    wave = oldWave.cloneNode(true);
    el.replaceChild(wave, oldWave);
    // // remove animation class so we can reset it
    // wave.classList.remove('waving');
  } else {
    wave = document.createElement('span');
    el.appendChild(wave);
    wave.classList.add('wave');
    // make wave circular if noted with a data attribute
    if (el.hasAttribute('data-circle-wave')) {
      wave.classList.add('circle-wave');
    }
    // if a wave color is specified
    if (waveColor) {
      waveColor = waveColor + '-wave';
      wave.classList.add(waveColor);
    }
  }

  // make wave el h + w the largest side of the clicked el to make sure it covers the entire el
  wave.style.width = maxSize + 'px';
  wave.style.height = maxSize + 'px';

  // find position of click, subtract from it the pos of the element + subtract half the wave el size
  x = e.pageX - elPos.left - (maxSize / 2);
  y = e.pageY - elPos.top - (maxSize / 2);

  // position wave layer where el was clicked, as the source of the ripple
  wave.style.top = y + 'px';
  wave.style.left = x + 'px';

  // animate
  wave.classList.add('waving');
}
