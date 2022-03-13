'use strict';

const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.func = function() {
        if(this.selector[0] == '.') {
            let elem = document.createElement('div');
            let str = this.selector.slice(1);
            elem.classList.add(str);
            elem.innerHTML = "Привет!";
            elem.style.cssText = 'height: ' + this.height + 'px;' + 
                                'width: ' + this.width + 'px;' +
                                'background: ' + this.bg + ';' +
                                'font-size: ' + this.fontSize + 'px;';
            document.body.appendChild(elem);
        } else if(this.selector[0] == '#') {
            let elem = document.createElement('p');
            let str = this.selector.slice(1);
            elem.setAttribute('id', str);
            elem.innerHTML = "Привет!";
            elem.style.cssText = 'height: ' + this.height + 'px;' + 
                                'width: ' + this.width + 'px;' +
                                'background: ' + this.bg + ';' +
                                'font-size: ' + this.fontSize + 'px;';
            document.body.appendChild(elem);
        } else alert('Вы ввели не тот элемент');
    }     
};

const newElem = new DomElement('.block', 200, 700, 'green', 50);
newElem.func();