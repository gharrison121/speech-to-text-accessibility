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

document.addEventListener("DOMContentLoaded", getOutput())
setInterval(getOutput, 6000)
