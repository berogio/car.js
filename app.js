function chartefari() {
    if (document.querySelector(".night").src == "./img/SVG in HTML1.png") {
        document.querySelector(".night").src = "./img/SVG in HTML1.png";
    } else {
        document.querySelector(".night").src = "./img/SVG in HTML.png";
    }
}

function gamortefari() {
    if (document.querySelector(".night").src == "./img/SVG in HTML.png") {
        document.querySelector(".night").src = "./img/SVG in HTML.png";
    } else {
        document.querySelector(".night").src = "./img/SVG in HTML1.png";
    }
}



function startcar() {
    if (document.querySelector(".night").src == "./img/SVG in HTML.png") {
        document.querySelector(".night").src = "./img/SVG in HTML.png";
    } else {
        document.querySelector(".night").src = "./img/SVG in HTML - 2.png";
    }
}

function offcar() {
    if (document.querySelector(".night").src == "./img/SVG in HTML - 2.png") {
        document.querySelector(".night").src = "./img/SVG in HTML - 2.png";
    } else {
        document.querySelector(".night").src = "./img/SVG in HTML.png";
    }
}


function zoom() {
    const zoom = document.querySelector(`.night`);
    zoom.style.width = `1300px`;

}