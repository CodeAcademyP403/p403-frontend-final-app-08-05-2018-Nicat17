// Search Section
var navSearchInput = document.querySelector("#navSearchInput");
var navSearchButton = document.querySelector("#navSearchButton");
var navSearchButtonIcon = document.querySelector("#navSearchButton>i");

navSearchInput.addEventListener("focus", function () {
    navSearchButton.style.right = "0px";
    navSearchButton.style.opacity = "1";
});

document.addEventListener("click", function (e) {
    if (e.target == navSearchButton || e.target == navSearchButtonIcon) {
        navSearchButton.style.right = "0px";
        navSearchButton.style.opacity = "1";
    }
    else if (e.target == navSearchInput) {

    }
    else {
        navSearchButton.style.right = "-50px";
        navSearchButton.style.opacity = "0";
    }
});

// NAV OPEN AND CLOSE SECTION
var allMainLi = document.querySelectorAll("ul.nav>li");

var closeIcon = document.querySelector(".close");
var openIcon = document.querySelector(".open");

var allSideUl = document.querySelectorAll("ul.collapse");
var allMainLiSpan = document.querySelectorAll("ul.nav>li span");
var sideBarId = document.querySelector(".jssideBar");
var mainSec = document.querySelector(".jsmain");
var logoText = document.querySelector(".jslogoText");
var headFixed = document.querySelector("#main>.head");
var faBars = document.querySelector(".fa-bars");
var faTimes = document.querySelector(".fa-times");


var liCont = false;



closeIcon.addEventListener("click", function () {
    OpenSideBar();
});

openIcon.addEventListener("click", function () {
    ClosedSideBar();
});

for (var li of allMainLi) {
    li.addEventListener("click", function () {
        if (liCont) {
            ClosedSideBar();
            liCont = false;
        }
    });
}

function ClosedSideBar() {
    if (innerWidth > 768) {
        for (var liSpan of allMainLiSpan) {
            liSpan.style.opacity = "1";
        }

        sideBarId.style.width = "250px";

        mainSec.style.width = "calc(100% - 250px)";
        headFixed.style.width = "calc(100% - 250px)";
        mainSec.style.marginLeft = "250px";

        closeIcon.style.opacity = "1";
        closeIcon.style.display = "block";

        closeIcon.classList.remove("rotateIcon");
        closeIcon.classList.add("rotateIcon");

        setTimeout(function () {
            closeIcon.classList.remove("rotateIcon");
        }, 400);

        openIcon.style.opacity = "0";
        openIcon.style.display = "none";

        logoText.style.opacity = "1";
        logoText.style.display = "inline-block";
    }
    else {
        closeIcon.style.opacity = "1";
        closeIcon.style.display = "block";

        closeIcon.classList.remove("rotateIcon");
        closeIcon.classList.add("rotateIcon");

        setTimeout(function () {
            closeIcon.classList.remove("rotateIcon");
        }, 100);

        openIcon.style.opacity = "0";
        openIcon.style.display = "none";

        sideBarId.style.width = "100%";
        sideBarId.style.height = "100%";
    }
    faBars.style.fontSize = "28px";
    faBars.style.padding = "9px";
    faTimes.style.padding = "7px";
    faTimes.style.fontSize = "35px";
    faTimes.style.color = "gray";
    faBars.style.color = "gray";
}


function OpenSideBar() {
    if (innerWidth > 768) {
        for (var liSpan of allMainLiSpan) {
            liSpan.style.opacity = "0";
        }
        for (var ul of allSideUl) {
            ul.classList.remove("show");
        }
        for (var li of allMainLi) {
            li.classList.remove("activeLi");
        }

        faBars.style.display = "none";

        sideBarId.style.width = "100px";

        mainSec.style.width = "calc(100% - 100px)";
        headFixed.style.width = "calc(100% - 100px)";
        mainSec.style.marginLeft = "100px";

        closeIcon.classList.remove("rotateIcon");

        closeIcon.classList.add("rotateIcon");

        closeIcon.style.opacity = "0";

        setTimeout(function () {
            closeIcon.style.display = "none";
        }, 400);

        setTimeout(function () {
            faBars.style.display = "block";
        }, 400);


        openIcon.style.opacity = "1";
        openIcon.style.display = "block";

        logoText.style.opacity = "0";
        logoText.style.display = "none";

        liCont = true;
    }
    else {
        faBars.style.display = "none";

        closeIcon.classList.remove("rotateIcon");

        closeIcon.classList.add("rotateIcon");

        closeIcon.style.opacity = "0";

        setTimeout(function () {
            closeIcon.style.display = "none";
        }, 100);

        setTimeout(function () {
            faBars.style.display = "block";
        }, 100);


        openIcon.style.opacity = "1";
        openIcon.style.display = "block";

        sideBarId.style.width = "0px";
        sideBarId.style.height = "0px";
    }
    faBars.style.fontSize = "28px";
    faBars.style.padding = "9px";
    faTimes.style.padding = "7px";
    faTimes.style.fontSize = "35px";
    faTimes.style.color = "gray";
    faBars.style.color = "gray";
}

