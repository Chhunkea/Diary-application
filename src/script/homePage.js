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

// CRUD: Add crud
document.addEventListener("DOMContentLoaded", function() {
    const svgButton = document.querySelector('.add-button');
    const targetSection = document.querySelector('.border-box-diary');
    const savedContent = localStorage.getItem('savedContent');
    
    if (savedContent) {
        targetSection.innerHTML = savedContent;
    }

    // Add click event listener to the SVG button
    svgButton.addEventListener('click', function() {
        const htmlToAdd = `
            <section class="border-box-diary">
                <div class="outer-box">
                    <div class="crud">
                        <div class="outside-box">
                            <div class="input-container">
                                <div class="input-with-icon">
                                    <input type="text" id="inputText">
                                    <div class="edit-svg">
                                        <!-- Svg: edit svg -->
                                        <svg class="edit-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 40C2.9 40 1.95867 39.6091 1.176 38.8275C0.393333 38.0458 0.00133333 37.1049 0 36.005V8.03995C0 6.94132 0.392 6.00116 1.176 5.21947C1.96 4.43779 2.90133 4.04628 4 4.04494H21.85L17.85 8.03995H4V36.005H32V22.1223L36 18.1273V36.005C36 37.1036 35.6087 38.0444 34.826 38.8275C34.0433 39.6105 33.1013 40.0013 32 40H4ZM12 28.015V19.5256L30.35 1.1985C30.75 0.799001 31.2 0.499376 31.7 0.299625C32.2 0.0998751 32.7 0 33.2 0C33.7333 0 34.242 0.0998751 34.726 0.299625C35.21 0.499376 35.6513 0.799001 36.05 1.1985L38.85 4.04494C39.2167 4.44444 39.5 4.88589 39.7 5.36929C39.9 5.85268 40 6.3434 40 6.84145C40 7.33949 39.9087 7.83088 39.726 8.31561C39.5433 8.80033 39.2513 9.24111 38.85 9.63795L20.5 28.015H12ZM16 24.02H18.8L30.4 12.4345L29 11.0362L27.55 9.63795L16 21.1735V24.02Z" fill="black"/>
                                        </svg>

                                        <!-- Svg: delete svg -->
                                        <svg onclick="deleteBox(this)" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30 2.22222L27.1429 0H12.8571L10 2.22222H0V6.66667H40V2.22222H30ZM2.85714 35.5556C2.85714 38 5.42857 40 8.57143 40H31.4286C34.5714 40 37.1429 38 37.1429 35.5556V8.88889H2.85714V35.5556ZM8.57143 13.3333H31.4286V35.5556H8.57143V13.3333Z" fill="black"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="second-input">
                                    <input type="text">
                                </div>
                                <div>
                                    <textarea id="text-area"></textarea>                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;

        targetSection.insertAdjacentHTML('beforeend', htmlToAdd);
        updateLocalStorage();
    });

    // CRUD: Save text input

    

    // CRUD: Delete
    window.deleteBox = function(button) {
        const box = button.closest('.border-box-diary');
        if (box) {
            box.remove();
            updateLocalStorage();
        }
    };

    function updateLocalStorage() {
        localStorage.setItem('savedContent', targetSection.innerHTML);
    }
});

// Remove item from local storage
// localStorage.removeItem('savedContent');