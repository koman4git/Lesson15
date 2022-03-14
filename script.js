'use strict';

const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    let elem;
    let str;
    this.func = function() {
        if(this.selector[0] == '.') {
            elem = document.createElement('div');
            str = this.selector.slice(1);
            elem.classList.add(str);
            
        } else if(this.selector[0] == '#') {
            elem = document.createElement('p');
            str = this.selector.slice(1);
            elem.setAttribute('id', str);
        } else alert('Вы ввели не тот элемент');
        elem.innerHTML = "Привет!";
        elem.style.cssText = 'height: ' + this.height + 'px;' + 
                                'width: ' + this.width + 'px;' +
                                'background: ' + this.bg + ';' +
                                'font-size: ' + this.fontSize + 'px;';
        document.body.appendChild(elem); 
    }    
    
};

const newElem = new DomElement('#block', 200, 700, 'red', 80);
newElem.func();