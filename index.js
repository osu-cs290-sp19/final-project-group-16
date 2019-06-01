var allWords = [];
var currentWord = 0;
var search_Input = 0;

function checking_tweet(text, author) {
    if (text === "") {
        alert("Please fill the twit text box");
        return false;
    }
    if (author === "") {
        alert("Please fill the author box.");
        return false;
    }


    insert_container(text, author);
    modal_shadow.style.display = "none";
    modal_interface.style.display = "none";
}

function insert_container(text, author) {
    var create_article = document.createElement('article');
    create_article.classList.add('twit');

    var crate_div = document.createElement('div');
    crate_div.classList.add('twit-icon');
    create_article.appendChild(crate_div); 

    var icon = document.createElement('i');
    icon.classList.add('fas');
    icon.classList.add('fa-bullhorn');
    crate_div.appendChild(icon);

    var create_content = document.createElement('div');
    create_content.classList.add('twit-content');
    create_article.appendChild(create_content); 

    
    var create_p = document.createElement('p');
    create_p.classList.add('twit-text');
    var create_text = document.createTextNode(text);
    create_p.appendChild(create_text);
    create_content.appendChild(create_p);
    
    
    
    var create_author = document.createElement('p');
    create_author.classList.add('twit-author');
    create_content.appendChild(create_author);

    var create_link = document.createElement('a');
    create_link.href = '#';
    create_link.textContent = author;
    create_author.appendChild(create_link);
    document.body.append(create_article);

    document.getElementsByClassName("twit-container")[0].appendChild(create_article);
    document.getElementById("twit-text-input").value = "";
    document.getElementById("twit-attribution-input").value = "";   
}

var modal_shadow = document.getElementById('modal-backdrop');
var modal_interface = document.getElementById('create-twit-modal');

var btn_open = document.getElementById('create-twit-button');
btn_open.addEventListener('click', function (event) {
    modal_shadow.style.display = "block";
    modal_interface.style.display = "block";
});

var btn_create = document.getElementsByClassName('modal-accept-button');
btn_create[0].addEventListener('click', function (event) {
    var t_text = document.getElementById('twit-text-input').value;
    var t_author = document.getElementById('twit-attribution-input').value;
    event.preventDefault();
    checking_tweet(t_text, t_author);
   
});

var btn_can = document.getElementsByClassName('modal-cancel-button');  
btn_can[0].addEventListener('click', function (event) {
    modal_shadow.style.display = "none";
    modal_interface.style.display = "none"; 
    document.getElementById("twit-text-input").value = "";
    document.getElementById("twit-attribution-input").value = "";  
});

var btn_close = document.getElementsByClassName('modal-close-button');
btn_close[0].addEventListener('click', function (event) {
    modal_shadow.style.display = "none";
    modal_interface.style.display = "none"; 
    document.getElementById("twit-text-input").value = "";
    document.getElementById("twit-attribution-input").value = "";  
});

 function divide_word(text) {
    single_word = text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '').toLowerCase().split(' ');
    console.log("== New words:", single_word);
    return single_word;
} 

var search_btn = document.getElementById('navbar-search-button');
search_btn.addEventListener('click', function (event) {
    var input = document.getElementById('navbar-search-input').value;
    search_article(input);
});

function search_article(word) {
    var article = document.getElementsByClassName("twit"); 

    for(i = 0; i < article.length; i++) {
        article[i].style.display = "block";
    }
    if(word.length != 0) {
    for(i = 0; i < article.length; i++) {
        console.log(article[i].innerText);
        var arr_search = divide_word(word);
        var arr_article = divide_word(article[i].innerText);
        var del = 0;
        for(k = 0; k < arr_article.length; k++) {
            for(j = 0; j < arr_search.length; j++) {
                if(arr_search[j] === arr_article[k]) {
                    del = 1;
                }
            }
        }
        if(del != 1) {
            article[i].style.display = "none";
        }
    }
}
}