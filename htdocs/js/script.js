// hide and show past devlogs in devlog.html
function toggleDiv() {
  var x = document.getElementById("previous");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//display current year at the bottom of the page
const p = new Date();
document.getElementById("getYear").innerHTML = p.getFullYear();
