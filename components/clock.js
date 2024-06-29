class clockBox extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `  
         <div id="body-content">
            <div class="container">
                <section class="image-container">

                    <!-- Div: Clock -->
                    <div class="hero">
                        <div class="clock">
                            <span id="hrs">00</span>
                            <span>:</span>
                            <span id="mints">00</span>
                            <span>:</span>
                            <span id="sec">00</span>
                        </div>

                        <!--  Diary: diary task -->
                        <div class="diary-button">
                            <div class="diary-text">
                                <div class="big-box">
                                    <div class="inner-box">
                                        <h2>Diary App</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `
    }
}

customElements.define('clock-digital', clockBox);