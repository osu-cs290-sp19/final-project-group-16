/*
  Name: Search Bar Functionality
  Description: Be able to search for specific items.
  By: Theresa Mai
*/

/* make the search button clickable and workable */
var allItems = document.getElementsByClassName('items');
var searchButton = document.getElementById('navbar-search-button');
searchButton.addEventListener('click', searchItems);
var a = 0;
function searchItems() {
  /* get text input and all items */
  var inputStr = document.getElementById('navbar-search-input').value;
  inputStr = inputStr.toString().toLowerCase();

  /* if input is not just spaces, show items that match search */
  if (inputStr.trim().length > 0) {
    /* look through each items */
    for (var i = allItems.length - 1; i > -1; i--) {
      var itemText = allItems[i].textContent.toLowerCase(); /* text content of item */
      var strCount = 0;   /* counter for how many characters match with inputStr */
      var totalCount = 0; /* counter for how many matches for an item */

      /* see if there is a match for the item */
      for (var j = 0; j < itemText.length; j++) {
        for (var k = 0; k < inputStr.length; k++) {
          /* if characters match, increment strCount */
          /* if all of the characters match, increment totalCount */
          if (itemText[j + k] == inputStr[k]) {
            strCount++;
            if (strCount == inputStr.length) totalCount++;
          }
          /* if char don't match, reset strCount */
          else {
            strCount = 0;
          }
        }
      }

      /* if totalCount is 0, hide the item */
      if (totalCount == 0) {
        allItems[i].style.display = "none";
      }
      /* if not, show the item */
      else {
          allItems[i].style.display = "flex";
      }
    }
  }
  /* if user gave no input yet clicked search, we show all items again */
  else {
    for (var i = allItems.length - 1; i > -1; i--) {
      allItems[i].style.display = "flex";
    }
  }
}

var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
item1.addEventListener("click", function() {
  a++;
  document.getElementById("one").innerHTML = a;
});

