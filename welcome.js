function welcome()
{
    var ime=window.prompt("Put your name here:");
    var wel="<p>Hello "+ime+"!</p>";
    output=document.getElementById("ime");
    output.innerHTML=wel;

}
window.addEventListener("load",welcome,false);