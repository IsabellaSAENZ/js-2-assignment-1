
// Our JavaScript will set the style of the html
// First we will use document.querySelectorAll to
// get all the elements that match our selection.
// Then we will 


// Declare the variable to hold our elements.
let elms;

// Select the elements we wish to change.
elms = document.querySelectorAll("h1");

// Loop through the elements and change them.
for(elm of elms) {
    elm.style.color = "red";
    elm.style.backgroundColor ="purple";
    // TODO: set the backgroundColor;
}

// TODO: select and change the p tags
//       then loop through the elements and change them.
pElms = document.querySelectorAll("p");
 for (elm of pElms) {
    elm.style.fontSize = "55px";
    elm.style.backgroundColor ="purple";   
}

// TODO: select and change the span tags
//       then loop through the elements and change them.
sElms = document.querySelectorAll("span");
for (elm of sElms) {
    elm.style.color = "blue";
}

// TODO: Go back to index.html and add
//       a class called "jump" to 10 elements.
//       These can be any elements you want.
//       For example: 2 h1 tags, 3 p tags, 5 span tags.
elms= document.querySelectorAll(".jump");

function oneJump(event) {
    elm = event.target;
    elm.style.position ="relative";
    elm.style.transition ="transform 2s"
    elm.style.transform ="translateX(-100px)";
    elm.style.color= "green";
    elm.style.backgroundColor = "yellow";

}

for (jumper of elms) {
    jumper.onclick = oneJump;
}


// TODO: select and change the elements with a .jump class 
// Set the style of each jump so that the element moves up 10px on the page.
// HINT: You can try...
//       elm.style.position = "relative"
//       elm.style.top = "-10px"