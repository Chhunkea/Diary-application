// Time text
class TimeElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let now = new Date();
        let hour = now.getHours();
        let greeting = '';
        
        if (hour < 12) greeting = "Good morning!"; 
        else if (hour >= 12 && hour < 18)greeting = "Good afternoon!";
        else if (hour >= 18 && hour < 21) greeting = "Good evening!";
        else greeting = "Good night!";

        this.innerHTML = `<span>${greeting}</span>`;
    }
}

customElements.define('time-text', TimeElement);