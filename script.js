//your code here!
// Get the list element
const list = document.getElementById('infi-list');

// Function to check if the user has reached the end of the list
function isEndOfList() {
  const listRect = list.getBoundingClientRect();
  return listRect.bottom <= window.innerHeight;
}

// Function to add more list items to the list
function addMoreItems() {
  // Add 2 more list items
  for (let i = 0; i < 2; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = 'List Item';
    list.appendChild(listItem);
  }
}

// Event listener for scrolling
window.addEventListener('scroll', () => {
  if (isEndOfList()) {
    addMoreItems();
  }
});

// Initial load
addMoreItems();

