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
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
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
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var item5 = document.getElementById("item5");
var item6 = document.getElementById("item6");
var item7 = document.getElementById("item7");
var item8 = document.getElementById("item8");
var item9 = document.getElementById("item9");

item1.addEventListener("click", function() {
  a++;
  document.getElementById("one").innerHTML = a;
  document.getElementById("price1").innerHTML = parseFloat(Math.round(a * 49.99)).toFixed(2);
});

subtracta.addEventListener("click", function() {
  a--;
  if(a<=-1)
    a= 0;
  document.getElementById("one").innerHTML = a;
  document.getElementById("price1").innerHTML = a * 49.99;

});

adda.addEventListener("click", function() {
  a++;
  document.getElementById("one").innerHTML = a;
  document.getElementById("price1").innerHTML = a * 49.99;
});

item2.addEventListener("click", function() {
  b++;
  document.getElementById("two").innerHTML = b;
  document.getElementById("price2").innerHTML = b * 1300;
});

subtractb.addEventListener("click", function() {
  b--
  if(b<=-1)
    b= 0;
  document.getElementById("two").innerHTML = b;
  document.getElementById("price2").innerHTML = b * 1300;
});

addb.addEventListener("click", function() {
  b++;
  document.getElementById("two").innerHTML = b;
  document.getElementById("price2").innerHTML = b * 1300;
});

item3.addEventListener("click", function() {
  c++;
  document.getElementById("three").innerHTML = c;
  document.getElementById("price3").innerHTML = c * 480;
});

subtractc.addEventListener("click", function() {
  c--;
  if(c<=-1)
    c= 0;
  document.getElementById("three").innerHTML = c;
  document.getElementById("price3").innerHTML = c * 480;
});

addc.addEventListener("click", function() {
  c++;
  document.getElementById("three").innerHTML = c;
  document.getElementById("price3").innerHTML = c * 480;
});

item4.addEventListener("click", function() {
  d++;
  document.getElementById("four").innerHTML = d;
  document.getElementById("price4").innerHTML = d * 1480;
});

subtractd.addEventListener("click", function() {
  d--;
  if(d<=-1)
    d= 0;
  document.getElementById("four").innerHTML = d;
  document.getElementById("price4").innerHTML = d * 1480;
});

addd.addEventListener("click", function() {
  d++;
  document.getElementById("four").innerHTML = d;
  document.getElementById("price4").innerHTML = d * 1480;
});

item5.addEventListener("click", function() {
  e++;
  document.getElementById("five").innerHTML = e;
  document.getElementById("price5").innerHTML = e * 1880;
});

subtracte.addEventListener("click", function() {
  e--;
  document.getElementById("five").innerHTML = e;
  document.getElementById("price5").innerHTML = e * 1880;
});

adde.addEventListener("click", function() {
  e++;
  document.getElementById("five").innerHTML = e;
  document.getElementById("price5").innerHTML = e * 1880;
});

item6.addEventListener("click", function() {
  f++;
  document.getElementById("six").innerHTML = f;
  document.getElementById("price6").innerHTML = f * 790;
});

subtractf.addEventListener("click", function() {
  f--;
  if(f<=-1)
    f= 0;
  document.getElementById("six").innerHTML = f;
  document.getElementById("price6").innerHTML = f * 790;
});

addf.addEventListener("click", function() {
  f++;
  document.getElementById("six").innerHTML = f;
  document.getElementById("price6").innerHTML = f * 790;
});

item7.addEventListener("click", function() {
  g++;
  document.getElementById("seven").innerHTML = g;
  document.getElementById("price7").innerHTML = g * 30;
});

subtractg.addEventListener("click", function() {
  g--;
  if(g<=-1)
    g= 0;
  document.getElementById("seven").innerHTML = g;
  document.getElementById("price7").innerHTML = g * 30;
});

addg.addEventListener("click", function() {
  g++;
  document.getElementById("seven").innerHTML = g;
  document.getElementById("price7").innerHTML = g * 30;
});

item8.addEventListener("click", function() {
  h++;
  document.getElementById("eight").innerHTML = h;
  document.getElementById("price8").innerHTML = h * 29;
});

subtracth.addEventListener("click", function() {
  h--;
  if(h<=-1)
    h= 0;
  document.getElementById("eight").innerHTML = h;
  document.getElementById("price8").innerHTML = h * 29;
});

addh.addEventListener("click", function() {
  h++;
  document.getElementById("eight").innerHTML = h;
  document.getElementById("price8").innerHTML = h * 29;
});

item9.addEventListener("click", function() {
  i++;
  document.getElementById("nine").innerHTML = i;
  document.getElementById("price9").innerHTML = i * 300;
});

subtracti.addEventListener("click", function() {
  i--;
  if(i<=-1)
    i= 0;
  document.getElementById("nine").innerHTML = i;
  document.getElementById("price9").innerHTML = i * 300;
});

addi.addEventListener("click", function() {
  i++;
  document.getElementById("nine").innerHTML = i;
  document.getElementById("price9").innerHTML = i * 300;
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("list-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}