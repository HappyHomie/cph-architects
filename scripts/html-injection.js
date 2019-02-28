// checks if the tag contains 'index'
var isIndex = document.getElementById('header').innerHTML == 'index';

// Conditional operator ( if statement ), boolaen ? true : false
var path = isIndex ? '.' : '..'

// template literals, strings with javascript '${...}'
var header = `
    <link rel="stylesheet" href="${path}/styles/navigation.css">
    <nav>
        <a href='${path}/index.html' class="title"><h1>CPH Architects</h1></a>
        <label for="checkbox">
            <img class="navmobil" src="${path}/img/navmobil.png">
        </label>
        <input id="checkbox" type="checkbox">
        <ul class="menu">
            <li><a href="${path}/index.html">Home</a></li>
            <li><a href="${path}/pages/side2.html">Menu1</a></li>
            <li><a href="${path}/pages/side3.html">Menu2</a></li>
            <li><a href="${path}/pages/side4.html">Menu3</a></li>
        </ul>
    </nav>
`

var footer = `
    <link rel="stylesheet" href="${path}/styles/footer.css">
    <address>
        CPH Architects <br>
        Piet Hein's Gade 42 <br>
        DK-2820 Søborg <br>
        +45 12 34 56 78 <br>
        hello@cpharchitect.dk
    </address>
    <p>
        Ophavsret &#9400; 2018, alle rettigheder forbeholdes
    </p>
    <figure id="fb">
        <a href="www.facebook.com">
            <img src="${path}/img/fb-symbol.png" alt="Facebook">
        </a>
    </figure>
    <figure id="twit">
        <a href="www.twitter.com">
            <img src="${path}/img/twitter-symbol.png" alt="Twitter">
        </a>
    </figure>
    <figure id="insta">
        <a href="www.twitter.com">
            <img src="${path}/img/instagram symbol.png" alt="insta">
        </a>    
    </figure>
`

document.getElementById('header').innerHTML = header;
document.getElementById('footer').innerHTML = footer;
