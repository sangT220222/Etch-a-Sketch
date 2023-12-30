// we want to Create a webpage with a 16x16 grid of square divs.
//first let's create the div necessary for the foundation
// const h1 = document.createElement("h1");
// h1.textContent = "This is for show";
// document.body.append(h1);
// console.log("TEST");
const button = document.createElement("button");
button.textContent = "Click me for the size of the gird to sketch on!";

const divContainer = document.createElement("div");
divContainer.setAttribute("id", "container");
var userInput = 0; //defaut number

button.addEventListener("click", function() {
    userInput = parseInt(prompt("Enter number of squares per side: "));
    if(userInput !== null && userInput !== "" && Number.isInteger(userInput) === true && userInput > 0)
    {
        createGrid(userInput);
    } 
    else
    {
        alert("Please enter a valid number");
    }
})

function createGrid(size){
    // Clear existing grid
    divContainer.innerHTML = "";

    for (var i = 0; i < userInput; i++)
    {
        for(var j = 0; j < 16; j++)
        {
            const gridSquare = document.createElement("div");
            gridSquare.setAttribute("id", "grid");
            divContainer.appendChild(gridSquare);
            gridSquare.addEventListener("mouseover", function() {
                //implemented a random rgb colour each time you hover over a square in the grid
                const randomR = Math.floor(Math.random() * 256);
                const randomG = Math.floor(Math.random() * 256);
                const randomB = Math.floor(Math.random() * 256);
                this.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`; //using "this" to refer to current gridSquare
            })
        }
        // gridSquare.addEventListener("mouseout", function() {
        //     this.style.backgroundColor = "white";
        // })
        //}
    }
}

createGrid(userInput);

document.body.append(button);
document.body.append(divContainer);