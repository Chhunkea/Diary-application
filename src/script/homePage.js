// Time text
class TimeElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let now = new Date();
        let hour = now.getHours();
        let greeting = '';
        
        // Determine the appropriate greeting based on the current hour
        if (hour < 12) greeting = "Good morning!"; 
        else if (hour >= 12 && hour < 18)greeting = "Good afternoon!";
        else if (hour >= 18 && hour < 21) greeting = "Good evening!";
        else greeting = "Good night!";

        this.innerHTML = `<span>${greeting}</span>`;
    }
}
// Define a custom element 'time-text' to use in html folder
customElements.define('time-text', TimeElement);

// Clock
document.addEventListener('DOMContentLoaded', function() {
    let hrsElement = document.getElementById("hrs");
    let mintsElement = document.getElementById("mints");
    let secElement = document.getElementById("sec");

    // Function to update time display
    function updateTime() {
        let date = new Date();
        let hrs = date.getHours();
        let mints = date.getMinutes();
        let sec = date.getSeconds();

        // Display hours, minutes, and seconds with leading zeros if less than 10
        hrsElement.textContent = hrs < 10 ? "0" + hrs : hrs;
        mintsElement.textContent = mints < 10 ? "0" + mints : mints;
        secElement.textContent = sec < 10 ? "0" + sec : sec;
    }

    updateTime();
    setInterval(updateTime);
});


// Crud Function
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal-container');
    const tbody = document.querySelector('tbody');
    const mDate = document.querySelector('#m-date');
    const mFeeling = document.querySelector('#m-feeling');
    const mDescription = document.querySelector('#m-description');
    const btnSave = document.querySelector('#btnSave');
    const btnAdd = document.querySelector('#btn-add');
  
    // Array to hold diary items
    // Variable to track the index of the item being edited
    let items;
    let id;
  
    // Function to open modal for adding or editing items
    function openModal(edit = false, index = 0) {
      modal.classList.add('active');
  
      //  modal close on click outside modal content
      modal.onclick = e => {
        if (e.target.classmDate.indexOf('modal-container') !== -1) {
          modal.classList.remove('active');
        }
      };
  
      // modal file for editing 
      // else clear modal fields for adding new item
      if (edit) {
        mDate.value = items[index].date;
        mFeeling.value = items[index].feeling;
        mDescription.value = items[index].description;
        id = index;
      } else {
        mDate.value = '';
        mFeeling.value = '';
        mDescription.value = '';
      }
    }
  
    // Function to initiate editing of an item
    function editItem(index) {
      openModal(true, index);
    }
  
    // Function to delete an item
    function deleteItem(index) {
      items.splice(index, 1);
      setItemsInLocalStorage();
      loadItems();
    }
  
    // Function to insert an item into the table
    function insertItem(item, index) {
      let tr = document.createElement('tr');
  
      tr.innerHTML = `
        <td>${item.date}</td>
        <td>${item.feeling}</td>
        <td class = 'description'>$ ${item.description}</td>
        <td class="action">
          <button class="edit-btn" data-index="${index}"><i class='bx bx-edit'></i></button>
        </td>
        <td class="action">
          <button class="delete-btn" data-index="${index}"><i class='bx bx-trash'></i></button>
        </td>
      `;
      tbody.appendChild(tr);
    }
  
    // Handler for save button
    btnSave.onclick = e => {
      // Ensure all fields are filled before proceeding
      if (mDate.value === '' || mFeeling.value === '' || mDescription.value === '') {
        return;
      }
  
      e.preventDefault();
  
      // Update or add item based on whether id is defined
      if (id !== undefined) {
        items[id].date = mDate.value;
        items[id].feeling = mFeeling.value;
        items[id].description = mDescription.value;
      } else {
        items.push({ 'date': mDate.value, 'feeling': mFeeling.value, 'description': mDescription.value });
      }
  
      // Update local storage
      // Close modal
      // Reload items in the table
      // Reset id after saving
      setItemsInLocalStorage();   
      modal.classList.remove('active'); 
      loadItems();
      id = undefined;
    };
  
    // Function to load items from local storage into the table
    function loadItems() {
      items = getItemsFromLocalStorage();
      tbody.innerHTML = '';
      items.forEach((item, index) => {
        // Insert each item into the table
        insertItem(item, index);
      });

      // Event listeners for edit and delete buttons
      document.querySelectorAll('.edit-btn').forEach(button => {
        button.onclick = () => {
          editItem(button.getAttribute('data-index'));
        };
      });

      // Handle delete button click
      document.querySelectorAll('.delete-btn').forEach(button => {
        button.onclick = () => {
          deleteItem(button.getAttribute('data-index'));
        };
      });
    }
  
    // Function that get items from local storage
    const getItemsFromLocalStorage = () => JSON.parse(localStorage.getItem('diaryElement')) ?? [];

    // Function to store items in local storage
    const setItemsInLocalStorage = () => localStorage.setItem('diaryElement', JSON.stringify(items));
  
    // Add event listener to the add button
    btnAdd.addEventListener('click', () => openModal());
  
    // Initial load of items
    loadItems();
  });
  