document.addEventListener('DOMContentLoaded', function() {
  const inputElement = document.getElementById('fileElem');
  inputElement.addEventListener('change', ChangeBG);
});
function ChangeBG(files)
{
  const imagen = document.getElementById('BG');
  const archivo = files.target.files[0];
  if (archivo) {
  const urlImagen = URL.createObjectURL(archivo);
  imagen.src = urlImagen;
  }
}
   