window.onload = function () {

    let headTop = document.getElementById("head-top2");
    let footer = document.getElementById("footer2");
    if (headTop === null || footer === null) {
        return;
    }
    headTop.innerHTML = '\n' +
        '    <div class="fa-stack fa-lg fa-3x" style="float: left;color: #03A9F4">\n' +
        '        <i class="fa fa-smile-o fa-stack-2x"></i>\n' +
        '        <i class="fa fa-sun-o fa-stack-2x  fa-spin "></i>\n' +
        '    </div>\n' +
        '\n' +
        '\n' +
        '    <h1>\n' +
        '        OK-UI\n' +
        '    </h1>\n' +
        '    <div class="nav">\n' +
        '        <li><a href="index.html">首页</a></li>\n' +
        '        <li><a href="welcome.html">欢迎页</a></li>\n' +
        '        <li><a href="guide.html">指南</a></li>\n' +
        '        <li><a href="tutorial.html">教程</a></li>\n' +
        '        <li><a href="about.html">关于</a></li>'
    '    </div>';

    footer.innerHTML = '<nav class="footer-nav">\n' +
        '        <a class="footer-nav-item" href="#">文档</a>\n' +
        '        <a class="footer-nav-item" href="#">博客</a>\n' +
        '        <a class="footer-nav-item" href="#">社区</a>\n' +
        '        <a class="footer-nav-item" href="#">应用</a>\n' +
        '        <a class="footer-nav-item" href="#">版本发布</a>\n' +
        '        <a class="footer-nav-item" href="#">行为准则</a>\n' +
        '        <a class="footer-nav-item" href="#">许可</a>\n' +
        '        <a class="footer-nav-item" href="#">安全</a>\n' +
        '        <a class="footer-nav-item" href="#">语言</a>\n' +
        '        <a class="footer-nav-item" href="#">联系我们</a>\n' +
        '    </nav>\n' +
        '    <i class="fa fa-github fa-5x" style="margin-top: 8px"></i>';

}

let codeCarousel = document.getElementById("code-view-carousel");
let codeBtn = document.getElementById("code-view-btn");
let codeGird = document.getElementById("code-view-grid");
let codeSwitch = document.getElementById("code-view-switch");
let codeInput = document.getElementById("code-view-input");
let codeCard = document.getElementById("code-view-card");

