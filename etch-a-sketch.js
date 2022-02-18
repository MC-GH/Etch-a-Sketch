//assign global variables
 let gridContainer = document.getElementById('gridContainer');
 let color = 'green';
 let gridSize = 16;
//assign buttons and add event listeners
 const gridSizeButton = document.getElementById('gridSizeButton');
 gridSizeButton.addEventListener('click', customGridSize);

 const rainbowButton = document.getElementById("rainbow");
 rainbowButton.addEventListener("click", () => {
     color = 'rainbow';
 });
 
 const whiteButton = document.getElementById("green");
 whiteButton.addEventListener("click", () => {
     color = 'green';
 });
 
  const dynamicButton = document.getElementById("greyscale");
  dynamicButton.addEventListener("click", () => {
     color = 'greyscale';
 });

 const eraserButton = document.getElementById('eraser');
 eraserButton.addEventListener("click", () => {
     color = 'eraser';
 });

 //below reset button creates a new custom grid, and changes the background color of the boxes to transparent
 //it does so by looping through the indexes of the array-like object that is created via getElementsByClassName method
 const resetButton = document.getElementById('reset');
 resetButton.addEventListener("click", () => {
     createCustomGrid(16);
     const boxes = document.getElementsByClassName('box');
     for (let i = 0; i < boxes.length; i++) {
         boxes[i].style.backgroundColor = '';
         boxes[i].style.opacity = '.1';
     }
     color = 'green';
});

function randomColor() {
    let r = Math.floor(Math.random() * 255); 
    let g = Math.floor(Math.random() * 255); 
    let b = Math.floor(Math.random() * 255);
    let a = 1;
    return `rgba(${r},${g},${b},${a})`;
}

//creates initial custom grid on page load
createCustomGrid(16);

function customGridSize() {
    let input = prompt('Please enter your desired gridsize. (min. 1 max. 100)');
    if (input > 100) {alert("Please enter a value lower than 100.");}
    else if (input < 1) {alert('Please enter a gridsize of 1 or higher');}
    else { 
            // //convert to number
        let gridSize =parseInt(input);
        console.log('Gridsize requested:' + gridSize);
            // //create grid with gridSize input
        createCustomGrid(gridSize);
    }
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
        const box = document.createElement('div');
        box.classList.add("box");
        document.getElementById("gridContainer").appendChild(box);

        box.setAttribute('style', `width:${boxSize}; height:${boxSize}`);
        console.log('custombox created');

        box.addEventListener('mouseover', () => {
            if (color === 'green') {
            box.style.backgroundColor = '#06d6a0';
            box.style.opacity = '1';
            console.log(Number(box.style.opacity));
            }  else if (color === 'rainbow') {
                box.style.backgroundColor = randomColor();
                box.style.opacity = '1';
                console.log(box.style.backgroundColor);
                console.log(Number(box.style.opacity));
            }   else  if (color === 'greyscale') {
                // console.log(box.style.backgroundColor);
                // box.style.backgroundColor = "black";
                // let opacity = Number(box.style.opacity);
                // box.style.opacity = opacity >= 1 ? 1 : opacity + 0.1;
                if (box.style.opacity === '1' && box.style.backgroundColor === 'black') {
                        box.style.opacity = '1';
                } else if (box.style.opacity === '1') {
                    box.style.opacity = '.1';
                    console.log(box.style.opacity);
                    box.style.backgroundColor = 'black';
                } else if (box.style.opacity < '1' || '0') {
                    box.style.backgroundColor = 'black';
                    let opacity = Number(box.style.opacity);
                    box.style.opacity = opacity + 0.1;
                    console.log(`New opacity: ${box.style.opacity}`)
                }
             }   else if (color === 'eraser') {
                 box.style.opacity = 0;
                box.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
            }
})}
}
