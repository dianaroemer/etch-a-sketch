// Goal 1: Create 16 Divs inside of "container"

const container = document.querySelector('.container');

// console.log(container);

for (let i = 0; i < 16; i++ ) {
    const div = document.createElement(`div`);
    div.setAttribute('id', `block${i}`)
    // div.textContent = i;

    div.setAttribute( 'style',
        `//color: blue;
        background-color:black;
        // border: solid;
        // border-color: green;
        margin: 1px 1px 1px 1px;
        `
    )

    div.addEventListener('mouseover', (e) => {
        // console.log(e.target);
        // div.setAttribute('style', 
        //     `background-color: white;
        //     margin: 1px 1px 1px 1px;`
        // );

        e.target.style.backgroundColor = "white";

        
        setTimeout(function() {
            e.target.style.backgroundColor = "black";
        }, 500);

    });

    // div.addEventListener('mouseout', (e) => {
    //     console.log(e.target);
    //     div.setAttribute('style', 
    //         `background-color: black; 
    //         margin: 1px 1px 1px 1px;`
    //     );
    // });




    container.appendChild(div);


}

const containerList = document.querySelectorAll(('div'));

console.log(containerList);