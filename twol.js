//var newelement=document.createElement("h1");

//var comment=document.createComment("this is comment");
//var text=document.createTextNode("lolwaaa");
//newelement.appendChild(text);
/*document.getElementById("div1").appendChild(newelement);
document.write();*/
var target = document.getElementById("div1");
var newele="<h2>this is a text</h2>"
target.insertAdjacentHTML("beforebegin",newele);


//target.insertAdjacentElement("afterbegin",newelement)