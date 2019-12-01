



function letItRain(numbOfPic) {
  let photoDownloadForm = document.getElementById("photoDownloadForm"); //gets the form that gets submit when a request is made
  let downloadPhotoId = document.getElementById("downloadPhotoId"); // gets the image ID
  //creates the loop inorder to interrate
  for (let index = 1; index <= numbOfPic; index++) {
  // a delay per request is required since `setTimeout` is none blocking`
    setTimeout(() => {
      console.log(index);
      downloadPhotoId.setAttribute(
        "value",
        `C19-10-1905_${index.toString().padStart(3, 0)}`
      );
      photoDownloadForm.submit();
    }, index * 3000);
  }
}