// nav section


for (var li of allMainLi) {
    li.addEventListener("mouseover", function () {
        this.classList.add("hoverLi");
    });
    li.addEventListener("mouseout", function () {
        this.classList.remove("hoverLi");
    });
    li.addEventListener("click", function () {
        if (this.className == "nav-item hoverLi" || this.className == "nav-item hoverLi collapsed" || this.className == "nav-item collapsed hoverLi") {
            this.classList.add("activeLi");
        }
        else {
            this.classList.remove("activeLi");
        }
    });
}



//Sales statistics Section with charts plugin
var options = document.querySelectorAll("#graphicSection .graphic .opt");
var optionsSpan = document.querySelectorAll("#graphicSection .graphic>ul li");

for (var lim of optionsSpan) {
    lim.addEventListener("click", function (e) {
        for (var opt of options) {
            opt.style.display = "none";
            opt.style.opacity = "0";
            if (opt.id == e.target.id) {
                opt.style.display = "block";
                opt.style.opacity = "1";
                opt.children[0].style.height = "200px";
                opt.children[0].style.width = "100%";
                opt.children[0].children[0].children[0].style.height = "200px";
                opt.children[0].children[0].children[1].style.height = "200px";
                opt.children[0].children[0].children[0].style.width = "100%";
                opt.children[0].children[0].children[1].style.width = "100%";
            }
        }
    });
}


for (var lim of optionsSpan) {
    lim.addEventListener("click", function (e) {
        for (var lin of optionsSpan) {
            if (e.target == lin) {
                lin.style.borderBottom = "2px solid #6438b6";
                lin.style.color = "#6438b6";
            }
            else {
                lin.style.borderBottom = "2px solid #fff";
                lin.style.color = "#000";
            }
        }
    });

}


// Index head left section effectly accordion
var willOpen = document.querySelectorAll(".willOpen");
var create = document.querySelectorAll("#create");
var willopenAccorA = document.querySelectorAll(".willOpen a");
var willopenAccorLi = document.querySelectorAll(".willOpen li");

for (var li of willopenAccorLi) {
    li.addEventListener("click", function () {
        headAccorSec();
    });
}


var conts = true;

create[0].addEventListener("click", function () {
    if (conts) {
        willOpen[0].style.display = "block";

        setTimeout(function () {
            willOpen[0].style.opacity = "1";

            for (var el of willopenAccorA) {
                el.style.opacity = 1;
            }

            willOpen[0].style.height = "120px";

        }, 100);
        conts = false;
    }
    else {
        headAccorSec();
    }
});

document.addEventListener("click", function (e) {
    if (e.target != create[0] && e.target != create[0].children[0] && e.target != create[0].children[1] && e.target != create[0].children[2]) {
        headAccorSec();
    }
});

function headAccorSec() {
    willOpen[0].style.opacity = "0";

    for (var el of willopenAccorA) {
        el.style.opacity = 0;
    }
    willOpen[0].style.height = "0px";

    setTimeout(function () {
        willOpen[0].style.display = "none";
    }, 100);

    conts = true;
}


// Index head right section effectly accordion
var willOpenLang = document.querySelectorAll(".willOpenLang");
var lang = document.querySelectorAll(".lang");
var willOpenLangA = document.querySelectorAll(".willOpenLang a");
var willOpenLangLi = document.querySelectorAll(".willOpenLang li");

var contslan = true;

for (var li of willOpenLangLi) {
    li.addEventListener("click", function () {
        headAccorlang();
    });
}


lang[0].addEventListener("click", function () {
    if (contslan) {
        willOpenLang[0].style.display = "block";

        setTimeout(function () {
            willOpenLang[0].style.opacity = "1";

            for (var el of willOpenLangA) {
                el.style.opacity = 1;
            }

            willOpenLang[0].style.height = "123px";

        }, 100);
        contslan = false;
    }
    else {
        headAccorlang();
    }
});

document.addEventListener("click", function (e) {
    if (e.target != lang[0] && e.target != lang[0].children[0] && e.target != lang[0].children[1]) {
        headAccorlang();
    }
});

