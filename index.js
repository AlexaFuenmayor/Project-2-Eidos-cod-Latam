let buttonsNavigation = document.querySelectorAll('.navegation')
let classButton = document.getElementById("contact-button")
console.log(buttonsNavigation[0]);

buttonsNavigation.forEach(function(buttons){
    buttons.addEventListener('click', function(e){
        const home = document.querySelector(".active")
        home.classList.remove("active")
        e.target.classList.add("active")
    })
})