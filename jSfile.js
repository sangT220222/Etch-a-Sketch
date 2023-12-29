// we want to Create a webpage with a 16x16 grid of square divs.
//first let's create the div necessary for the foundation
// const h1 = document.createElement("h1");
// h1.textContent = "This is for show";
// document.body.append(h1);
// console.log("TEST");

const divContainer = document.createElement("div");
divContainer.setAttribute("id", "container");

for (var i = 0; i < 16*16; i++)
{
    // for(var j = 0; j < 16; j++)
    // {
    const gridSquare = document.createElement("div");
    gridSquare.setAttribute("id", "grid");
    divContainer.appendChild(gridSquare);
    //}
}

document.body.append(divContainer);