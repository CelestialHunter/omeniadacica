function home() {
    window.location.href = "index.html";
}

function english(src) {
    window.location.href = "en/" + src + ".html";
}

function romanian(src) {
    window.location.href = "../" + src + ".html";
}

function cta() {
    window.location.href = "support.html";
}

function prezentare() {
    window.location.href = "#prezentare";
}


// setInterval(() => {
//     let title = document.querySelector("img");
//     let s = window.getComputedStyle(title);
//     let myFilter = s.getPropertyValue("filter");

//     let oF = myFilter.match("[01]");
//     console.log(oF[0]);

//     title.style.filter = "invert(" + (1-oF[0]) + ")";
// }, 1000);