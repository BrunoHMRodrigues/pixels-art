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