function hideOrshow(id) {
  var element = document.getElementById(id);
  if (element.classList.contains("hidden")) {
    element.classList.replace("hidden", "block");
  } else {
    element.classList.replace("block", "hidden");
  }

}

function hideOrshow2() {
  var element = document.getElementById('dropdown_menu');
  if (element.classList.contains("hidden")) {
    element.classList.replace("hidden", "block");
  } else {
    element.classList.replace("block", "hidden");
  }

}

function toggleRadioList(id) {
  var element = document.getElementById(id);
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}