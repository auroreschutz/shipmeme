function validateFileType(){
    var upFile = document.getElementById("upFile").value;
    var fileName = document.getElementById("fileName");
    fileName.innerHTML="Uploaded";
  
    prev_img.src = URL.createObjectURL(event.target.files[0]);
  
  }
  