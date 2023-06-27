// Wait for the document to finish loading
document.addEventListener("DOMContentLoaded", function() {
  // Get the list element
  var list = document.getElementById("infi-list");

  // Set the number of items to be added when reaching the end of the list
  var itemsToAdd = 2;

  // Function to check if the user has reached the end of the list
  function isEndOfList() {
    var lastItem = list.lastElementChild;
    var lastItemOffset = lastItem.offsetTop + lastItem.clientHeight;
    var pageOffset = window.pageYOffset + window.innerHeight;
    return pageOffset > lastItemOffset;
  }

  // Function to add more list items
  function addMoreItems() {
    for (var i = 0; i < itemsToAdd; i++) {
      var listItem = document.createElement("li");
      listItem.textContent = "List Item";
      list.appendChild(listItem);
    }
  }

  // Event listener for scrolling
  window.addEventListener("scroll", function() {
    if (isEndOfList()) {
      addMoreItems();
    }
  });

  // Intersection Observer for scrolling
  var options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  };

  var observer = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
      addMoreItems();
    }
  }, options);

  // Observe the last item
  var lastItem = list.lastElementChild;
  observer.observe(lastItem);

  // Add initial list items
  addMoreItems();
});
