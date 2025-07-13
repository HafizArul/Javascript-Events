const cont1 = document.querySelectorAll(".container .content")[0];
const cont2 = document.querySelectorAll(".container .content")[1];
const cont3 = document.querySelectorAll(".container .content")[2];
const pBtn = document.querySelectorAll("button")[0];
const h3Btn = document.querySelectorAll("button")[1];
const wgBtn = document.querySelectorAll("button")[3];
const captionCont = document.createElement("p");
cont2.append(captionCont);
let no = 1;

const sRed = document.querySelector("#red input[type=range]");
const sGreen = document.querySelector("#green input[type=range]");
const sBlue = document.querySelector("#blue input[type=range]");
const slider = [sRed, sGreen, sBlue];

pBtn.addEventListener("click", function () {
    const pElm = document.createElement("p");
    const pTxt = document.createTextNode("Ini paragraf");
    pElm.append(pTxt);
    cont1.append(pElm);
});

h3Btn.onclick = function () {
    const h3Elm = document.createElement("h3");
    const h3Txt = document.createTextNode("Ini header 3");
    h3Elm.append(h3Txt);
    h3Elm.style.backgroundColor = "lightgreen";
    cont1.append(h3Elm);
};

function createLink() {
    const aElm = document.createElement("a");
    const aTxt = document.createTextNode("Link baru");
    aElm.setAttribute("href", "#");
    aElm.append(aTxt);
    aElm.style.display = "block";
    aElm.style.margin = "8px 0";
    cont1.append(aElm);
}

for (let i = 0; i < slider.length; i++) {
    slider[i].addEventListener("input", function() {
        cont2.style.backgroundColor = `rgb(${sRed.value}, ${sGreen.value}, ${sBlue.value})`;
        captionCont.innerHTML = `RGB value: ${sRed.value}, ${sGreen.value}, ${sBlue.value}`;
    });
}

wgBtn.addEventListener("click", function() {
    // Declaring the elements
    let wgElm, titleElm, left, right;
    const grpDivElm = [wgElm, titleElm, left, right];
    for (let x = 0; x < grpDivElm.length; x++) {
        grpDivElm[x] = document.createElement("div");
    }
    const h4Elm = document.createElement("h4");
    const pElm = document.createElement("p");
    const h4Txt = document.createTextNode("Lorem ipsum");
    const pTxt = document.createTextNode("Dolor sit amet");
    // Arranging the elements
    h4Elm.append(h4Txt);
    pElm.append(pTxt);
    grpDivElm[1].setAttribute("class", "title");
    grpDivElm[1].append(h4Elm);
    grpDivElm[1].append(pElm);
    grpDivElm[2].append(no);
    grpDivElm[2].append(grpDivElm[1]);
    grpDivElm[0].setAttribute("class", "widget");
    grpDivElm[0].append(grpDivElm[2]);
    grpDivElm[0].append(grpDivElm[3]);
    // Styles
    grpDivElm[0].style.padding = "16px";
    grpDivElm[0].style.backgroundColor = "#d9d9d9";
    grpDivElm[0].style.marginBottom = "12px";
    grpDivElm[0].style.borderRadius = "12px";
    grpDivElm[0].style.display = "flex";
    grpDivElm[0].style.justifyContent = "space-between";
    grpDivElm[2].style.display = "flex";
    grpDivElm[2].style.gap = "32px";
    grpDivElm[3].style.width = "40px";
    grpDivElm[3].style.borderRadius = "8px";
    grpDivElm[3].style.aspectRatio = "1/1";
    grpDivElm[3].style.backgroundColor = "rgb(255, 0, 0)";
    pElm.style.margin = "0";
    h4Elm.style.margin = "0";
    cont3.append(grpDivElm[0]);
    no++;
})

// Cursor Location
document.addEventListener("mousemove", function (e) {
    const cursorLocationText = document.getElementById("cursorLocation");
    const xPos = e.clientX;
    const yPos = e.clientY;
    cursorLocationText.innerHTML = `(${xPos}, ${yPos})`;
})