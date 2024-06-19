document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Por favor, selecciona una imagen.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function() {
        const base64Image = reader.result.split(',')[1];

        const data = {
            message: "Subiendo una imagen desde una página web",
            content: base64Image
        };

        fetch('https://api.github.com/repos/ricardo-imbachi/Tour360.io/contents/ImageTest/' + file.name, {
            method: 'PUT',
            headers: {
               
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                alert('Imagen subida con éxito!');
            } else {
                alert('Error al subir la imagen: ' + response.statusText);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocurrió un error al subir la imagen.');
        });
    };
    reader.readAsDataURL(file);
});
