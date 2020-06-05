window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    // navbar toggle script
    const navBtn = document.querySelector(".nav__icon");

    navBtn.addEventListener("click", () => {
        const navbar = navBtn.nextElementSibling;

        navBtn.classList.toggle("open");
        navbar.classList.toggle("open");
    });

    //data base of years for timeline
    const yearsDB = {
        years: ["today", 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012],
    };

    const dataCircle = document.querySelector(".data__circle");

    //create years list in html
    const createYearsList = (years, parent) => {
        parent.innerHTML = "";

        years.forEach((year) => {
            parent.innerHTML += `
            <span>${year}
            </span>
            `;
        });
    };

    createYearsList(yearsDB.years, dataCircle);

    // create timeline wheel
    const timeYears = dataCircle.querySelectorAll("span"),
        dataWheel = document.querySelector(".data__wheel"),
        dataDescription = document.querySelector(".data__description"),
        generalYear = dataDescription.querySelector(".year");

    timeYears[Math.floor(timeYears.length / 2)].classList.add("active");

    let textYear = timeYears[Math.floor(timeYears.length / 2)].textContent;
    generalYear.textContent = textYear;

    let n = 0;
    let y = Math.floor(timeYears.length / 2);

    const resizeText = (size) => {
        if (textYear.length > 17) {
            generalYear.setAttribute(
                "style",
                `font-size: ${size}px; letter-spacing: 18px`
            );
        } else if (textYear.length <= 17) {
            generalYear.removeAttribute("style");
        }
    };

    const rotateWheel = (degNum, timeItem) => {
        dataCircle.setAttribute(
            "style",
            `transform: translateY(-30px) rotate(${degNum * 15}deg)`
        );
        for (let i = 0; i < timeYears.length; i++) {
            timeYears[i].classList.remove("active");
        }
        timeYears[timeItem].classList.add("active");
        textYear = timeYears[timeItem].textContent;
        if (
            document.documentElement.clientWidth >= 768 &&
            document.documentElement.clientWidth <= 1344
        ) {
            resizeText(90);
        }
        generalYear.textContent = textYear;
    };

    let event = null;

    if (document.documentElement.clientWidth < 768) {
        dataWheel.addEventListener("touchstart", function (e) {
            event = e;
        });
        dataWheel.addEventListener("touchmove", function (e) {
            let coordOld = Math.floor(
                    -90 +
                        (e.touches[0].pageX / 10 - event.touches[0].pageX / 10)
                ),
                coordNew = Math.floor(
                    coordOld +
                        (e.touches[0].pageX / 10 - event.touches[0].pageX / 10)
                );

            if (event) {
                function rotateBox(deg, i) {
                    dataCircle.setAttribute(
                        "style",
                        `transform: rotate(${deg}deg)`
                    );
                    for (let y = 0; y < timeYears.length; y++) {
                        timeYears[y].classList.remove("active");
                    }
                    timeYears[i].classList.add("active");
                    textYear = timeYears[i].textContent;
                    generalYear.textContent = textYear;
                }

                if (coordNew <= -30 && coordNew >= -37) {
                    coordNew = -30;
                    rotateBox(coordNew, 0);
                } else if (coordNew <= -38 && coordNew >= -52) {
                    coordNew = -45;
                    rotateBox(coordNew, 1);
                } else if (coordNew <= -53 && coordNew >= -67) {
                    coordNew = -60;
                    rotateBox(coordNew, 2);
                } else if (coordNew <= -68 && coordNew >= -82) {
                    coordNew = -75;
                    rotateBox(coordNew, 3);
                } else if (coordNew <= -83 && coordNew >= -97) {
                    coordNew = -90;
                    rotateBox(coordNew, 4);
                } else if (coordNew <= -98 && coordNew >= -112) {
                    coordNew = -105;
                    rotateBox(coordNew, 5);
                } else if (coordNew <= -113 && coordNew >= -127) {
                    coordNew = -120;
                    rotateBox(coordNew, 6);
                } else if (coordNew <= -128 && coordNew >= -142) {
                    coordNew = -135;
                    rotateBox(coordNew, 7);
                } else if (coordNew <= -143 && coordNew >= -150) {
                    coordNew = -150;
                    rotateBox(coordNew, 8);
                }
            }
        });
        dataWheel.addEventListener("touched", function (e) {
            event = null;
        });
    }

    if (document.documentElement.clientWidth >= 768) {
        timeYears.forEach((span, i) => {
            span.addEventListener("click", () => {
                rotateWheel(-i + 4, i);
            });
        });
    }

    if (document.documentElement.clientWidth >= 1345) {
        dataWheel.addEventListener("mouseenter", () => {
            document.body.setAttribute(
                "style",
                "overflow: hidden; padding-right: 18px"
            );
        });

        dataWheel.addEventListener("mouseleave", () => {
            document.body.removeAttribute("style");
        });

        dataWheel.addEventListener("wheel", (e) => {
            if (e.deltaY < 0) {
                n <= -4 ? (n = -4) : n--;
                y >= timeYears.length - 1 ? (y = timeYears.length - 1) : y++;
            } else if (e.deltaY > 0) {
                n >= 4 ? (n = 4) : n++;
                y <= 0 ? (y = 0) : y--;
            }

            rotateWheel(n, y);
        });
    }
});
