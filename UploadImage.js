document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileUrl = './key.txt'; // Cambia esta URL por la URL real de tu archivo

    let key="";
    fetch(fileUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        // .then(keyvalue => {
        //     key = keyvalue.replace(/(\r\n|\n|\r)/gm, "");
        // })
        .then(keyvalue => {
            key = keyvalue.replace(/(\r\n|\n|\r)/gm, "");
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
                console.log(key);
        
                fetch('https://api.github.com/repos/ricardo-imbachi/Tour360.io/contents/ImageTest/' + file.name, {
                    method: 'PUT',
                    headers: {
                        Authorization: "Bearer "+key,
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
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud fetch:', error);
        });

});
