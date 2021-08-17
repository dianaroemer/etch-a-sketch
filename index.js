// Goal 1: Create 16 Divs inside of "container"

// Create container pointer for reference elements
const container = document.querySelector('.container');

// Styling container element with JS for easier reference when rebuilding grid later
container.style = `
    display: grid;
    width: 1000px;
    grid-template-columns: 50px 50px 50px 50px;
    grid-template-rows: 50px 50px 50px 50px;
`;


// Create initial 4x4 grid using for loop, adding elements to div before appending to container.
for (let i = 0; i < 16; i++ ) {
    const div = document.createElement(`div`);
    div.setAttribute('id', `block${i}`)

    // Style newly created divs
    div.setAttribute( 'style',
        `background-color:black;`
        // margin: 1px 1px 1px 1px;
    )

    // Add mouseover event listener and timeout function, changing color of object on mouseover, and after Timeout, reverting to original color
    div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = "white";
        
        // After brief timeout in ms, revert color to initial black
        setTimeout(function() {
            e.target.style.backgroundColor = "black";
        }, 500);

    });

    // Append newly created and styled element to parent container
    container.appendChild(div);
}

// Function of above for loop
function buildGrid( size ) {
    for (let i = 0; i < size; i++ ) {
        const div = document.createElement(`div`);
        div.setAttribute('id', `block${i}`)
    
        // Style newly created divs
        div.setAttribute( 'style',
            `background-color:black;`
            // margin: 1px 1px 1px 1px;
        )
    
        // Add mouseover event listener and timeout function, changing color of object on mouseover, and after Timeout, reverting to original color
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "white";
            
            // After brief timeout in ms, revert color to initial black
            setTimeout(function() {
                e.target.style.backgroundColor = "black";
            }, 500);
    
        });
    
        // Append newly created and styled element to parent container
        container.appendChild(div);
    }
}

// const containerList = document.querySelectorAll(('div'));


// Function that prompts and keeps user input for size of next grid
let input;
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
    console.log(container.style);
    while ( container.firstChild ) {
        container.removeChild(container.firstChild);
    }

    getInput();

    // console.log(input);
    // console.log(container.style.width);

    console.log( container.style.gridTemplateColumns);

    // -------------------------------------------------------------------------
    // Current progress, attempting to reshape containers Grid element according to input of user, input columns by input rows
    // look into repeat function, eg
    // example: container.style.gridTemplateColumns = repeat(input, container.style.width / input );

})
