function handleFiles(files) {
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
        img.src = window.createBlobURL(files[i]);;
        img.height = 60;
        img.onload = function() {
          window.revokeBlobURL(this.src);
        }
        li.appendChild(img);
  
        var info = document.createElement("span");
        info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
        li.appendChild(info);
      }
    }
  }