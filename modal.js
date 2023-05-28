// Obtener el modal
var modal = document.getElementById("myModal");

// Se obtiene todas las imágenes con la clase "zoomimg"
var images = document.getElementsByClassName("zoomimg");

// Obtener el elemento interno del modal
var modalImg = document.getElementById("modal-img");

// Obtener el elemento interno del subtitulo
var captionText = document.getElementById("caption");

// Para recorrer la imágenes y dar un click a la imagen para expandir
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}

// Obtener el elemento <span> para cerrar el modal
var span = document.getElementsByClassName("close")[0];

// cuando el usuario seleccione la X se cierra el modal
span.onclick = function() { 
  modal.style.display = "none";
}