export default class headerLanguage{
    constructor(languageBlock) {
        this.languageBlock = languageBlock
        this.languageList = this.languageBlock.querySelector('ul')
        this.languageBlock.querySelector('.current').addEventListener('click', ()=>{this.showBlock()})
    }
    showBlock(){
        let closeBlock = ()=>{
            this.languageList.style.height = `0`
            window.removeEventListener('click', closeBlock)
        }
        let blockHeight = parseInt(window.getComputedStyle(this.languageList).getPropertyValue('height'))
        if (blockHeight === 0){
            this.languageList.style.height = `${this.languageList.scrollHeight}px`
            setTimeout(()=>{
                window.addEventListener('click', closeBlock)
            })
        } else {
            this.languageList.style.height = `0`
        }
    }
}