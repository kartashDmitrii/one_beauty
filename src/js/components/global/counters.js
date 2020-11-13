export default class Counters {
    constructor(elem, delay) {
        this.elem = elem;
        this.delay = delay;
        this.count = parseInt(this.elem.innerText);
        this.newNum = 0;
        this.wordParts = this.elem.innerText.split(/[a-zA-Z]+|[0-9]+/);
        this.interval = setInterval( ()=> {
            this.newNum += this.count / this.delay;
            this.elem.innerText = `${this.wordParts[0]}${Math.round(this.newNum)}${this.wordParts[1]}`
            if (this.newNum >= this.count){
                clearInterval(this.interval)
            }
        }, this.count / this.delay);
    }
}