function init() {

    codeCard.innerText =
        "    <div class=\"card\">\n" +
        "        <img src=\"./assets/img//qtn.png\" alt=\"\" height=\"50\">\n" +
        "        <p>Hello world!</p>\n" +
        "    </div>";

    codeCarousel.innerText = '<div class="ok-carousel">\n' +
        '    <div class="ok-item">\n' +
        '        <img src="https://dicloud.didistatic.com/static/dicloudpub/www/img/17.7b578d4d5c.png" alt="">\n' +
        '    </div>\n' +
        '    <div class="ok-item">\n' +
        '        <img src="https://dicloud.didistatic.com/static/dicloudpub/www/img/18.d25e3aefa3.png" alt="">\n' +
        '    </div>\n' +
        '    <div class="ok-item">\n' +
        '        <img src="https://dicloud.didistatic.com/static/dicloudpub/www/img/25.c15985c95f.png" alt="">\n' +
        '    </div>\n' +
        '</div>';

    codeGird.innerText = '    <div class="ok-row" style="overflow: hidden">\n' +
        '        <div class="ok-c-3">\n' +
        '            <div class="debug">ok-c-3</div>\n' +
        '        </div>\n' +
        '        <div class="ok-c-3">\n' +
        '            <div class="debug">ok-c-3</div>\n' +
        '        </div>\n' +
        '        <div class="ok-c-1">\n' +
        '            <div class="debug">ok-c-1</div>\n' +
        '        </div>\n' +
        '        <div class="ok-c-1">\n' +
        '            <div class="debug">ok-c-1</div>\n' +
        '        </div>\n' +
        '\n' +
        '\n' +
        '        <div class="ok-c-1">\n' +
        '            <div class="debug">ok-c-1</div>\n' +
        '        </div>\n' +
        '        <div class="ok-c-3">\n' +
        '            <div class="debug">ok-c-3</div>\n' +
        '        </div>\n' +
        '        <div class="ok-c-2">\n' +
        '            <div class="debug">ok-c-2</div>\n' +
        '        </div>\n' +
        '\n' +
        '        <div class="ok-c-2">\n' +
        '            <div class="debug">ok-c-2</div>\n' +
        '        </div>\n' +
        '        <div class="ok-c-2">\n' +
        '            <div class="debug">ok-c-2</div>\n' +
        '        </div>\n' +
        '    </div>\n';
    codeBtn.innerText = '    <button class="btn">默认按钮</button>\n' +
        '    <button class="btn btn-primary">确认按钮</button>\n' +
        '    <button class="btn btn-success">成功按钮</button>\n' +
        '    <button class="btn btn-primary"><i class="fa fa-search"></i>搜索</button>\n' +
        '    <button class="btn btn-primary"><i class="fa fa-comment"></i></button>\n' +
        '    <button class="btn btn-primary"><i class="fa fa-share"></i></button>\n' +
        '    <button class="btn btn-primary"><i class="fa fa-cog"></i></button>'
    codeInput.innerText = '<div class="ok-input-group">\n' +
        '    <i class="fa fa-search"></i>\n' +
        '    <input type="text" placeholder="搜索" class="ok-text">\n' +
        '</div>\n' +
        '<div class="ok-input-group">\n' +
        '    <i class="fa fa-user"></i>\n' +
        '    <input type="text" placeholder="用户名" class="ok-text">\n' +
        '\n' +
        '</div>\n' +
        '<div class="ok-input-group">\n' +
        '    <i class="fa fa-lock"></i>\n' +
        '    <input type="text" placeholder="密码" class="ok-text">\n' +
        '</div>';

    hljs.initHighlightingOnLoad();


    let okitems = document.querySelectorAll(".ok-item");
    let index = 0;
    let imgWidth = 750;


    let time1 = setInterval(function () {


        let i = index++ % okitems.length;
        let p = i * imgWidth;
        okitems[i].style.transform = 'translateX(' + 0 + 'px) scale(1)';
        for (let j = 0; j < okitems.length; j++) {

            let abs = Math.abs(i - j);
            if (j < i) {
                okitems[j].style.transform = 'translateX(' + (abs * imgWidth * -1) + 'px) scale(1)';
            } else if (j > i) {
                okitems[j].style.transform = 'translateX(' + (abs * imgWidth) + 'px) scale(1)';
            }

            if (i === okitems.length) {
                okitems[j].style.transform = 'translateX(' + ((j + 1) * imgWidth) + 'px) scale(1)';
            }
        }


        console.log(i)


    }, 2000, 0);


}

let imgBox = document.getElementById("demo-img");
let boxes = document.querySelectorAll(".box-right>div")
let leftNav = document.querySelectorAll(".box-left a")
let headTop = document.getElementById("head-top");
let postion = 0;
console.log(boxes)

window.addEventListener("scroll", function () {
    var sh = document.documentElement.scrollTop;
    if (Math.abs(sh - postion) < 150) {
        return;
    }

    if (sh - postion > 0) {
        // headTop.style.height = '0px';
        // headTop.style.display = 'none';
        headTop.style.transform = 'translateY(-105px)'
    } else {
        // headTop.style.display = 'block';
        // headTop.style.height = '80px';
        headTop.style.transform = 'translateY(0)'
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

function showCode(e) {

    let p = e.parentElement;
    console.log(p.style.height)


    if (p.style.height === '30px') {
        p.style.height = 'auto';
    } else if (p.style.height === 'auto') {
        p.style.height = '30px';
    } else {
        p.style.height = 'auto';
    }


}


