const cube = document.getElementById('cube')

function up () {
  var top = cube.style.top.replace('px', '')
  top = (+top - 20)
  cube.style.top = (top + 'px')
}
function down () {
  var top = cube.style.top.replace('px', '')
  top = (+top + 20)
  cube.style.top = (top + 'px')
}
function left () {
  var left = cube.style.left.replace('px', '')
  left = (+left - 20)
  cube.style.left = (left + 'px')
}
function right () {
  var left = cube.style.left.replace('px', '')
  left = (+left + 20)
  cube.style.left = (left + 'px')
}
