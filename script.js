const changeColor = document.querySelector('button');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

changeColor.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
})