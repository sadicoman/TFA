"use strict";

/*----- DarkMode -----*/
// Gestion de localStorage au chargement de la page
let activeTheme = localStorage.getItem("theme");
if(activeTheme !== null){
    setTheme(activeTheme);
}
// Gestion du bouton
let themeTrigger = document.querySelector(".js-theme-trigger")
if(themeTrigger){
    themeTrigger.addEventListener("click", toggleTheme);
}
// La fonction toogleTheme
// permet de définir le theme actif sur la page
function setTheme(theme){
	document.body.setAttribute("data-theme", theme);
	localStorage.setItem("theme", theme);
}
// La fonction toogleTheme
// permet d'alterner entre le mode dark et le mode light
function toggleTheme(){
	let theme = document.body.getAttribute("data-theme");
	if(theme == "dark"){
		setTheme("light");
	}else{
		setTheme("dark");
	}
}

/*-----Burger Menu-----*/
let navButton = document.querySelector(".navBtn");
if(navButton){
    navButton.addEventListener("click", toggleNavigation);
    function toggleNavigation(){
        if(document.body.hasAttribute("data-menu")){
            document.body.removeAttribute("data-menu");
            document.getElementById("navBtn--bergur").style.display = "inherit";
            document.getElementById("navBtn--croix").style.display = "none";
            document.getElementById("switch").style.display = "inherit";
        }else{
            document.body.setAttribute("data-menu", true);
            document.getElementById("navBtn--bergur").style.display = "none";
            document.getElementById("navBtn--croix").style.display = "inherit";
            document.getElementById("switch").style.display = "none";
        }   
    }
    /*-------------burger menu fermeture-----------------*/
    if (window.matchMedia("(max-width: 767px)").matches) {
        let menuStop = document.querySelector(".menu__liste");
        menuStop.addEventListener("click", StopMenu);

        function StopMenu (){
            if(!document.body.hasAttribute("data-menu")){
                document.body.setAttribute("data-menu", false);
            } else {
                document.body.removeAttribute("data-menu");
                document.getElementById("navBtn--croix").style.display = "none";
                document.getElementById("navBtn--bergur").style.display = "inherit";
                document.getElementById("switch").style.display = "inherit";
            }
        }
    }
}


/*----- Copyright -----*/

let date = new Date().getFullYear(); 

document.getElementById("year").innerHTML = date;

