document.getElementById('GetFiles').addEventListener('click', Onclick);

function Onclick()
{
  console.log("Hola");
// Reemplaza con tus datos
const owner = 'ricardo-imbachi';
const repo = 'Tour360.io';
const path = 'ImageTest/'; // La carpeta específica dentro del repositorio


// URL de la API para listar el contenido de la carpeta
const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

fetch(url, {
  method: 'GET',
  headers: {
    'Accept': 'application/vnd.github.v3+json',
   
  }
})
.then(response => response.json())
.then(data => {
  if (Array.isArray(data)) {
    data.forEach(file => {
      console.log(`Nombre: ${file.name}, Tipo: ${file.type}, URL: ${file.html_url}`);
      let newDiv = document.createElement("div");
      let image = document.createElement("img");
      let url=file.download_url;
      image.setAttribute('src', url);
      image.setAttribute('width', 720);
      image.re
      newDiv.appendChild(image); //añade texto al div creado.

      // añade el elemento creado y su contenido al DOM
      var currentDiv = document.getElementById("div1");
      currentDiv.insertAdjacentElement("beforeend", newDiv);
    });
  } else {
    console.error('Error al obtener los datos:', data);
  }
})
.catch(error => console.error('Error:', error));
}
