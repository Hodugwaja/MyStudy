function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


/* Set the width of the side navigation to 250px */
function openNav1() {
  document.getElementById("mySidenav1").style.width = "500px";
}

/* Set the width of the side navigation to 0 */
function closeNav1() {
  document.getElementById("mySidenav1").style.width = "0";
}

function openNav2() {
  document.getElementById("mySidenav2").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
}
/* Set the width of the side navigation to 250px */
function openNav3() {
  document.getElementById("mySidenav3").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav3() {
  document.getElementById("mySidenav3").style.width = "0";
}





