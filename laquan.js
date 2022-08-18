

(function () {
  let photoThumCount = document.querySelector("#photoThumList").childElementCount;
  // gets the number of images by counting the children inside <ul> tag
  let numbOfPic = prompt("Please Enter the Amount of Photo to download or press enter for All Photos", photoThumCount);
  // prompts the user to enter the amount of photos to download
  let photoDownloadForm = document.getElementById("photoDownloadForm");
  //gets the form that gets submit when a request is made
  let downloadPhotoId = document.getElementById("downloadPhotoId");
  // gets the image ID
  //creates the loop in order to interrate
  for (let index = 1; index <= numbOfPic; index++) {
    // a delay per request is required since `setTimeout` is none blocking`
    setTimeout(() => {
      console.log(index);
      downloadPhotoId.setAttribute(
        "value",
        photosetId.value + `_${index.toString().padStart(3, 0)}`
      );
      photoDownloadForm.submit();
    }, index * 3000);
  }
})();
