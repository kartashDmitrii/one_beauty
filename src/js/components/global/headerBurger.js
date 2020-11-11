export default class HeaderBurger{
    constructor(burger, popup, close) {
        this.burger = burger;
        this.flag = Array.isArray(popup);
        this.popup = popup;
        this.close = close;
        this.burger.addEventListener('click', ()=>{this.burgerFunction()});
        this.close.addEventListener('click', ()=>{this.closeFunction()})
    }
    burgerFunction(){
        if (this.flag){
            this.popup.forEach( elem => {
              elem.classList.add('active')
            })
        } else {
            this.popup.classList.add('active')
        }
        document.body.classList.add('hidden')
    }
    closeFunction(){
        if (this.flag){
            this.popup.forEach( elem => {
                elem.classList.remove('active')
            })
        } else {
            this.popup.classList.remove('active')
        }
        document.body.classList.remove('hidden')
    }
}