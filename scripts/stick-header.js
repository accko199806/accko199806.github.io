let header = document.getElementById("header-sticky");
let progress = document.getElementById("progress-bar");

window.onload = function () {
    setStickyHeader();
}

window.onscroll = function () {
    setStickyHeader();
};

function setStickyHeader() {
    let postHeader = document.getElementById("post-header");
    let postImage = document.getElementById("post-image");
    let element = document.getElementById("contents");
    let positionInfo = element.getBoundingClientRect().height;

    if (postHeader !== null && postImage !== null) {
        let headerHeight = 0;
        headerHeight += postHeader.getBoundingClientRect().height;
        headerHeight += postImage.getBoundingClientRect().height;

        if (window.pageYOffset > postHeader.getBoundingClientRect().height + 64) {
            header.style.top = "0px";
            header.style.opacity = "1";
        } else {
            header.style.top = "-68px";
            header.style.opacity = "0";
        }

        let height = positionInfo + headerHeight - document.documentElement.clientHeight + 64;
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let scrolled = (winScroll / height) * 100;
        progress.style.width = scrolled + "%";
    }
}