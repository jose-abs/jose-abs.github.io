// Get the modal
var form = document.getElementById("form");

// Get the button that opens the modal
var abrir = document.getElementById("btn-abrir");

// Get the <span> element that closes the modal
var cerrar = document.getElementsByClassName("btn-cerrar")[0];

// When the user clicks on the button, open the modal
abrir.onclick = function() {
  form.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
cerrar.onclick = function() {
  form.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == form) {
    form.style.display = "none";
  }
}