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

// Clock
document.addEventListener('DOMContentLoaded', function() {
    let hrsElement = document.getElementById("hrs");
    let mintsElement = document.getElementById("mints");
    let secElement = document.getElementById("sec");

    function updateTime() {
        let date = new Date();
        let hrs = date.getHours();
        let mints = date.getMinutes();
        let sec = date.getSeconds();

        hrsElement.textContent = hrs < 10 ? "0" + hrs : hrs;
        mintsElement.textContent = mints < 10 ? "0" + mints : mints;
        secElement.textContent = sec < 10 ? "0" + sec : sec;
    }

    updateTime();
    setInterval(updateTime);
});

// CRUD
