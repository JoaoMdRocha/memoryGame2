var ul = document.querySelector('ul');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}



    var listItems = document.getElementById("board").getElementsByTagName('li');

    for (var i=0; i<listItems.length; i++) {
        listItems[i].addEventListener('click', doStuff, false);
    }

    function doStuff() {
        listItems.removeChild(div);
    }
