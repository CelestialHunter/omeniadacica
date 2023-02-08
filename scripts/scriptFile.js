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

roNavBts = {
    "indexBt": "Prezentare",
    "projectsBt": "Proiecte",
    "eventsBt": "Evenimente",
    "supportBt": "Vino alături de noi!",
    "contactBt": "Contact"
}

enNavBts = {
    "indexBt": "Presentation",
    "projectsBt": "Projects",
    "eventsBt": "Events",
    "supportBt": "Join us!",
    "contactBt": "Contact"
}

pageNavBts = {
    "index": "indexBt",
    "projects": "projectsBt",
    "events": "eventsBt",
    "support": "supportBt",
    "contact": "contactBt"
}

function makeNav(currentPage, lang) 
{    
    var root = document.location.host;
    $.get(root + "/components/nav.html", function(data) {
        $("#nav-placeholder").replaceWith(data);
        $("#" + pageNavBts[currentPage]).addClass("currentPage");

        if (lang == "ro") {
            $("#" + "langBt").on("click", function() {
                english(currentPage);
            }).addClass("fi-gb");
            for(var key in roNavBts) {
                $("#" + key).text(roNavBts[key]);
            }

            $("#projectsDrop").children().eq(0).text("În derulare");
            $("#projectsDrop").children().eq(1).text("Finalizate");

            $("#eventsDrop").children().eq(0).text("Culturale");
            $("#eventsDrop").children().eq(1).text("Muzicale");
            $("#eventsDrop").children().eq(2).text("Istorice");
        }
        else if(lang == "en") {
            $("#" + "langBt").on("click", function() {
                romanian(currentPage);
            }).addClass("fi-ro");
            for(var key in enNavBts) {
                $("#" + key).text(enNavBts[key]);
            }

            $("#projectsDrop").children().eq(0).text("Ongoing");
            $("#projectsDrop").children().eq(1).text("Completed");

            $("#eventsDrop").children().eq(0).text("Cultural");
            $("#eventsDrop").children().eq(1).text("Musical");
            $("#eventsDrop").children().eq(2).text("Historical");

            for(var key in pageNavBts) {
                $("#" + pageNavBts[key]).attr("href", "en/" + key + ".html");
            }
        }

        
    });
}

// setInterval(() => {
//     let title = document.querySelector("img");
//     let s = window.getComputedStyle(title);
//     let myFilter = s.getPropertyValue("filter");

//     let oF = myFilter.match("[01]");
//     console.log(oF[0]);

//     title.style.filter = "invert(" + (1-oF[0]) + ")";
// }, 1000);