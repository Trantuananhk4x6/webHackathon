function hideOrshow() {
  var element = document.getElementById("menu");
  if (element.classList.contains("hidden")) {
    element.classList.replace("hidden", "block");
  } else {
    element.classList.replace("block", "hidden");
  }

}