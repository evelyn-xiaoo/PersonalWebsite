const projsLinks = document.querySelectorAll("[data-projsLink]");

projsLinks.forEach((proj) => {
    if(proj.getAttribute("id") === window.location.hash) {
        proj.setAttribute("aria-current", "proj")
    }
})