class crudBox extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = ` 
          <!-- Crud: crud function -->
            <div class="custom-div">
                <div class="crud">
                    <div class="diary-task">
                        <span>My diary</span>
                        <button onclick="openModal()" id="btn-add">+</button>
                    </div>
                
                    <!-- Container for the table displaying diary entries -->
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th id="date-th">Date</th>
                                    <th>Feeling 🥰</th>
                                    <th>Description</th>
                                    <th class="action">Edit</th>
                                    <th id="delete-th" class="action">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                
                    <!-- Modal container for adding or editing diary entries -->
                    <div class="modal-container">
                        <div class="modal">
                            <form>
                                <label for="m-date">Date *</label>
                                <input id="m-date" type="date" required />
                    
                                <label for="m-feeling">Feeling 🥰 *</label>
                                <input id="m-feeling" type="text" required />
                    
                                <label for="m-description">Description *</label>
                                <input id="m-description" type="text" required />
                                <button id="btnSave">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('crud-box', crudBox)