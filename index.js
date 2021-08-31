// Create container pointer for reference elements
const container = document.querySelector('.container');

// Create initial grid
// The variable 25 is reference to the initial size of the container, populated later via getInput. It refers to the size of each individual 'pixel' div in the container AND the number of divs created, e.g. create 25x25 divs, establish grid to have width repeat(25, auto) for sizing each div appropriate to each other.
// This can be rebuilt and cleaned up to initialize with standard functions used later on in code, instead of hardcode number to match the CSS grid
populateContainer(25);


// Function that prompts and keeps user input for size of next grid
let input = 10;
function getInput() {
    input = window.prompt("How large should your new grid be in (x,x)?", 'x');
    if (input > 100) {
        window.alert("Please select a number less than 100!");
        getInput();
    }
}

// Attaching event listener to clear button, also running functionality to rebuild new grid.
const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => {
    // while loop that clears container's current children
    while ( container.firstChild ) {
        container.removeChild(container.firstChild);
    }

    getInput();

    // Resize grid according to size specifications and user input
    document.getElementById("container").style.gridTemplateColumns = `repeat(${input}, auto) `;
    document.getElementById("container").style.gridTemplateRows = `repeat(${input}, auto) `;

    // Add new elements to grid input*input number of times
    populateContainer(input);
})

// Attaching event listener to color button
const colorBtn = document.querySelector('#colorBtn');
colorBtn.addEventListener('click', () => {
    // while loop that clears container's current children
    while ( container.firstChild ) {
        container.removeChild(container.firstChild);
    }

    getInput();

    // Resize grid according to size specifications and user input
    document.getElementById("container").style.gridTemplateColumns = `repeat(${input}, auto) `;
    document.getElementById("container").style.gridTemplateRows = `repeat(${input}, auto) `;

    // Add new elements to grid input*input number of times
    populateContainerColor(input);
})

// Attaching event listener to fade button
const fadeBtn = document.querySelector('#fadeBtn');
fadeBtn.addEventListener('click', () => {
    // while loop that clears container's current children
    while ( container.firstChild ) {
        container.removeChild(container.firstChild);
    }

    getInput();

    // Resize grid according to size specifications and user input
    document.getElementById("container").style.gridTemplateColumns = `repeat(${input}, auto) `;
    document.getElementById("container").style.gridTemplateRows = `repeat(${input}, auto) `;

    // Add new elements to grid input*input number of times
    populateContainerFade(input);
})

function populateContainer ( foo ) {

    for (let i = 0; i < foo*foo; i++ ) {
        const div = document.createElement(`div`);
        div.setAttribute('id', `block${i}`);
    
        // Style newly created divs
        div.setAttribute( 'style',
            `background-color: bisque;`
        )
    
        // Add mouseover event listener and timeout function, changing color of object on mouseover, and after Timeout revert to original color
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "black";
            
            // Optional timeout function that returns highlighted divs back to default color, currently hardcoded to bisque, but can be set to reference default page background color
            // After brief timeout in milliSecs, revert color to initial black
            // setTimeout(function() {
            //     e.target.style.backgroundColor = "bisque";
            // }, 500);
    
        });
    
        // Append newly created and styled element to parent container
        container.appendChild(div);
    }
}

function populateContainerColor ( foo ) {

    for (let i = 0; i < foo*foo; i++ ) {
        const div = document.createElement(`div`);
        div.setAttribute('id', `block${i}`);
    
        // Style newly created divs
        div.setAttribute( 'style',
            `background-color: bisque;`
        )
    
        // Add mouseover event listener changing color of object on mouseover to randomized rgb(x,y,z) from generateColorString 
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = generateColorString();
        });
    
        // Append newly created and styled element to parent container
        container.appendChild(div);
    }
}

function populateContainerFade ( foo ) {

    for (let i = 0; i < foo*foo; i++ ) {
        const div = document.createElement(`div`);
        div.setAttribute('id', `block${i}`);
    
        // Style newly created divs
        div.setAttribute( 'style',
            `background-color: rgb(0,0,0,0.0);`
        )
    
        // Add mouseover event listener and changing color to gradually increase in shades of black with each additional mouseover
        div.addEventListener('mouseover', (e) => {

            // Slice first part of unchanging string - rgb(0, 0, 0, 
            let beginStr = e.target.style.backgroundColor.slice(0, 14);
            // Substring alpha value segment of rgb to end
            let endStr = e.target.style.backgroundColor.substring(14);
            // Trimming off end of string leaving only numerical value
            endStr = endStr.substring(0, endStr.indexOf(')'));
            // Math to parse string to num, and add 10%
            let endNum = parseFloat(endStr) + .1;

            //Assign new rgb value string to object's backgroundColor
            e.target.style.backgroundColor = beginStr + endNum + ')';
              
        });
    
        // Append newly created and styled element to parent container
        container.appendChild(div);
    }
}

// Generates and returns a string giving a randomized rgb(x, y, z) value for colors
function generateColorString () {
    Math.floor(Math.random() * 256);
    return `rgb( ${Math.floor(Math.random() * 256)} , ${Math.floor(Math.random() * 256)} , ${Math.floor(Math.random() * 256)})`;
}