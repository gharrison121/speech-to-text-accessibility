function getOutput() {

  var xhr = new XMLHttpRequest(),
      method = "GET",
      url = "/getOutput";

  xhr.open(method, url, true);
  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log(xhr.responseText);
      document.getElementById("text").innerHTML = xhr.responseText
    }
  };
  xhr.send();
}


function download(filename) {
  var data = document.getElementById("outputtext").textContent
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURI(data)); 
  element.setAttribute('download', filename);
  
  document.body.appendChild(element);
  element.click();
  
  document.body.removeChild(element);
}


document.addEventListener("DOMContentLoaded", getOutput())
setInterval(getOutput, 6000)
