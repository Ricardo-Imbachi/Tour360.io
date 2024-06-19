document.addEventListener('DOMContentLoaded', function() {
  const inputElement = document.getElementById('fileElem');
  inputElement.addEventListener('change', ChangeBG);
});

function handleFiles(files) {
  console.log("yesss");
  var d = document.getElementById("fileList");
  if (!files.length) {
    d.innerHTML = "<p>¡No se han seleccionado archivos!</p>";
  } else {
    var list = document.createElement("ul");
    d.appendChild(list);
    for (var i=0; i < files.length; i++) {
      var li = document.createElement("li");
      list.appendChild(li);

      var img = document.createElement("img");
  img.classList.add("obj");
  img.file = file;
  preview.appendChild(img);

  var reader = new FileReader();
  reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
  reader.readAsDataURL(file);
    }
  }
} 
function ChangeBG(files)
{
  // var d = document.getElementById("BG");
  // d.src="BG_02.jpg";
  const imagen = document.getElementById('BG');
  const archivo = files.target.files[0];
            if (archivo) {
                // Crear un objeto URL para el archivo seleccionado
                const urlImagen = URL.createObjectURL(archivo);
                // Cambiar el src de la imagen
                imagen.src = urlImagen;
            }
}
   