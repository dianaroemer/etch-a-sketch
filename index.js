// Goal 1: Create 16 Divs inside of "container"

// Create container pointer for reference elements
const container = document.querySelector('.container');

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

const containerList = document.querySelectorAll(('div'));

// Goal 2: Clear current grid

// steps: 
// get container
// get container subNodes
// for each subNode, container.remove(subNode)

const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => {
    while ( container.firstChild ) {
        container.removeChild(container.firstChild);
    }

})