function headAccorlang() {
    willOpenLang[0].style.opacity = "0";

    for (var el of willOpenLangA) {
        el.style.opacity = 0;
    }
    willOpenLang[0].style.height = "0px";

    setTimeout(function () {
        willOpenLang[0].style.display = "none";
    }, 100);

    contslan = true;
}



// Index head right section effectly USER section accordion
var willOpenUser = document.querySelectorAll(".willOpenUser");
var user = document.querySelectorAll(".user");
var willOpenUserA = document.querySelectorAll(".willOpenUser a");
var willOpenUserI = document.querySelectorAll(".willOpenUser i");
var willOpenUserLi = document.querySelectorAll(".willOpenUser li");

var contsUser = true;

for (var li of willOpenUserLi) {
    li.addEventListener("click", function () {
        headAccorUser();
    });
}


user[0].addEventListener("click", function () {
    if (contsUser) {
        willOpenUser[0].style.display = "block";

        setTimeout(function () {
            willOpenUser[0].style.opacity = "1";

            for (var el of willOpenUserA) {
                el.style.opacity = 1;
            }
            for (var el of willOpenUserI) {
                el.style.opacity = 1;
            }

            willOpenUser[0].style.height = "131px";

        }, 100);
        contsUser = false;
    }
    else {
        headAccorUser();
    }
});

document.addEventListener("click", function (e) {
    if (e.target != user[0] && e.target != user[0].children[0] && e.target != user[0].children[1] && e.target != user[0].children[2]) {
        headAccorUser();
    }
});

function headAccorUser() {
    willOpenUser[0].style.opacity = "0";

    for (var el of willOpenUserA) {
        el.style.opacity = 0;
    }
    for (var el of willOpenUserI) {
        el.style.opacity = 0;
    }
    willOpenUser[0].style.height = "0px";

    setTimeout(function () {
        willOpenUser[0].style.display = "none";
    }, 100);

    contsUser = true;
}

var OpenForIcon = document.querySelectorAll(".OpenForIcon");
var bell = document.querySelectorAll(".bell");
var willOpenBell = document.querySelectorAll(".OpenForIcon li>p");


var contsIcon = true;

for (var li of willOpenUserLi) {
    li.addEventListener("click", function () {
        headAccorIcon();
    });
}

var contsIcon = true;

bell[0].addEventListener("click", function () {

    if (contsIcon) {
        OpenForIcon[0].style.display = "block";

        willOpenBell[0].style.opacity = 1;

        setTimeout(function () {
            OpenForIcon[0].style.opacity = "1";

            OpenForIcon[0].style.height = "335px";

        }, 100);
        contsIcon = false;
    }
    else {
        headAccorIcon();
    }
});

document.addEventListener("click", function (e) {
    if (e.target != bell[0] && e.target != bell[0].children[0]) {
        headAccorIcon();
    }
});

function headAccorIcon() {
    OpenForIcon[0].style.opacity = "0";

    willOpenBell[0].style.opacity = 0;

    OpenForIcon[0].style.height = "0px";

    setTimeout(function () {
        OpenForIcon[0].style.display = "none";
    }, 100);

    contsIcon = true;
}




// date section
var indexCon = document.querySelector(".center .accordion h3");


if (indexCon != null) {
    var indexText = indexCon.innerHTML;
}


var dy = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
if (indexText == "Project Feed") {
    document.getElementById("months").innerHTML = months[dy.getMonth()];



    document.getElementById("day").innerHTML = dy.getDate();


    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.getElementById("weeks").innerHTML = days[dy.getDay()];



    document.getElementById("year").innerHTML = dy.getFullYear();
}

//liCheckbox section
var liCheckbox = document.querySelectorAll(".liCheckBox");
var liIcon = document.querySelectorAll(".right .icon");


for (var i of liIcon) {
    i.addEventListener("click", function (e) {
        this.parentElement.parentElement.nextElementSibling.remove();
        this.parentElement.parentElement.remove();
    });
}


if (indexText == "Project Feed") {
    //Accordion Section with Scale
    var clickNewDiv = document.querySelector("#clickNewDiv");
    var clickOldDiv = document.querySelector("#clickOldDiv");
    var clickOpen = document.querySelector(".clickOpen");

    clickNewDiv.addEventListener("click", function () {
        clickOpen.style.transform = "scale(1, 1)";
    });
    clickOldDiv.addEventListener("click", function () {
        clickOpen.style.transform = "scale(0, 0)";
    });

    //Range Section for Icon Accordion
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    }
}


