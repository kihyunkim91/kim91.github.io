function elementcount(parent, getChildrensChildren) {
    var element = document.getElementById("textarea");
    var numberofChildren = element.getElementsByTagName('p').length
    alert("The total number of elements is: " + numberofChildren);
    
}

function div1count(parent, getChildrensChildren) {
    
    var element = document.getElementById("div1");
    var numberofChildren = element.getElementsByTagName('p').length
  alert("The number of elements in div 1 is: " + numberofChildren);
}

function div2count(parent, getChildrensChildren) {
    
    var element = document.getElementById("div2");
    var numberofChildren = element.getElementsByTagName('p').length
  alert("The number of elements in div 2 is:  " + numberofChildren);
}