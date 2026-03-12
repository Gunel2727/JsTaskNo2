let buttons=document.querySelectorAll(".btn-primary");

for (let i = 0; i < buttons.length; i++) {
    const button = buttons [i];
    button.addEventListener("click",function(ev){
        ev.preventDefault();
        console.log(this.parentNode.firstElementChild.innerText);
    })
}