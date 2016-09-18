  function handleFileSelect(evt) {
    var files = evt.target.files;
    for (var i = 0, f; f = files[i]; i++) {
      if (!f.type.match('image.*')) {
        continue;
      }
      var reader = new FileReader();
      reader.onload = (function(theFile) {
        return function(e) {
             document.getElementById('Edit').innerHTML += ['<image id="Pic" xlink:href="' +  e.target.result + '" title="' + escape(theFile.name) + '" height="106" width="106" y="17.7" x="17.7" preserveAspectRatio="none"/>'].join();
        };
      })(f);
      reader.readAsDataURL(f);
    }
  }
document.getElementById('files').addEventListener('change', handleFileSelect, false);


//<image id="Pic" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA DElEQVQI12NgYGAAAAAEAAEnNCcKAAAAAElFTkSuQmCC " height="106" width="106" y="17.7" x="17.7" preserveAspectRatio="none"/>
