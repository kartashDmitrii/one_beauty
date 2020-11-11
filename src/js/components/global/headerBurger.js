export default class HeaderBurger{
    constructor(burger, popup) {
        this.burger = burger
        this.popup = popup
        this.burger.addEventListener('click', ()=>{this.burgerFunction()})
        this.popup.querySelector('.close').addEventListener('click', ()=>{this.closeFunction()})
    }
    burgerFunction(){
        this.popup.classList.add('active')
        document.body.classList.add('hidden')
    }
    closeFunction(){
        this.popup.classList.remove('active')
        document.body.classList.remove('hidden')
    }
}