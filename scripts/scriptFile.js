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

// function makeNav(currentPage)
// {
//     let nav = document.getElementById("nav");

//     let logo = document.createElement("img");
//     logo.src = "res/logo/logo_short.svg";
//     logo.onclick = home;

//     let prezentare = document.createElement("a");
//     if (currentPage == "prezentare")
//     {
//         prezentare.href = "#prezentare";
//         prezentare.classList.add("currentPage");
//     }
//     else
//     {
//         prezentare.href = "index.html";
//     }
//     prezentare.innerHTML = "Prezentare";

//     nav.appendChild(document.createElement("img"));
// }


// setInterval(() => {
//     let title = document.querySelector("img");
//     let s = window.getComputedStyle(title);
//     let myFilter = s.getPropertyValue("filter");

//     let oF = myFilter.match("[01]");
//     console.log(oF[0]);

//     title.style.filter = "invert(" + (1-oF[0]) + ")";
// }, 1000);