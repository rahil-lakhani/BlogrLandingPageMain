const introduction = document.querySelector(".introduction");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const navMenuController = document.querySelector(".nav_menu_controller");
const navMenu = document.querySelector(".nav_menu");
const navMenuControllerImage = document.querySelectorAll(".nav_menu_controller img");
const navMainLinkContainer = document.querySelectorAll(".nav_main_link_container");
const navSecondaryMenu = document.querySelectorAll(".nav_secondary_menu");


// Nav Menu Controller Behaviour

navMenuController.addEventListener("click", () => {

    navMenu.classList.toggle("nav_menu_visibility");

    for (let i = 0; i < navMenuControllerImage.length; i++) {
        navMenuControllerImage[i].classList.toggle("invisible");
    }

    subMenuClose();

});

introduction.addEventListener("click", () => {
    closeMenu();
    subMenuClose();
})

main.addEventListener("click", () => {
    closeMenu();
    subMenuClose();
})

footer.addEventListener("click", () => {
    closeMenu();
    subMenuClose();
})

// Nav Sub-Menu Controller Behaviour

for (let i = 0; i < navMainLinkContainer.length; i++) {

    navMainLinkContainer[i].addEventListener("click", function () {

        const subMenu = this.lastElementChild;

        if (subMenu.classList.contains("nav_secondary_menu_visibility")) {

            for (let j = 0; j < navMainLinkContainer.length; j++) {
                navMainLinkContainer[j].lastElementChild.classList.add("nav_secondary_menu_visibility");
                navMainLinkContainer[j].children[0].classList.remove("active_nav_menu");
                navMainLinkContainer[j].children[1].classList.remove("rotate");
                navMainLinkContainer[j].children[2].classList.remove("rotate");
                navMainLinkContainer[j].children[2].classList.add("active_light_arrow");
            }

            subMenu.classList.remove("nav_secondary_menu_visibility");
            this.children[0].classList.add("active_nav_menu");
            this.children[1].classList.add("rotate");
            this.children[2].classList.add("rotate");
            this.children[2].classList.remove("active_light_arrow");

            setTimeout(()=>{
                subMenu.classList.add("nav_secondary_menu_visibility");
                this.children[0].classList.remove("active_nav_menu");
                this.children[1].classList.remove("rotate");
                this.children[2].classList.remove("rotate");
                this.children[2].classList.add("active_light_arrow");
            }, 6000);

        } else {

            subMenu.classList.add("nav_secondary_menu_visibility");
            this.children[0].classList.remove("active_nav_menu");
            this.children[1].classList.remove("rotate");
            this.children[2].classList.remove("rotate");
            this.children[2].classList.add("active_light_arrow");

        }

    });

}

// Menu Close Functions

function closeMenu() {

    if (navMenu.classList.contains("nav_menu_visibility") === false) {

        navMenu.classList.add("nav_menu_visibility");

        for (let i = 0; i < navMenuControllerImage.length; i++) {
            navMenuControllerImage[i].classList.toggle("invisible");
        }

    }
}

function subMenuClose() {

    for (let j = 0; j < navSecondaryMenu.length; j++) {
        if (navSecondaryMenu[j].classList.contains("nav_secondary_menu_visibility") === false) {
            navSecondaryMenu[j].classList.add("nav_secondary_menu_visibility")
            navMainLinkContainer[j].children[0].classList.remove("active_nav_menu");
            navMainLinkContainer[j].children[1].classList.remove("rotate");
            navMainLinkContainer[j].children[2].classList.remove("rotate");
            navMainLinkContainer[j].children[2].classList.add("active_light_arrow");
        }
    }
}

