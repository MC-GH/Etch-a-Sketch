 const gridSizeButton = document.getElementById('gridSizeButton');
 gridSizeButton.addEventListener('click', customGridSize);
 let gridContainer = document.getElementById('gridContainer');
 let boxes = document.querySelectorAll('.box');

function customGridSize() {
    let input = prompt('Please enter your desired gridsize. (max 100)');
    //convert to number
    let gridSize = parseInt(input);
    console.log('Gridsize requested:' + gridSize);
    //create grid with gridSize input
    createCustomGrid(gridSize);
}

function createCustomGrid(gridSize) {
    //calculate total amount of boxes
    let boxAmount = gridSize * gridSize;
    console.log('total amount of boxes needed:' + boxAmount);
    //calculate box size (standard grid is 400px wide and high)
    let boxSize = (400 / gridSize) + 'px';
    console.log('Boxsize:' + boxSize);
    //before creating new grid, remove standard grid (boxes) loaded on start page
    while (gridContainer.firstChild) gridContainer.removeChild(gridContainer.firstChild);
    console.log("Boxamount: " + boxAmount);

    for (let i = 0; i < boxAmount; i++) {
        createBox();
        //instead of referrinng to the createBox function, write the div creation out here. With Set attribute variable width and height + add Event listener for color change.
        console.log('custombox created');

        //add the style in this loop instead of outside the loop
    }
        let boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
        box.setAttribute('style', `width:${boxSize}; height:${boxSize}; background:${changeColor}`);
        // box.style.width = `${boxSize}+px`;
        // box.style.height = `${boxSize}+px`;
            //check if we can include event listener here instead of under createBox
            //make seperate function for the addEventListener and avoid using setAttribute here. (overwrites previously setAttribute)
            //maybe instead of using attributes we can use box.style.
        })

}


//create standard grid on page load:
 createStandardGrid();

function createStandardGrid() {
        for (i = 0; i<256; i++) {
        createBox();
        console.log("box created");
    }
}
//above function see if we can optimize it or make it more clear: boxsize x boxsize, standard 16

 function createBox () {
    const box = document.createElement('div');
    box.classList.add("box");
    document.getElementById("gridContainer").appendChild(box);
    box.addEventListener('mouseover',changeBoxColor);
 }


//see if we can add the event listener above outside of this function

 function changeBoxColor(e) {
    e.target.setAttribute('style', `background: ${changeColor()}; width: 50px;`);
    //specify the variable width and height here again -- write a custom createBox function within the createCustomGrid function. so that it doesn't use the changeBoxColor function
    console.log(e.target.className);
 }

 function changeColor(){
    let r = Math.floor(Math.random() * 255); 
    let g = Math.floor(Math.random() * 255); 
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
 }



 //button => prompt "Please enter size of grid (max 100)"
 //grid fixed width and height of 400px
 //divide width of grid by the input number = box width and height.

 //make standard grid size 16x16

 //make a function for custom field size. createCustomGrid() 
 //=> change the max-width of the container
 //=> run a custom loop again that creates amount of boxes required of input (boxes should auto-fill container automatically)
//  Click button => prompt 'how big do you want your field?'