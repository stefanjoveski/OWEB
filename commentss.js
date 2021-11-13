var username=window.prompt("Your username");
var br=[];
var n;
function comment(kade,text,ime) {

    var para = document.createElement("li");
    var x = document.getElementById(text).value;
    var y = document.getElementById(ime).value;
    var node = document.createTextNode(y+" : "+x);
    para.appendChild(node);
    var element = document.getElementById(kade);
    element.appendChild(para);

};

var c=0;
function rply(kade,text,ime) {
    var para = document.createElement("li");
    var x = document.getElementById(text).value;
    var y = document.getElementById(ime).value;
    var node = document.createTextNode(y+" : "+x);
    para.appendChild(node);
    var but1=document.createElement("button");
    var node2=document.createTextNode("Delete");
    but1.appendChild(node2);
    but1.addEventListener("onclick","izbrisi(c)")
    para.appendChild(but1);
    para.className(c);
    c++;
    var element = document.getElementById(kade);
    element.appendChild(para).setAttribute("style","margin-left:10%");

};