window.onload = initialize ();

function initialize () {
    const buttonColor1 = document.getElementById("button-color1");
    // const buttonColor2 = document.getElementById("button-color1");
    // const buttonColor3 = document.getElementById("button-color1");
    // const buttonColor4 = document.getElementById("button-color1");

    keepColorPallets ();

    buttonColor1.className = "color selected";
    let size = 5;
    if (localStorage.getItem("boardSize")) {
        size = localStorage.getItem("boardSize");
    }
    generatePixelsBoard(size);

    if (localStorage.getItem("pixelBoard")) {
        applyStoragedPixelColors ();
    } else {
        keepColorPixels ();
    }   
    
}
function keepColorPallets () {
    const buttonColor1 = document.getElementById("button-color1");
    const buttonColor2 = document.getElementById("button-color2");
    const buttonColor3 = document.getElementById("button-color3");
    const buttonColor4 = document.getElementById("button-color4");

    let palletColor1 = localStorage.getItem("palletColor1Storaged");
    let palletColor2 = localStorage.getItem("palletColor2Storaged");
    let palletColor3 = localStorage.getItem("palletColor3Storaged");
    let palletColor4 = localStorage.getItem("palletColor4Storaged");

    if (palletColor1) {
        let color1 = localStorage.getItem("palletColor1Storaged");
        buttonColor1.style.backgroundColor = color1;
    } else {
        localStorage.setItem("palletColor1Storaged", "black");
        buttonColor1.style.backgroundColor = "black";
    }
    if (palletColor2) {
        let color2 = localStorage.getItem("palletColor2Storaged");
        buttonColor2.style.backgroundColor = color2;
    } else {
        localStorage.setItem("palletColor2Storaged", "green");
        buttonColor2.style.backgroundColor = "green";
    }

    if (palletColor3) {
        let color3 = localStorage.getItem("palletColor3Storaged");
        buttonColor3.style.backgroundColor = color3;
    } else {
        localStorage.setItem("palletColor3Storaged", "red");
        buttonColor3.style.backgroundColor = "red";
    }

    if (palletColor4) {
        let color4 = localStorage.getItem("palletColor4Storaged");
        buttonColor4.style.backgroundColor = color4;
    } else {
        localStorage.setItem("palletColor4Storaged", "blue");
        buttonColor4.style.backgroundColor = "blue";
    }
}

const buttonRandomColor = document.getElementById("button-random-color");

function generateRandomColors () {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function applyRandomColor (event) {
    const buttonColor2 = document.getElementById("button-color2");
    const buttonColor3 = document.getElementById("button-color3");
    const buttonColor4 = document.getElementById("button-color4");
    let arraybuttons = [buttonColor2,buttonColor3,buttonColor4];
    let colorPallet = [];

    for (let index = 1; index <= arraybuttons.length; index+=1) {  
        let randomColor = generateRandomColors();    
        colorPallet.push(randomColor);

        if (index === 1) {
            buttonColor2.style.backgroundColor = randomColor;
            localStorage.setItem("palletColor2Storaged", randomColor);
        } else if (index === 2) {
            buttonColor3.style.backgroundColor = randomColor;
            localStorage.setItem("palletColor3Storaged", randomColor);
        } else {
            buttonColor4.style.backgroundColor = randomColor;
            localStorage.setItem("palletColor4Storaged", randomColor);
        }
        
    }
    localStorage.setItem("colorPalette", colorPallet);
}
buttonRandomColor.addEventListener("click", applyRandomColor);

function generatePixelsBoard (boardSize) {
    const board = document.getElementById("pixel-board");
    
    
    if (boardSize < 5) {
        boardSize = 5;
    } else if (boardSize > 50) {
        boardSize = 50;
    }
    const pixelsQuantity = boardSize * boardSize;

    for (let index = 0; index <  pixelsQuantity; index += 1) {
        let pixel = document.createElement("button");
        pixel.className = "pixel";
        pixel.style.backgroundColor = "white";
        pixel.style.display = "inline-block";

        board.appendChild(pixel);

    }
    board.style.width = 40 * boardSize + "px";
}


const getButtonColor1 = document.getElementById("button-color1");
const getButtonColor2 = document.getElementById("button-color2");
const getButtonColor3 = document.getElementById("button-color3");
const getButtonColor4 = document.getElementById("button-color4");

function selectButton (event) {
    const currentSelected = document.querySelector(".selected");

    currentSelected.className = "color";

    if (event.target === getButtonColor1) {
        getButtonColor1.className = "color selected";
    } else if (event.target === getButtonColor2) {
        getButtonColor2.className = "color selected";
    }else if (event.target === getButtonColor3) {
        getButtonColor3.className = "color selected";
    } else {
        getButtonColor4.className = "color selected";
    }
}
getButtonColor1.addEventListener("click", selectButton);
getButtonColor2.addEventListener("click", selectButton);
getButtonColor3.addEventListener("click", selectButton);
getButtonColor4.addEventListener("click", selectButton);

const board = document.getElementById("pixel-board");

function paintPixelBoard (event) {
    const getSelected = document.querySelector(".selected");
    const getColor = getSelected.style.backgroundColor;
    
    event.target.style.backgroundColor = getColor;
    keepColorPixels ();
}
board.addEventListener("click", paintPixelBoard);


const buttonClear = document.getElementById("clear-board");

function clearBoard () {
    const getPixels = document.getElementById("pixel-board").children;

    for (let index = 0; index < getPixels.length; index+=1) {
        getPixels[index].style.backgroundColor = "white";        
    }
    keepColorPixels ();
}
buttonClear.addEventListener("click", clearBoard);

function keepColorPixels () {
    const getPixels = document.getElementById("pixel-board").children;
    let arrayColorPixels = [];

    for (let index = 0; index < getPixels.length; index+=1) {
        if (getPixels[index].style.backgroundColor === "") {
            arrayColorPixels.push("white");
        } else {
            arrayColorPixels.push(getPixels[index].style.backgroundColor);   
        }     
    }    
    // localStorage.setItem("pixelBoard", arrayColorPixels);
    // console.log(arrayColorPixels);
    localStorage.setItem("pixelBoard", JSON.stringify(arrayColorPixels));
}

function applyStoragedPixelColors () {
    const getPixels = document.querySelectorAll(".pixel");
    const arrayStoredColors = JSON.parse(localStorage.getItem("pixelBoard"));
    // console.log(getPixels);
    // console.log(arrayStoredColors);
    for (let index = 0; index < getPixels.length; index+=1) {
        getPixels[index].style.backgroundColor = arrayStoredColors[index];        
    }
}

function deleteBoard () {
    const board = document.getElementById("pixel-board");
    const quantityChilds = document.querySelectorAll(".pixel");
    localStorage.removeItem("pixelBoard");

    for (let index = 0; index < quantityChilds.length; index+=1) {
        board.lastChild.remove();        
    }
}

const buttonGenerateBoard = document.getElementById("generate-board");

function generateBoard () {
    const input = document.getElementById("board-size");
    const inputValue = input.value;

    console.log(inputValue);
    if (inputValue === "") {
        alert("Board inválido!");
    } else {

        localStorage.setItem("boardSize", inputValue);
        deleteBoard ();
        generatePixelsBoard(inputValue);
    }

}
buttonGenerateBoard.addEventListener("click", generateBoard)