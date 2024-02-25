const projsLinks = document.querySelectorAll("[data-projsLink]");

projsLinks.forEach((proj) => {
    if(window.location.href.indexOf(proj.getAttribute("id")) == -1) {
        proj.setAttribute("aria-current", "proj")
    }
})