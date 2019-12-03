
document.onload = function(){


}

let code1 = document.getElementById("code-view-1");
let code2 = document.getElementById("code-view-2");

function init() {

    code1.innerText =
        "    <div class=\"card\">\n" +
        "        <img src=\"./assets/img//qtn.png\" alt=\"\" height=\"50\">\n" +
        "        <p>Hello world!</p>\n" +
        "    </div>";

    hljs.initHighlightingOnLoad();
}

let imgBox = document.getElementById("demo-img");
let boxes = document.querySelectorAll(".box-right>div")
let leftNav = document.querySelectorAll(".box-left a")
let postion = 0;
console.log(boxes)

window.addEventListener("scroll", function () {
    var sh = document.documentElement.scrollTop;
    if (Math.abs(sh - postion) < 150) {
        return;
    }
    postion = sh;


    let min = 0;
    for (let i = 0; i < boxes.length; i++) {
        var eh = boxes[i].offsetTop;

        if (eh < sh) {

        } else {
            console.log(i)
            min = i;
            break;

        }

    }


    for (let i = 0; i < leftNav.length; i++) leftNav[i].classList.remove("a-select")
    leftNav[min].classList.add("a-select");


    console.log(" ")


});

init();


