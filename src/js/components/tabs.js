export default class Tabs{
    constructor(btnArrow, tabArrow) {
        this.btnArrow = btnArrow
        this.tabArrow = tabArrow
        this.btnArrow.forEach( (elem, index) => {
            elem.addEventListener('click', () => (this.switchTab(index)))
        })
    }
    switchTab(index){
        this.btnArrow.forEach(btn =>{
            btn.classList.remove('current')
        })
        this.btnArrow[index].classList.add('current')
        this.tabArrow.forEach(tab =>{
            tab.classList.remove('current')
        })
        this.tabArrow[index].classList.add('current')
    }
}