// Define a variable to store the current state of the list
let items = [];

// Define a function to add an item to the list
function addItem(item) {
  items.push(item);
}

// Define a function to delete an item from the list
function deleteItem(index) {
  items.splice(index, 1);
}

// Define a function to handle user input
function handleInput() {
  // Get the input value from the DOM
  const input = document.getElementById('input').value;
  
  // If the input value is not empty, add the item to the list and update the view
  if (input !== '') {
    addItem(input);
    updateView();
  }
}

// Define a function to update the view with the current state of the list
function updateView() {
  // Get the list element from the DOM
  const list = document.getElementById('list');
  
  // Clear the list
  list.innerHTML = '';
  
  // Loop through the items and create a new list item element for each one
  items.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    
    // Add an event listener to the list item element to handle deletion
    listItem.addEventListener('click', () => {
      deleteItem(index);
      updateView();
    });
    
    // Add the list item element to the list
    list.appendChild(listItem);
  });
}

// Add an event listener to the input element to handle user input
document.getElementById('input').addEventListener('keyup', handleInput);

// Update the initial view
updateView();
