// we want to Create a webpage with a 16x16 grid of square divs.
//first let's create the div necessary for the foundation
// const h1 = document.createElement("h1");
// h1.textContent = "This is for show";
// document.body.append(h1);
// console.log("TEST");
const button = document.createElement("button");
button.textContent = "Click me for the size of the gird to sketch on!";

button.addEventListener("click", function() {
    const userInput = prompt("Enter number of squares per side: ");
    if(userInput === null || userInput === "" || Number.isNaN(userInput) === false)
    {
        alert("Please enter a valid number");
    } 
    else
    {
        const numberOfSquares = parseInt(userInput);
        if(numberOfSquares < 0) {
            alert("Please enter a positive whole number");
        }
    }
})


const divContainer = document.createElement("div");
divContainer.setAttribute("id", "container");

for (var i = 0; i < 16*16; i++)
{
    // for(var j = 0; j < 16; j++)
    // {
    const gridSquare = document.createElement("div");
    gridSquare.setAttribute("id", "grid");
    divContainer.appendChild(gridSquare);
    gridSquare.addEventListener("mouseover", function() {
        this.style.backgroundColor = "blue"; //using "this" to refer to current gridSquare
    })
    
    // gridSquare.addEventListener("mouseout", function() {
    //     this.style.backgroundColor = "white";
    // })
    //}
}


document.body.append(button);
document.body.append(divContainer);