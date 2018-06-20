

document.addEventListener('DOMContentLoaded', function () {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let text = document.createTextNode('This is an h1');
    let h2 = document.createElement('h2');
    let h2text = document.createTextNode('This is an h2');
    let h3 = document.createElement('h3');
    let h3text = document.createTextNode('This is an h3');
    let h4 = document.createElement('h4');
    let h4text = document.createTextNode('This is an h4');
    let h5 = document.createElement('h5');
    let h5text = document.createTextNode('This is an h5');
    let h6 = document.createElement('h6')
    let h6text = document.createTextNode('This is an h6');

    div.className = 'header-container';
    h1.className = 'h1';
    h2.className = 'h2';
    h3.className = 'h3';
    h4.className = 'h4';
    h5.className = 'h5';
    h6.className = 'h6';

    h1.appendChild(text);
    div.appendChild(h1);

    h2.appendChild(h2text);
    div.appendChild(h2);

    h3.appendChild(h3text);
    div.appendChild(h3);

    h4.appendChild(h4text);
    div.appendChild(h4);

    h5.appendChild(h5text);
    div.appendChild(h5);

    h6.appendChild(h6text);
    div.appendChild(h6);

    document.body.appendChild(div);
    

    let colors = ['pink', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    function randomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    h1.onselectstart = function () {
        return false;
    }

    h1.addEventListener('dblclick', function () {
        h1.style.color = randomColor(colors);
    });

    let count = 1;
    let ul = document.createElement('ul');
    document.body.appendChild(ul)

    function newLi() {
        let li = document.createElement('li');
        let liText = document.createTextNode('This is list item ' + count);
        ul.appendChild(li);
        li.appendChild(liText);
        count++

        li.addEventListener('click', function () {
            function randomColor(colors) {
                return colors[Math.floor(Math.random() * colors.length)];
            }
            var newColor = randomColor(colors);
            li.style.color = newColor;
        });
        li.addEventListener('dblclick', function () {
            ul.removeChild(li);
        })
    };

    let btn = document.getElementById('countButton');

    btn.addEventListener('click', newLi);

})
