class clockBox extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `  
          <div id="body-content">
            <!-- Section: body section -->
            <div class="container">
                <section class="image-container">
                    <!-- Clock and CRUD container -->
                    <div class="hero">
                        <!-- Clock -->
                        <div class="clock">
                            <span id="hrs">00</span>
                            <span>:</span>
                            <span id="mints">00</span>
                            <span>:</span>
                            <span id="sec">00</span>
                        </div>

                        <!--  Diary: diary add new task -->
                        <div class="diary-button">
                            <div class="diary-text">
                                <div class="big-box">
                                    <div class="inner-box">
                                        <h2>Diary App</h2>
                                        <div class="add-task">
                                            <h2>ADD NEW TASK 
                                                <svg class="add-button" width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 0C8.95437 0 0 8.95437 0 20C0 31.0462 8.95437 40 20 40C31.0462 40 40 31.0462 40 20C40 8.95437 31.0462 0 20 0ZM20 37.5394C10.3506 37.5394 2.5 29.6494 2.5 19.9999C2.5 10.3505 10.3506 2.49992 20 2.49992C29.6494 2.49992 37.5 10.3506 37.5 19.9999C37.5 29.6493 29.6494 37.5394 20 37.5394ZM28.75 18.75H21.25V11.25C21.25 10.56 20.69 10 20 10C19.31 10 18.75 10.56 18.75 11.25V18.75H11.25C10.56 18.75 10 19.31 10 20C10 20.69 10.56 21.25 11.25 21.25H18.75V28.75C18.75 29.44 19.31 30 20 30C20.69 30 21.25 29.44 21.25 28.75V21.25H28.75C29.44 21.25 30 20.69 30 20C30 19.31 29.44 18.75 28.75 18.75Z" fill="white"/>
                                                </svg>                                         
                                            </h2>
                                        </div>
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