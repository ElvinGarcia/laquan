



function letItRain(numbOfPic) {
  let photoDownloadForm = document.getElementById("photoDownloadForm");
  let downloadPhotoId = document.getElementById("downloadPhotoId");
  for (let index = 1; index <= numbOfPic; index++) {
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

/*
## What did I learn from the code above
* Call Stack
 * JS have a call stack that its like a queue that process code in order.
 * some calls gets send to a API stack.     
  * This is done inorder for Javascript to continue running and not wait for an API response.
   * These type of functions are refered as 'noneblocking'. eg. `setTimeout()`
 * once the call stack is empty the API stack is runned.
* `padStart` accepts 2 arguments. The length up to pad the string, what to pad it with.
 * It fields the string up to the amount specified with whats specied in the second argument.
*/