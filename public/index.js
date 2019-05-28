/* make the search button clickable and workable */
var searchButton = document.getElementById('navbar-search-button');
searchButton.addEventListener('click', searchPost);

function searchPost() {
  /* get text input and all posts */
  var inputStr = document.getElementById('navbar-search-input').value;
  var allPosts = document.getElementsByClassName('n/a');

  /* if input is not just spaces, show posts that match search */
  if (inputStr.trim().length > 0) {
    /* look through each post */
    for (var i = allPosts.length - 1; i > -1; i--) {
      var postText = allPosts[i].textContent; /* text content of post */
      var strCount = 0;   /* counter for how many characters match with inputStr */
      var totalCount = 0; /* counter for how many matches for a post */

      /* see if there is a match in the post */
      for (var j = 0; j < postText.length; j++) {
        for (var k = 0; k < inputStr.length; k++) {
          /* if characters match, increment strCount */
          /* if all of the characters match, increment totalCount */
          if (postText[j + k] == inputStr[k]) {
            strCount++;
            if (strCount == inputStr.length) totalCount++;
          }
          /* if char don't match, reset strCount */
          else {
            strCount = 0;
          }
        }
      }

      /* if totalCount is -, remove the post */
      if (totalCount == 0) {
        var removePost = allPosts[i];
        removePost.remove();
      }
    }
  }
}
