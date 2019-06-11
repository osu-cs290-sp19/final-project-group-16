/*
  Name: Search Bar Functionality
  Description: Be able to search for specific items.
  By: Theresa Mai
*/

/*
  Name: Cart calculate (ADD/SUB)
  Description: Set up the item cart calculate
  By: Susan
*/

/*
  Name: PLUS CART FROM
  Description: add the item from the image
  By: Jaegeun
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

subtracta.addEventListener("click", function() {
  a--;
  if(a<=0) {
    a= 0;
    li1.style.display = "none";
  }
  document.getElementById("one").innerHTML = a;
  document.getElementById("price1").innerHTML = parseFloat(Math.round(a * 50)).toFixed(2);
  document.getElementById("totalp").innerHTML = (a*50) + (b*1300) + (c*480) + (d*1480) + (e*1880) + (f*790) + (g*30) + (h*29) + (i*300);

});

adda.addEventListener("click", function() {
  a++;
  document.getElementById("one").innerHTML = a;
  document.getElementById("price1").innerHTML = parseFloat(Math.round(a * 50)).toFixed(2);
  document.getElementById("totalp").innerHTML = (a*50) + (b*1300) + (c*480) + (d*1480) + (e*1880) + (f*790) + (g*30) + (h*29) + (i*300);
});

subtractb.addEventListener("click", function() {
  b--
  if(b<=0) {
    b= 0;
    li2.style.display = "none";
  }
  document.getElementById("two").innerHTML = b;
  document.getElementById("price2").innerHTML = parseFloat(Math.round(b * 1300)).toFixed(2);
  document.getElementById("totalp").innerHTML = (a*50) + (b*1300) + (c*480) + (d*1480) + (e*1880) + (f*790) + (g*30) + (h*29) + (i*300);
});

addb.addEventListener("click", function() {
  b++;
  document.getElementById("two").innerHTML = b;
  document.getElementById("price2").innerHTML = parseFloat(Math.round(b * 1300)).toFixed(2);
  document.getElementById("totalp").innerHTML = (a*50) + (b*1300) + (c*480) + (d*1480) + (e*1880) + (f*790) + (g*30) + (h*29) + (i*300);
});

cartb.addEventListener("click", function() {
  b++;
  document.getElementById("two").innerHTML = b;
  document.getElementById("price2").innerHTML = parseFloat(Math.round(b * 1300)).toFixed(2);
  alert("Add the 'Men's Black Metal Mix Wool Jumper' to the cart.");
});

subtractc.addEventListener("click", function() {
  c--;
  if(c<=0) {
    c= 0;
    li3.style.display = "none";
  }
  document.getElementById("three").innerHTML = c;
  document.getElementById("price3").innerHTML = parseFloat(Math.round(c * 480)).toFixed(2);
  document.getElementById("totalp").innerHTML = (a*50) + (b*1300) + (c*480) + (d*1480) + (e*1880) + (f*790) + (g*30) + (h*29) + (i*300);
});

addc.addEventListener("click", function() {
  c++;
  document.getElementById("three").innerHTML = c;
  document.getElementById("price3").innerHTML = parseFloat(Math.round(c * 480)).toFixed(2);
  document.getElementById("totalp").innerHTML = (a*50) + (b*1300) + (c*480) + (d*1480) + (e*1880) + (f*790) + (g*30) + (h*29) + (i*300);
});

cartc.addEventListener("click", function() {
  c++;
  document.getElementById("three").innerHTML = c;
  document.getElementById("price3").innerHTML = parseFloat(Math.round(c * 480)).toFixed(2);
  alert("Add the 'Washed T-shirt with Gucci Logo' to the cart.");
});

subtractd.addEventListener("click", function() {
  d--;
  if(d<=0) {
    d= 0;
    li4.style.display = "none";
  }
  document.getElementById("four").innerHTML = d;
  document.getElementById("price4").innerHTML = parseFloat(Math.round(d * 1480)).toFixed(2);
  document.getElementById("totalp").innerHTML = (a*50) + (b*1300) + (c*480) + (d*1480) + (e*1880) + (f*790) + (g*30) + (h*29) + (i*300);
});

addd.addEventListener("click", function() {
  d++;
  document.getElementById("four").innerHTML = d;
  document.getElementById("price4").innerHTML = parseFloat(Math.round(d * 1480)).toFixed(2);
  document.getElementById("totalp").innerHTML = (a*50) + (b*1300) + (c*480) + (d*1480) + (e*1880) + (f*790) + (g*30) + (h*29) + (i*300);
});

cartd.addEventListener("click", function() {
  d++;
  document.getElementById("four").innerHTML = d;
  document.getElementById("price4").innerHTML = parseFloat(Math.round(d * 1480)).toFixed(2);
  alert("Add the 'C�te d'Azur Patch Sweatshirt' to the cart.");
});

subtracte.addEventListener("click", function() {
  e--;
  if(e<=0) {
    e= 0;
    li5.style.display = "none";
  }
  document.getElementById("five").innerHTML = e;
  document.getElementById("price5").innerHTML = parseFloat(Math.round(e * 1880)).toFixed(2);
  document.getElementById("totalp").innerHTML = (a*50) + (b*1300) + (c*480) + (d*1480) + (e*1880) + (f*790) + (g*30) + (h*29) + (i*300);
});

adde.addEventListener("click", function() {
  e++;
  document.getElementById("five").innerHTML = e;
  document.getElementById("price5").innerHTML = parseFloat(Math.round(e * 1880)).toFixed(2);
  document.getElementById("totalp").innerHTML = (a*50) + (b*1300) + (c*480) + (d*1480) + (e*1880) + (f*790) + (g*30) + (h*29) + (i*300);
});

carte.addEventListener("click", function() {
  e++;
  document.getElementById("five").innerHTML = e;
  document.getElementById("price5").innerHTML = parseFloat(Math.round(e * 1880)).toFixed(2);
  alert("Add the 'Gucci Zumi Smooth' to the cart.");
});

subtractf.addEventListener("click", function() {
  f--;
  if(f<=0) {
    f= 0;
    li6.style.display = "none";
  }
  document.getElementById("six").innerHTML = f;
  document.getElementById("price6").innerHTML = parseFloat(Math.round(f * 790)).toFixed(2);
  document.getElementById("totalp").innerHTML = (a*50) + (b*1300) + (c*480) + (d*1480) + (e*1880) + (f*790) + (g*30) + (h*29) + (i*300);
});

addf.addEventListener("click", function() {
  f++;
  document.getElementById("six").innerHTML = f;
  document.getElementById("price6").innerHTML = parseFloat(Math.round(f * 790)).toFixed(2);
  document.getElementById("totalp").innerHTML = (a*50) + (b*1300) + (c*480) + (d*1480) + (e*1880) + (f*790) + (g*30) + (h*29) + (i*300);
});

cartf.addEventListener("click", function() {
  f++;
  document.getElementById("six").innerHTML = f;
  document.getElementById("price6").innerHTML = parseFloat(Math.round(f * 790)).toFixed(2);
  alert("Add the 'Dique Gucci Hoodie' to the cart.");
});

subtractg.addEventListener("click", function() {
  g--;
  if(g<=0) {
    g= 0;
    li7.style.display = "none";
  }
  document.getElementById("seven").innerHTML = g;
  document.getElementById("price7").innerHTML = parseFloat(Math.round(g * 30)).toFixed(2);
  document.getElementById("totalp").innerHTML = (a*50) + (b*1300) + (c*480) + (d*1480) + (e*1880) + (f*790) + (g*30) + (h*29) + (i*300);
});

addg.addEventListener("click", function() {
  g++;
  document.getElementById("seven").innerHTML = g;
  document.getElementById("price7").innerHTML = parseFloat(Math.round(g * 30)).toFixed(2);
  document.getElementById("totalp").innerHTML = (a*50) + (b*1300) + (c*480) + (d*1480) + (e*1880) + (f*790) + (g*30) + (h*29) + (i*300);
});

cartg.addEventListener("click", function() {
  g++;
  document.getElementById("seven").innerHTML = g;
  document.getElementById("price7").innerHTML = parseFloat(Math.round(g * 30)).toFixed(2);
  alert("Add the 'Gucci's Vintage Classic T-shirt' to the cart.");
});

subtracth.addEventListener("click", function() {
  h--;
  if(h<=0) {
    h= 0;
    li8.style.display = "none";
  }
  document.getElementById("eight").innerHTML = h;
  document.getElementById("price8").innerHTML = parseFloat(Math.round(h * 29)).toFixed(2);
  document.getElementById("totalp").innerHTML = (a*50) + (b*1300) + (c*480) + (d*1480) + (e*1880) + (f*790) + (g*30) + (h*29) + (i*300);
});

addh.addEventListener("click", function() {
  h++;
  document.getElementById("eight").innerHTML = h;
  document.getElementById("price8").innerHTML = parseFloat(Math.round(h * 29)).toFixed(2);
  document.getElementById("totalp").innerHTML = (a*50) + (b*1300) + (c*480) + (d*1480) + (e*1880) + (f*790) + (g*30) + (h*29) + (i*300);
});

carth.addEventListener("click", function() {
  h++;
  document.getElementById("eight").innerHTML = h;
  document.getElementById("price8").innerHTML = parseFloat(Math.round(h * 29)).toFixed(2);
  alert("Add the 'Gucci Dabbing Unicorn Youth Shirt' to the cart.");
});

subtracti.addEventListener("click", function() {
  i--;
  if(i<=0) {
    i= 0;
    li9.style.display = "none";
  }
  document.getElementById("nine").innerHTML = i;
  document.getElementById("price9").innerHTML = parseFloat(Math.round(i * 300)).toFixed(2);
  document.getElementById("totalp").innerHTML = (a*50) + (b*1300) + (c*480) + (d*1480) + (e*1880) + (f*790) + (g*30) + (h*29) + (i*300);
});

addi.addEventListener("click", function() {
  i++;
  document.getElementById("nine").innerHTML = i;
  document.getElementById("price9").innerHTML = parseFloat(Math.round(i * 300)).toFixed(2);
  document.getElementById("totalp").innerHTML = (a*50) + (b*1300) + (c*480) + (d*1480) + (e*1880) + (f*790) + (g*30) + (h*29) + (i*300);
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("list-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Get the item1
var li1 = document.getElementsByClassName("i1")[0];
var li2 = document.getElementsByClassName("i2")[0];
var li3 = document.getElementsByClassName("i3")[0];
var li4 = document.getElementsByClassName("i4")[0];
var li5 = document.getElementsByClassName("i5")[0];
var li6 = document.getElementsByClassName("i6")[0];
var li7 = document.getElementsByClassName("i7")[0];
var li8 = document.getElementsByClassName("i8")[0];
var li9 = document.getElementsByClassName("i9")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  if(a > 0) {
    li1.style.display = "block";
    console.log(a)
  }
  if(b > 0) {
    li2.style.display = "block";
  }
  if(c > 0) {
    li3.style.display = "block";
  }
  if(d > 0) {
    li4.style.display = "block";
  }
  if(e > 0) {
    li5.style.display = "block";
  }
  if(f > 0) {
    li6.style.display = "block";
  }
  if(g > 0) {
    li7.style.display = "block";
  }
  if(h > 0) {
    li8.style.display = "block";
  }
  if(i > 0) {
    li9.style.display = "block";
  }
  document.getElementById("totalp").innerHTML = (a*50) + (b*1300) + (c*480) + (d*1480) + (e*1880) + (f*790) + (g*30) + (h*29) + (i*300);
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

//slide show

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

carta.addEventListener("click", function() {
  a++;
  document.getElementById("one").innerHTML = a;
  document.getElementById("price1").innerHTML = a * 50;
  alert("Add the 'Trump Supreme T-shirt' to the cart.");

});

carti.addEventListener("click", function() {
  i++;
  document.getElementById("nine").innerHTML = i;
  document.getElementById("price9").innerHTML = i * 300;
  alert("Add the 'Vintage Men's Red Gucci Shirt' to the cart.");
});

/* when website title is clicked, make all items appear again */
var siteTitle = document.getElementsByClassName("site-title")[0];
siteTitle.addEventListener("click", function() {
  for (var i = allItems.length - 1; i > -1; i--) {
    allItems[i].style.display = "flex";
  }
});
