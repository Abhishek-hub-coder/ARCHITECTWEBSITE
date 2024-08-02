window.onload = () => {
    setTimeout(() => {
        document.querySelector("body").classList.add("display");
    }, 4000);
};



document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
});



document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "unset";
    }, 100000);

});


setTimeout(function () {
    document.querySelector('.header').classList.add('delayed');
}, 4000)




























