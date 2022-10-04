window.onload = initialize ();

function initialize () {
    // const buttonColor1 = document.getElementById("button-color1");
    // const buttonColor2 = document.getElementById("button-color1");
    // const buttonColor3 = document.getElementById("button-color1");
    // const buttonColor4 = document.getElementById("button-color1");

    keepColorPallets ();
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
    
    for (let index = 1; index <= arraybuttons.length; index+=1) {  
        let randomColor = generateRandomColors();    
        
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
}
buttonRandomColor.addEventListener("click", applyRandomColor);