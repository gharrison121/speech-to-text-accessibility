var arrayOnLoad = [] //where the first loaded array will be, to check for duplicated responseText

function getOutput() {

  var xhr = new XMLHttpRequest(),
      method = "GET",
      url = "/getOutput";

  xhr.open(method, url, true);
  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      if(xhr.responseText != arrayOnLoad[arrayOnLoad.length -1]) {
        if (xhr.responseText != "undefined") {
          // document.getElementById("outputtext").innerHTML = xhr.responseText;
          var text = document.createTextNode(xhr.responseText);
          document.getElementById("outputtext").appendChild(text);
        }
      }
    }
  }
  xhr.send();
};

function getFullOutput() {

  var xhr = new XMLHttpRequest(),
      method = "GET",
      url = "/getFullOutput";

  xhr.open(method, url, true);
  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var responseArray = JSON.parse(xhr.response)
      var arrayOnLoad = responseArray
      for (var i = 0; i < responseArray.length; i++) {
        var text = document.createTextNode(responseArray[i] + " ");
        document.getElementById("outputtext").appendChild(text)
      }
      // if (xhr.responseText != "undefined") {
        // document.getElementById("outputtext").innerHTML = xhr.responseText;
        // var text = document.createTextNode(xhr.responseText);
        // document.getElementById("outputtext").appendChild(text);
      // }
    }
  }
  xhr.send();
};

function downloadText() {
  var text = document.getElementById("outputtext").textContent;
  var textAsBlob = new Blob([text], {type:"text/plain"});
  var textURL = window.URL.createObjectURL(textAsBlob);
  var fileName = document.getElementById("dlname").value;

  var downloadLink = document.createElement("a");
  downloadLink.download = fileName;
  downloadLink.href = textURL;
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);

  downloadLink.click();

  document.body.removeChild(downloadLink);
}

function dropdownClick() {
  document.getElementById("options").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", getFullOutput())

function changeFontSize(val) {
  document.getElementById("fontSize").textContent = "Font Size:" + val
  var text = document.getElementById("outputtext")
  text.style.fontSize = val + "pt";
}

/*
Run getOutput every 6 seconds
*/
setInterval(getOutput, 6000)
