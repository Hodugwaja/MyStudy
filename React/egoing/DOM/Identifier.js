
function openChar(List, elmnt, color){
    var i, tabContent, tablinks;
    tabContent = document.getElementsByClassName("tabcontent");
    for(i = 0; i<tabContent.length; i++){
        tabContent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for(i  = 0; i<tablinks.length; i++){
        tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(List).style.display = "block";

    elmnt.style.backgroundColor = color;

     
}
document.getElementById("defaultOpen").click();