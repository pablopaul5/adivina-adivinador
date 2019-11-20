function checkAnswer(e) {
  if (e.value == 'true') {
    console.log('bien');
    let li = document.getElementById(e.id);
    li.style.backgroundColor = 'paleGreen';
  } else {
    console.log('mal');
    let li = document.getElementById(e.id);
    li.style.backgroundColor = 'fireBrick';
  }
}
