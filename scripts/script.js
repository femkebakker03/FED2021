// JavaScript Document
var button = document.querySelector(".button4 button")
var menuButton = document.querySelector(".nav svg:first-of-type")
var menu = document.querySelector(".nav > section")

// function om het hamburger menu te openen//
function menuOpen() {
    menu.classList.toggle("menuOpen")
}

menuButton.addEventListener("click", menuOpen)
menu.addEventListener("click", menuOpen)

// function voor als je op de button drukt naar boven te gaan //
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

button.addEventListener("click", topFunction)