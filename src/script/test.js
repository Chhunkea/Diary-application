const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const sDate = document.querySelector('#date');
const sFeeling = document.querySelector('#feeling');
const sDescription = document.querySelector('#description');
const btnSave = document.querySelector('#btnSave');

let items;
let id;

function openModal(edit = false, index = 0) {
  modal.classList.add('active');

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active');
    }
  };

  if (edit) {
    sDate.value = items[index].name;
    sFeeling.value = items[index].role;
    sDescription.value = items[index].salary;
    id = index;
  } else {
    sDate.value = '';
    sFeeling.value = '';
    sDescription.value = '';
  }
}

function editItem(index) {
  openModal(true, index);
}

function deleteItem(index) {
  items.splice(index, 1);
  setItemsToStorage();
  loadItems();
}

function insertItem(item, index) {
  let tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${item.name}</td>
    <td>${item.role}</td>
    <td>$ ${item.salary}</td>
    <td class="action">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="action">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `;
  tbody.appendChild(tr);
}

btnSave.onclick = e => {
  if (sDate.value === '' || sFeeling.value === '' || sDescription.value === '') {
    return;
  }

  e.preventDefault();

  if (id !== undefined) {
    items[id].name = sDate.value;
    items[id].role = sFeeling.value;
    items[id].salary = sDescription.value;
  } else {
    items.push({'name': sDate.value, 'role': sFeeling.value, 'salary': sDescription.value});
  }

  setItemsToStorage();

  modal.classList.remove('active');
  loadItems();
  id = undefined;
};

function loadItems() {
  items = getItemsFromStorage();
  tbody.innerHTML = '';
  items.forEach((item, index) => {
    insertItem(item, index);
  });
}

const getItemsFromStorage = () => JSON.parse(localStorage.getItem('emp_db')) ?? [];
const setItemsToStorage = () => localStorage.setItem('emp_db', JSON.stringify(items));

loadItems();
